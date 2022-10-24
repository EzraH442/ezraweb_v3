import React from "react";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  onClick: VoidFunction;
}

const Button: React.FC<IButtonProps> = ({ label, disabled, onClick }) => {
  const transition = disabled
    ? ""
    : "transition duration-500 hover:bg-emerald-700";
  const bg = disabled ? "bg-emerald-700" : "bg-grass-green ";
  return (
    <button
      className={`${transition} ${bg} inline-block text-white px-5 py-3 rounded-2xl`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
