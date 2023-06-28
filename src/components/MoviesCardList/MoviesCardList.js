import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList({
  items,
  savedItems,
  filter,
  bookmarkClick,
  deleteClick,
  index,
  addCards,
}) {
  const location = useLocation();

  const movieFilter = items.filter((item) => item.duration <= 40);

  let renderСards = filter
    ? movieFilter.slice(0, index)
    : items.slice(0, index);
  renderСards &&
    renderСards.forEach((movie) => {
      movie.saved = false;
      savedItems.forEach((savedMovie) => {
        if (savedMovie.movieId === (movie.id || movie.movieId)) {
          movie.saved = true;
        }
      });
    });

  function isDisabled() {
    return index > renderСards.length;
  }
  return (
    <>
      <ul className="cards">
        {renderСards.map((item) => (
          <MoviesCard
            key={item.id || item._id}
            item={item}
            saved={item.saved}
            bookmarkClick={bookmarkClick}
            deleteClick={deleteClick}
          />
        ))}
      </ul>

      <div className="movies__container">
        {!!renderСards.length &&
          renderСards.length === index &&
          location.pathname === "/movies" && (
            <button
              className={`movies__button 
                ${index > renderСards.length ? "movies__button_hidden" : ""}
                `}
              type="button"
              onClick={addCards}
              disabled={isDisabled()}
            >
              Еще
            </button>
          )}
      </div>
    </>
  );
}

export default MoviesCardList;
