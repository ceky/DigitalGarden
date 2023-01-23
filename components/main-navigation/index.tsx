import { NextPage } from "next";
import Categories from "../categories";
import style from "./MainNavigation.module.css";

const MainNavigation: NextPage = () => {
  return (
    <header className={style.headerContainer}>
      <div className="heading">@thingsI♥</div>
      <ul className={style.menu}>
        <Categories />
        <li>About</li>
      </ul>
    </header>
  );
};

export default MainNavigation;
