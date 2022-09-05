import React from "react";
import Column from "./column";

interface ITextColumnProps {
  title: string;
  text: string;
}

const TextColumn: React.FC<ITextColumnProps> = ({ title, text }) => (
  <Column>
    <div className="p-4">
      <h2>{title}</h2>
      <div className="mt-2 mb-4">
        <hr className="divide-black border-black" />
      </div>
      <p>{text}</p>
    </div>
  </Column>
);

export default TextColumn;
