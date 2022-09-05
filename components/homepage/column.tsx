/* eslint-disable react/require-default-props */
import React from "react";

interface IColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<IColumnProps> = ({ children }) => (
  <div
    className="mx-3 my-5 min-w-0 content-center shadow-md shadow-black
  basis-72 grow h-auto"
  >
    {children}
  </div>
);

export default Column;
