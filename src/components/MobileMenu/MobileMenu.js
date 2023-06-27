import { useState } from "react";
import { NavLink } from "react-router-dom";

import NavLinks from "../NavLinks/NavLinks";

import mobileMenuButton from "../../images/mobile-menu.svg";
import closeMobileMenuButton from "../../images/close-button.svg";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMobileMenu() {
    setIsOpen(false);
  }

  return (
    <ul
      className={
        isOpen
          ? "navigation__pages_view_mobile navigation__pages_view_mobile-active"
          : "navigation__pages_view_mobile"
      }
    >
      <img
        className="navigation__mobile-menu"
        src={!isOpen ? mobileMenuButton : closeMobileMenuButton}
        alt="иконка мобильного меню"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <>
          <NavLinks
            view="view_mobile"
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />

          <NavLink
            className="navigation__button-account_view_mobile"
            to="/profile"
            onClick={closeMobileMenu}
          >
            <p className="navigation__name">Аккаунт</p>
          </NavLink>
        </>
      )}
    </ul>
  );
}

export default MobileMenu;
