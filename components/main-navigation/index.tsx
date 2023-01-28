import { NextPage } from "next";
import Categories from "../categories";
import style from "./index.module.css";

const MainNavigation: NextPage = () => {
  return (
    <nav className={style.headerContainer}>
      <div className="heading">@thingsI♥</div>
      <ul className={style.menu}>
        <Categories />
        <li>About</li>
        {/* TODO mobile menu here */}
      </ul>
    </nav>
  );
};

export default MainNavigation;
