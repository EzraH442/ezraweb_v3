/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface TIProps {
  slug: string;
  title: string;
  headline: string;
  timestamp: number;
  date: string;
}

export const TimelineItem: React.FC<TIProps> = ({
  slug,
  title,
  headline,
  timestamp,
  date,
}) => {
  return (
    <Link href={slug}>
      <div
        className="border border-accent overflow-scroll px-3 rounded-md py-2 hover:border-secondary "
        style={{ maxWidth: "200px" }}
      >
        <p>{date}</p>
        <p className="text-accent whitespace-nowrap">{title}</p>
        <p className="whitespace-nowrap">{headline}</p>
      </div>
    </Link>
  );
};

interface Props {
  children: React.ReactElement<TIProps>[];
}

const Filler: React.FC<{ width: number; skip: boolean }> = ({
  width,
  skip,
}) => {
  const minWidth = 100;
  const maxWidth = 1000;

  if (skip && width > maxWidth) {
    return (
      <div
        style={{ width: 300, height: 1 }}
        className="border-b border-2 border-dotted border-secondary grow-0 shrink-0"
      />
    );
  }
  if (width < minWidth) {
    return (
      <div
        style={{ width: minWidth, height: 1 }}
        className="border-b border-dashed border-accent inline grow-0 shrink-0"
      />
    );
  }
  return (
    <div
      style={{ width, height: 1 }}
      className="border-b border-white inline grow-0 shrink-0"
    />
  );
};

const Timeline: React.FC<Props> = ({ children }) => {
  const [useFillerSkips, setUseFillerSkips] = useState(true);

  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: 1000000 });
  }, []);

  const pixelsPerDay = 10;

  return (
    <>
      <div className="flex space-x-2">
        <p>Use skips?</p>
        <input
          type="checkbox"
          checked={useFillerSkips}
          onChange={(e) => setUseFillerSkips(e.target.checked)}
        />
      </div>
      <div style={{ width: 800 }} className="overflow-x-scroll" ref={ref}>
        <div className="flex items-center h-80">
          <Filler width={100} skip={false} />
          {children.map((v, i) => {
            const pos = i % 2 === 0 ? "top-9" : "bottom-9";
            const w =
              i < children.length - 1
                ? (children[i + 1].props.timestamp -
                    children[i].props.timestamp) /
                  ((1000 * 3600 * 24) / pixelsPerDay)
                : 100;
            // 1 day = 1 px
            return (
              <>
                <div
                  key={v.key}
                  style={{ height: 20, width: 1 }}
                  className="border-l border-white relative"
                >
                  <div className={`absolute ${pos}`}>
                    <TimelineItem {...v.props} />
                  </div>
                </div>
                <Filler width={w} key={`${v.key}+`} skip={useFillerSkips} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
