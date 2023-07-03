import React from "react";
import { body } from "./body.module.css";

interface IBodyProps {
  children: React.ReactNode;
}

const Body: React.FunctionComponent<IBodyProps> = ({ children }) => (
  <div className={`${body} text-yellow-300 bg-gray-dark`}>{children}</div>
);

export default Body;
