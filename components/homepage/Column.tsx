/* eslint-disable react/require-default-props */
import React from "react";

interface IColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<IColumnProps> = ({ children }) => (
  <div className="mx-3 my-5 shadow-md shadow-accent">{children}</div>
);

export default Column;
