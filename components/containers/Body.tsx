import React from "react";
import { body } from "./body.module.css";

interface IBodyProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

const Body: React.FunctionComponent<IBodyProps> = ({
  backgroundColor = "#cfe8a3",
  children,
}) => (
  <div style={{ backgroundColor }} className={body}>
    {children}
  </div>
);

export default Body;
