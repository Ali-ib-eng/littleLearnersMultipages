import { useState } from "react";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import type { NavBarProps } from "../../interfaces";
import styles from "./NavBar.module.css";

const NavBar = ({ navItems }: NavBarProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.mylogo}>
        <img src="./img/Logo.png" alt="Little Learners" />
      </Link>

      <button
        type="button"
        className={styles.navbtn}
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
      </button>

      <ul className={`${styles.navlist} ${isShow ? styles.open : ""}`}>
        {navItems.map(({ link, href }) => (
          <li key={href} className={styles.item}>
            <NavLink
              to={href}
              onClick={() => setIsShow(false)}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : ""}`
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
