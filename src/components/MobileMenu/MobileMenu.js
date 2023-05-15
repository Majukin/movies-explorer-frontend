import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



import NavLinks from '../NavLinks/NavLinks';

import burgerButton from '../../images/MobileMenu.svg';
import closeBurgerButton from '../../images/closeMobileMenu.svg';


function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const wrightIcon = !isOpen ? burgerButton : closeBurgerButton;
  const classes = `${isOpen ? 'navigation__pages_view_mobile navigation__pages_view_mobile-active' : 'navigation__pages_view_mobile'}`;

  const handleBurgerClick = () => setIsOpen(!isOpen);
  const closeBurgerMenu = () => setIsOpen(false);
  return (
    <ul className={classes}>
      <img className="navigation__burger" src={wrightIcon} alt="иконка меню-бургера" onClick={handleBurgerClick} />
      {isOpen &&
        <>
          <NavLinks view="view_mobile" isMobile={true} closeBurgerMenu={closeBurgerMenu} />
          <NavLink className="navigation__button-account_view_mobile" to="/profile" onClick={closeBurgerMenu} >
            <p className="navigation__name">Аккаунт</p>
          </NavLink>
        </>
      }
    </ul>
  )
}

export default MobileMenu;