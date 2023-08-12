import React from "react";

interface IDividerProps {
  color?: string;
}

const Divider: React.FunctionComponent<IDividerProps> = ({ color }) => (
  <div className="py-2">
    <hr
      className={`border-${color ?? "primary"} divide-${color ?? "primary"}`}
    />
  </div>
);

export default Divider;
