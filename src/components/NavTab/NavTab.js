import { promoList } from "../../utils/consts";

function NavTab() {
  return (
    <ul className="promo__list">
      {promoList.map((item) => (
        <li key={item.value} className="promo__list-item">
          <a href={item.href} className="promo__link">
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTab;
