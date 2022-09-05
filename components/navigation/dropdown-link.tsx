import React from "react";
import Link from "next/link";

type DropdownLinkProps = {
  address: string;
  text: string;
};

const DropdownLink: React.FunctionComponent<DropdownLinkProps> = ({
  address,
  text,
}) => (
  <div className="text-white font-light font-sans p-2">
    <Link href={address}>{text}</Link>
  </div>
);

export default DropdownLink;
