import { NextPage } from "next";
import Link from "next/link";
import Categories from "../categories";
import style from "./index.module.css";

const MainNavigation: NextPage = () => {
  return (
    <nav className={style.headerContainer}>
      <Link href="/" className={style.logo}>
        @thingsI♥
      </Link>
      <div className={style.menu}>
        <Categories />
        <Link href="/about" className={style.link}>
          About
        </Link>
        {/* TODO mobile menu here */}
      </div>
    </nav>
  );
};

export default MainNavigation;
