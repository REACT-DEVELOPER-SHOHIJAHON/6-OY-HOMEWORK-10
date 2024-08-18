import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            className="w-32 h-auto transition-transform duration-300 hover:scale-105"
            src={logo}
            alt="Company Logo"
          />
        </Link>

        <div className="flex items-center gap-8">
          <select
            name="language-picker-select"
            id="language-picker-select"
            defaultValue={i18n.language}
            onChange={handleChangeLanguage}
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors duration-300"
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>

          <ul className="flex items-center gap-10 font-medium text-white text-lg md:text-xl lg:text-2xl">
            {[
              "nav-1",
              "nav-2",
              "nav-3",
              "nav-4",
              "nav-5",
              "nav-6",
              "nav-7",
            ].map((navItem, index) => (
              <li key={index} className="relative">
                <Link
                  to={`/${navItem}`}
                  className="relative flex items-center transition-colors duration-300 text-white hover:text-teal-300"
                >
                  {t(navItem)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
