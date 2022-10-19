import React, { HTMLAttributes } from "react";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  onClick: VoidFunction;
}

const Button: React.FC<IButtonProps> = ({ label, disabled, onClick }) => (
  <button
    className="inline-block bg-grass-green text-white px-5 py-3
                 rounded-2xl transition duration-500 hover:bg-emerald-700"
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
