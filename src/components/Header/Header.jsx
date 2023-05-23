import { Link, useLocation } from "react-router-dom";
import React, { useRef } from "react";

import { useStore } from "../../services/StoreProvider";

import logo from "../../images/logo.svg";
import iconMobile from "../../images/iconMobile.png";

import "./Header.css";

function Header() {
  const menuRef = useRef();
  const location = useLocation();
  const path = location.pathname;
  const [state] = useStore();
  const { loggedIn } = state;

  const handleOpenMenu = () => {
    const menu = menuRef.current;
    menu.style.display = "flex";
  };

  const handleCloseMenu = () => {
    const menu = menuRef.current;
    menu.style.display = "";
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип" />
      </Link>
      {loggedIn ? (
        <nav className="header__navigate header__navigate-movies">
          <ul className="header__movies" ref={menuRef}>
            <button
              className="header__burger-close"
              onClick={handleCloseMenu}
            ></button>
            <li
              className={`header__movies-item ${
                path === "/" && "header__movies-item_selected"
              }`}
            >
              <Link to="/" className="link" onClick={handleCloseMenu}>
                Главная
              </Link>
            </li>
            <li
              className={`header__movies-item ${
                path === "/movies" && "header__movies-item_selected"
              }`}
            >
              <Link to="/movies" className="link" onClick={handleCloseMenu}>
                Фильмы
              </Link>
            </li>
            <li
              className={`header__movies-item ${
                path === "/saved-movies" && "header__movies-item_selected"
              }`}
            >
              <Link
                to="/saved-movies"
                className="link"
                onClick={handleCloseMenu}
              >
                Сохранённые фильмы
              </Link>
            </li>
            <li className="header__movies-item">
              <Link
                to="/profile"
                className="header__link-profile color_background link"
                onClick={handleCloseMenu}
              >
                Аккаунт
              </Link>
            </li>
          </ul>
          <img className='header__burger link' alt='Логотип сайта' src={iconMobile} onClick={handleOpenMenu} />
        </nav>
      ) : (
        <nav className="header__navigate">
          <ul className="header__auth">
            <li className="header__auth-item link">
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            </li>
            <li className="header__auth-item link">
              <Link to="/sign-in" className="header__link color_primary">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
