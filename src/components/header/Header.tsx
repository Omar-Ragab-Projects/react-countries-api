import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import "./header.css";

function Header() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("Dark Mode");

  // Change Body data-theme Everytime Theme Change
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function changeTheme() {
    // Change Theme At The Body
    setTheme(theme === "dark" ? "light" : "dark");
    // Change The Text Of The Button
    setMode(mode === "Dark Mode" ? "Light Mode" : "Dark Mode");
  }

  return (
    <div className="header ">
      <div className="logo">Where in the world?</div>
      <div className="dark-light" onClick={changeTheme}>
        <FaMoon />
        <span>{mode}</span>
      </div>
    </div>
  );
}

export default Header;
