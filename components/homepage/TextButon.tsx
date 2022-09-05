import Link from "next/link";
import React from "react";

interface ITextButtonProps {
  href: string;
  label: string;
}

const TextButton: React.FC<ITextButtonProps> = ({ href, label }) => (
  <Link href={href} passHref>
    <a
      className="inline-block bg-grass-green text-white px-5 py-3
                 rounded-2xl transition duration-500 hover:bg-emerald-700"
      href="inherit"
    >
      {label}
    </a>
  </Link>
);

export default TextButton;
