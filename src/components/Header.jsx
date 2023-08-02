import React, { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const body = document.querySelector("body");

    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="font-bold text-2xl blue-dark-text">
          Social Media Dashboard
        </h1>
        <p className="font-bold text-sm gray-blue-text">
          Total Followers: 23,004
        </p>
      </div>
      <div className="toggle">
        <label
          className="font-bold gray-blue-text text-sm cursor-pointer"
          htmlFor="checkbox"
        >
          Dark mode
        </label>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={!darkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="checkbox" className="label">
          <div className="ball"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;
