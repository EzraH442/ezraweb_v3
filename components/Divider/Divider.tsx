import React from "react";

interface IDividerProps {}

const Divider: React.FunctionComponent<IDividerProps> = () => (
  <div className="py-2">
    <hr className="divide-black border-black" />
  </div>
);

export default Divider;
