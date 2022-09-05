import Link from "next/link";
import React from "react";

interface IDropdownLinkProps {
  address: string;
  text: string;
}

const DropdownLink: React.FunctionComponent<IDropdownLinkProps> = ({
  address,
  text,
}) => (
  <div className="text-white font-light font-sans p-2">
    <Link href={address}>{text}</Link>
  </div>
);

export default DropdownLink;
