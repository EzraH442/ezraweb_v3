import React, { useEffect } from "react";
import formatDate, { Months } from "../../lib/util";
import { PostData } from "../../types/post";
import TimelineItem from "./TimelineItem";

const Filler: React.FC<{ width: number }> = ({ width }) => {
  const s = { width, height: 1 };
  const c = "border-b border grow-0 shrink-0";

  return <div style={s} className={`${c} border-b border-white`} />;
};

interface TickProps {
  children?: React.ReactNode;
}

const Tick: React.FC<TickProps> = ({ children }) => {
  return (
    <div
      style={{ height: 20, width: 1 }}
      className="border-l border-white relative"
    >
      {children}
    </div>
  );
};

interface Props {
  posts: PostData[];
  scale?: number;
  begin?: Date;
}

const generateDates = (begin: Date) => {
  const current = new Date();
  const currentYear = current.getFullYear();

  const years = [];
  const months = [...Array.from(Array(12).keys())];

  for (let i = begin.getFullYear(); i <= currentYear; i++) {
    years.push(i);
  }

  for (let i = 0; i < begin.getMonth(); i++) {
    months.push(months.shift()!);
  }

  const dates: Date[] = [];

  for (let i = 0; i < years.length; i++) {
    for (let j = 0; j < months.length; j++) {
      const m = (months[j] + begin.getMonth()) % 12;
      const carry = months[j] + begin.getDate() > 12 ? 1 : 0;
      const y = years[i] + carry;
      const d = new Date(y, m);
      if (d.getTime() > current.getTime()) return dates;
      dates.push(d);
    }
  }

  return dates;
};

const Timeline: React.FC<Props> = ({
  posts,
  scale = 1,
  begin = new Date(2021, 0),
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: 1e9 });
  }, [ref]);

  const pixelsPerMili = 5 * (1 / 24) * (1 / 3600) * (1 / 1000) * scale;

  const dates = generateDates(begin);
  const start = dates[0].getTime();

  const calculateOffset = (unixMili: number) => {
    return pixelsPerMili * (unixMili - start);
  };

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
              <Tick>
                <p className="absolute bottom-6 left-[-13px] w-24">
                  {Months[d.getMonth()]}
                </p>
                {d.getMonth() === 0 && (
                  <p className="absolute top-6 left-[-4px] w-24 text-4xl opacity-60 text-accent after:">
                    {d.getFullYear()}
                  </p>
                )}
              </Tick>
              <Filler width={w - 1} />
            </div>
          );
        })}
        {posts.map((p) => {
          return (
            <TimelineItem
              offset={calculateOffset(p.context.date)}
              key={p.context.date}
              href={`/posts/${p.context.slug}`}
            >
              <div
                className="w-0 h-0 border-t-0 border-b-8 border-accent"
                style={{
                  border: "",
                }}
              />
              <div className="absolute top-5 z-30 bg-background border border-accent w-80 max-h-80 rounded-md ml-[-20px]">
                <div className="mx-4 my-2">
                  <p>{formatDate(new Date(p.context.date))}</p>
                  <h3 className="text-accent">{p.metadata.title!}</h3>
                  <p>{p.metadata.headline}</p>
                </div>
              </div>
            </TimelineItem>
          );
        })}
        <TimelineItem
          offset={calculateOffset(new Date().getTime())}
          className="bg-accent"
        />
      </div>
    </div>
  );
};

export default Timeline;
