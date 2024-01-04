import React, { useEffect } from "react";
import { months } from "../../lib/util";
import { PostData } from "../../types/post";

const Filler: React.FC<{ width: number }> = ({ width }) => {
  const s = { width, height: 1 };
  const c = "border-b border grow-0 shrink-0";

  return <div style={s} className={`${c} border-b border-white`} />;
};

interface Props {
  posts: PostData[];
}

const TimelineA: React.FC<Props> = ({ posts }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: 1000000 });
  }, [ref]);

  const pixelsPerMili = 5 * (1 / 24) * (1 / 3600) * (1 / 1000);

  // 1970 0
  // 1970 1
  // 1970 2
  // ...
  // 1970 11
  // 1971 0
  const years = [2021, 2022, 2023, 2024];
  const ms = [...Array.from(Array(12).keys())];
  const dates: Date[] = [];

  years.forEach((y) => {
    ms.forEach((m) => {
      dates.push(new Date(y, m));
    });
  });

  const start = dates[0].getTime();

  return (
    <div className="flex min-h-0 min-w-0 overflow-x-scroll px-4" ref={ref}>
      <div className="flex items-center h-80 relative">
        {dates.map((d, i) => {
          const w =
            i < dates.length - 1
              ? (dates[i + 1].getTime() - d.getTime()) * pixelsPerMili
              : 100;
          return (
            <div key={i} className="flex items-center">
              <div
                style={{ height: 20, width: 1 }}
                className="border-l border-white relative"
              >
                <p className="absolute bottom-6 left-[-13px] w-24">
                  {months[d.getMonth()]}
                </p>
                {d.getMonth() === 0 && (
                  <p className="absolute top-6 left-[-4px] w-24 text-4xl opacity-60 text-accent after:">
                    {d.getFullYear()}
                  </p>
                )}
              </div>
              <Filler width={w} />
            </div>
          );
        })}
        {posts.map((p) => {
          const offset = (p.context.date - start) * pixelsPerMili;

          return (
            <div
              key={p.context.date}
              className="absolute w-3 h-3 rounded-full bg-secondary cursor-pointer group"
              style={{ left: offset }}
            >
              <div className="relative hidden group-hover:block">
                <div className="absolute top-5 z-30 bg-background border-2 border-accent w-80 h-80">
                  <p>test</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineA;
