import React from "react";
import Divider from "../Divider/Divider";
import Column from "./Column";

interface ITextColumnProps {
  title: string;
  text: string;
}

const TextColumn: React.FC<ITextColumnProps> = ({ title, text }) => (
  <Column>
    <div className="p-4">
      <h2>{title}</h2>
      <div className="pb-2">
        <Divider />
      </div>
      <p>{text}</p>
    </div>
  </Column>
);

export default TextColumn;
