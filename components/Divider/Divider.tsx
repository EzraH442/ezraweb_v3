import React from "react";

interface IDividerProps {
  color?: string;
}

const Divider: React.FunctionComponent<IDividerProps> = ({ color }) => (
  <div className="py-2">
    <hr
      className={`border-${color ?? "yellow-300"} divide-${
        color ?? "yellow-300"
      }`}
    />
  </div>
);

export default Divider;
