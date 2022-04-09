import React from 'react';
import Link from 'next/link';
import { dropdownLink } from './dropdown.module.css';

type DropdownLinkProps = {
    address: string,
    text: string
}

const DropdownLink: React.FunctionComponent<DropdownLinkProps> = ({ address, text }) => (
  <div className={dropdownLink}>
    <Link href={address}>{text}</Link>
  </div>
);

export default DropdownLink;
