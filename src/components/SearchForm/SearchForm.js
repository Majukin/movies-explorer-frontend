import {  useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/search-icon.svg";

import CurrentUserContext from "../../context/CurrentUserContext";
import FormValidation from "../../utils/FormValidation";

import "./SearchForm.css";

function SearchForm({
  filter,
  setFilter,
  savedMoviesSearch,
  handleSearchSubmit,
  searchTag,
}) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  // eslint-disable-next-line no-unused-vars
  const { values, handleChange } = FormValidation();

  useEffect(() => {
    values.search = searchTag;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === "/movies") {
        handleSearchSubmit(values.search)
    } else {
        savedMoviesSearch(values.search)
    }
  }

  return (
    <>
      <section className="search-form">
        <form
          className="search-form__form"
          name="search"
          noValidate
          onSubmit={handleSubmit}
        >
          <img
            src={searchIcon}
            alt="иконка поиска"
            className="search-form__icon"
          />

          <input
            placeholder="Фильм"
            className="search-form__field-input-movie"
            id="search"
            name="search"
            required
            type="text"
            autoComplete="off"
            value={values.search || ""}
            onChange={handleChange}
          />

          <button
            className="search-form__movie-search-button"
            id="movieSearchButton"
            type="submit"
          ></button>
        </form>

        <div className="search-form__form-line"></div>

        <FilterCheckbox filter={filter} setFilter={setFilter} />
      </section>

      <div className="line"></div>
    </>
  );
}

export default SearchForm;
