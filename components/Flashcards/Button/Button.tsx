import React from "react";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  onClick: VoidFunction;
}

const Button: React.FC<IButtonProps> = ({ label, disabled, onClick }) => {
  const backgroundColor = !disabled ? "bg-grass-green" : "bg-gray-300";
  const transition = !disabled
    ? "transition duration-500 hover:bg-emerald-700"
    : "";

  return (
    <button
      className={`inline-block ${backgroundColor}  text-white px-5 py-3
                 rounded-2xl ${transition}`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
