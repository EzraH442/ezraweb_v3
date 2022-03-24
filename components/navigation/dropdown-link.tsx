import Link from 'next/link';
import { dropdownLink } from './dropdown.module.css';

type DropdownLinkProps = {
    address: string,
    text: string
}

export default function DropdownLink({ address, text }: DropdownLinkProps) {
  return (
    <div className={dropdownLink}>
      <Link href={address}>{text}</Link>
    </div>
  );
}
