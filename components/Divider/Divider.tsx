import React from "react";

interface IDividerProps {}

const Divider: React.FunctionComponent<IDividerProps> = () => (
  <div className="py-2">
    <hr className="border-yellow-300 divide-yellow-300" />
  </div>
);

export default Divider;
