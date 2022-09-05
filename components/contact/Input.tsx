import React from "react";

interface IInputProps {
  placeholder: string;
  multiline?: boolean;
  value: string;
  onChange: (text: string) => void;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  multiline,
  value,
  onChange,
}) => {
  return multiline ? (
    <textarea
      className="block my-2 p-2"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  ) : (
    <input
      className="block my-2 p-2"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
};

export default Input;
