import * as styles from "./navbar-links.module.css";

type NavItemProps = {
    children: any 
}

export default function NavItem({ children }: NavItemProps) {
    return (
        <div className={styles.navItem}>{children}</div>
    );
}