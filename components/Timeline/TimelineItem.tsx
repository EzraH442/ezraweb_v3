import Link from "next/link";
import React from "react";
import formatDate from "../../lib/util";

export interface TimelineItemProps {
  slug: string;
  title: string;
  headline: string;
  date: Date;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  slug,
  title,
  headline,
  date,
}) => {
  return (
    <Link href={slug}>
      <div
        className="px-3 py-2 overflow-scroll relative
                   border border-accent hover:border-secondary rounded-md 
                   w-[200px] hover:bg-background hover:z-50
                   whitespace-nowrap hover:whitespace-normal min-h-24"
      >
        <div className="absolute">
          <p>{formatDate(date)}</p>
          <p className="text-accent">{title}</p>
          <p className="">{headline}</p>
        </div>
      </div>
    </Link>
  );
};
