import "../stylesheets/Header.css";
import Sun from "../assets/icons/icon-sun.svg";
import Moon from "../assets/icons/icon-moon.svg";

const Header = ({ theme, handleClick }) => {
  return (
    <>
      <header className="flex">
        <h1 className="josefin-bold">Todo</h1>
        <img
          className="theme-toggle"
          src={theme === "dark" ? Sun : Moon}
          alt={theme === "dark" ? "Light theme" : "Dark Theme"}
          onClick={handleClick}
        />
      </header>
    </>
  );
};

export default Header;
