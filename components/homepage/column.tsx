/* eslint-disable react/require-default-props */
import React from "react";

interface IColumnProps {
  children: React.ReactNode;
  height?: number | "auto";
}

const Column: React.FC<IColumnProps> = ({ children, height = 385 }) => (
  <div
    className="mx-3 my-5 min-w-0 content-center shadow-md shadow-black
  basis-72 grow"
    style={{ height }}
  >
    {children}
  </div>
);

export default Column;
