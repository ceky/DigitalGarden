import style from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={style.headerContainer}>
      <div className="heading">Things I ♥</div>
      <ul className={style.menu}>
        <li>Dropdown menu here</li>
        <li>About</li>
      </ul>
    </header>
  );
}
