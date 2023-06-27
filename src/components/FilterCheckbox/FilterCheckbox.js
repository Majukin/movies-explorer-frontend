import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./FilterCheckbox.css";

function FilterCheckbox({ filter, setFilter }) {
  const location = useLocation();

  function handleFilterClick() {
    setFilter((filter) => !filter);
    localStorage.setItem(location.pathname, !filter);
  }

  useEffect(() => {
    const filterStatus = JSON.parse(localStorage.getItem(location.pathname));
    setFilter(filterStatus);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="checkbox">
      <label className="checkbox__name" htmlFor="checkbox">
        Короткометражки
      </label>

      <input
        type="checkbox"
        id="checkbox"
        className="checkbox__image"
        checked={filter || false}
        onChange={handleFilterClick}
      />
    </div>
  );
}

export default FilterCheckbox;
