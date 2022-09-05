import React from "react";

interface IColumnsProps {
  children: React.ReactNode;
}

const Columns: React.FC<IColumnsProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-evenly max-w-full ">
      {children}
    </div>
  );
};

export default Columns;
