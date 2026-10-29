import type { NavBarProps } from "../../interfaces";
import NavBar from "../NavBar/NavBar";
import TopBanner from "../TopBanner/TopBanner";
import styles from "./Header.module.css";

const Header = ({ navItems }: NavBarProps) => {
  return (
    <header className={styles.header}>
      <TopBanner text="Admission is Open, Grab your seat now" href="/admission" />
      <NavBar navItems={navItems} />
    </header>
  );
};

export default Header;