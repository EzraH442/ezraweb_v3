import React, { useEffect, useState } from "react";
import { TimelineItem, TimelineItemProps } from "./TimelineItem";

interface Props {
  children: React.ReactElement<TimelineItemProps>[];
  skip: boolean;
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

const WrappedTimeline = () => {};

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
              <Filler key={`${v.key}+`} width={w} skip={skip} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
