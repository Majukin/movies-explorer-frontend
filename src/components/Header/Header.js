import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import logo from "../../images/logo.svg";

import "./Header.css";

function Header({ type, loggedIn }) {
  const headerModificator = loggedIn ? "header header_type_loggedIn" : "header";

  return (
    <header className={`header header_type_${headerModificator}`}>
      <nav className={`header__content header__content_type_${type}`}>
        <Link to="/" className="header__logo-link">
          <img className="header__logo" alt="Логотип сайта" src={logo} />
        </Link>

        {loggedIn && <Navigation login={true} />}

        {!loggedIn && <Navigation />}
      </nav>
    </header>
  );
}

export default Header;
