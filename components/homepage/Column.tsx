import React from "react";

interface IColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<IColumnProps> = ({ children }) => (
  <div className="mx-3 my-5 border-accent border">{children}</div>
);

export default Column;
