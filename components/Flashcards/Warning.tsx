import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IWarningProps {
  text: string;
}

const Warning: React.FC<IWarningProps> = ({ text }) => (
  <div className="bg-yellow-200 px-8 py-4 inline-flex items-center rounded-md">
    <div className="pr-4">
      <FontAwesomeIcon icon={faTriangleExclamation} size="2x" />
    </div>
    <p>{text}</p>
  </div>
);

export default Warning;
