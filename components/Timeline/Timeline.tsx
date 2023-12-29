import React, { useEffect, useState } from "react";
import { TimelineItem, TimelineItemProps } from "./TimelineItem";

interface Props {
  children: React.ReactElement<TimelineItemProps>[];
  skip: boolean;
}

const minWidth = 100;
const maxWidth = 1000;

const getWidth = (w: number) => {
  if (w > maxWidth) return 300;
  if (w < minWidth) return minWidth;
  return w;
};

const Filler: React.FC<{ width: number; skip: boolean }> = ({
  width,
  skip,
}) => {
  const s = { width: getWidth(width), height: 1 };
  const c = "border-b border grow-0 shrink-0";

  if (skip && width > maxWidth) {
    return <div style={s} className={`${c} border-dotted border-secondary`} />;
  }
  if (width < minWidth) {
    return <div style={s} className={`${c} border-dashed border-accent`} />;
  }

  return <div style={s} className={`${c} border-b border-white`} />;
};

const Timeline: React.FC<Props> = ({ children, skip }) => {
  const pixelsPerDay = 10;

  return (
    <div>
      <div className="flex items-center h-80">
        <Filler width={100} skip={false} />
        {children.map((v, i) => {
          const pos = i % 2 === 0 ? "top-9" : "bottom-9";
          const w =
            i < children.length - 1
              ? (children[i + 1].props.date.getTime() -
                  children[i].props.date.getTime()) /
                ((1000 * 3600 * 24) / pixelsPerDay)
              : 100;

          return (
            <div key={v.key} className="flex items-center">
              <div
                style={{ height: 20, width: 1 }}
                className="border-l border-white relative"
              >
                <div className={`absolute ${pos}`}>
                  <TimelineItem {...v.props} />
                </div>
              </div>
              <Filler width={w} skip={skip} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
