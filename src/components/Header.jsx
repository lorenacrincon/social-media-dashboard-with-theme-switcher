import React, { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(true); // Cambio a true

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className="flex items-center justify-between relative z-10 max-w-7xl mx-auto flex-wrap lg:flex-nowrap gap-6 pt-10">
        <div>
          <h1 className="font-bold text-4xl blue-dark-text dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="font-bold text-md gray-blue-text dark:text-slate-400">
            Total Followers: 23,004
          </p>
        </div>
        <div className="flex gap-3">
          <div>
            <label
              className="font-bold light-toggle-text text-sm cursor-pointer dark:text-white self-center"
              htmlFor="checkbox"
            >
              Dark mode
            </label>
          </div>
          <div className="">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <label htmlFor="checkbox" className="label flex items-center">
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
