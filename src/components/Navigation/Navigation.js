import { Link } from "react-router-dom";

import Nav from "./Nav/Nav";
import MobileMenu from "../MobileMenu/MobileMenu";

import "./Navigation.css";

function Navigation({ login }) {
  return (
    <div className="navigation">
      {login ? (
        <>
          <Nav />

          <MobileMenu />

          <Link
            className="navigation__button-account navigation__button-account_type_loggedIn"
            to="/profile"
          >
            <p className="navigation__name">Аккаунт</p>
          </Link>
        </>
      ) : (
        <li className="links">
          <Link to="/signup" className="links__signup">
            Регистрация
          </Link>

          <Link to="/signin" className="links__signin">
            Войти
          </Link>
        </li>
      )}
    </div>
  );
}

export default Navigation;
