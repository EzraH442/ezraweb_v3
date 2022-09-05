import React from "react";

import { body } from "./body.module.css";

type BodyProps = {
  backgroundColor?: string;
};

const Body: React.FunctionComponent<BodyProps> = ({
  backgroundColor = "#cfe8a3",
  children,
}) => (
  <div style={{ backgroundColor }} className={body}>
    {children}
  </div>
);

export default Body;
