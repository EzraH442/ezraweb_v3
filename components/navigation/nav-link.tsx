import Link from "next/link";

import NavItem from "./nav-item";

import { navLink } from "./navbar-links.module.css";

type NavLinkProps = {
    address: string,
    text: string,
}

export default function NavLink({ address, text }: NavLinkProps) {
    return (
        <NavItem>
            <div className={navLink}>
                <Link href={`../../${address}`}>{text}</Link>
            </div>
        </NavItem>
    );
}