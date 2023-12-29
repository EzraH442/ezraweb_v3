import Link from "next/link";
import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(d: Date): string {
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

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
        className="border border-accent overflow-scroll px-3 rounded-md py-2 hover:border-secondary "
        style={{ maxWidth: "200px" }}
      >
        <p>{formatDate(date)}</p>
        <p className="text-accent whitespace-nowrap">{title}</p>
        <p className="whitespace-nowrap">{headline}</p>
      </div>
    </Link>
  );
};
