import React, { PropsWithChildren } from "react";

interface IDividerProps {
  color?: string;
}

const Divider: React.FunctionComponent<PropsWithChildren<IDividerProps>> = ({ color, children }) => (
  children ? (
    <div className="flex items-center space-x-4 py-2 w-full">
      <hr
        className={`border-${color ?? "primary"} divide-${color ?? "primary"} grow`}
      />
      {children}
      <hr
        className={`border-${color ?? "primary"} divide-${color ?? "primary"} grow`}
      />
    </div>
  ) : (
    <div className="py-2">
      <hr
        className={`border-${color ?? "primary"} divide-${color ?? "primary"}`}
      />
    </div>
  )
);

export default Divider;
