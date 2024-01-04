import React from "react";

interface ITitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ className, children }) => {
  return (
    <h1
      className={`font-raleway font-thin text-2xl text-fuchsia-300 ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
