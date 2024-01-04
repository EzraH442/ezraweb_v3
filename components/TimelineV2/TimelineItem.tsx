import Link from "next/link";
import React from "react";

interface Props {
  offset: number;
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const TimelineItem: React.FC<Props> = ({
  offset,
  children,
  className,
  href,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`absolute w-3 h-3 rounded-full bg-secondary group ${
          className ?? ""
        }`}
        style={{ left: offset }}
      >
        <div className="relative hidden group-hover:block">{children}</div>
      </Link>
    );
  }

  return (
    <div
      className={`absolute w-3 h-3 rounded-full bg-secondary group ${
        className ?? ""
      }`}
      style={{ left: offset }}
    >
      <div className="relative hidden group-hover:block">{children}</div>
    </div>
  );
};

export default TimelineItem;
