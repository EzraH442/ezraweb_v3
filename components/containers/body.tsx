import React from "react";

import { body } from "./body.module.css";

type BodyProps = {
  // eslint-disable-next-line react/require-default-props
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
