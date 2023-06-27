import { NavLink } from "react-router-dom";

function NavLinks({ view, ...props }) {
  function handleCloseMobileMenu() {
    props.isMobile && props.closeMobileMenu();
  }
  const classes = view
    ? `navigation__page navigation__page_${view}`
    : "navigation__page";

  return (
    <>
      <NavLink className={classes} to="/">
        Главная
      </NavLink>

      <NavLink className={classes} to="/movies" onClick={handleCloseMobileMenu}>
        Фильмы
      </NavLink>

      <NavLink
        className={classes}
        to="/saved-movies"
        onClick={handleCloseMobileMenu}
      >
        Сохранённые фильмы
      </NavLink>
    </>
  );
}
export default NavLinks;

