import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

function MoviesCard({ item, bookmarkClick, deleteClick }) {
  const location = useLocation();

  function handleSaveMovie() {
    bookmarkClick(item);
  }
  function handleDeleteSaveMovie() {
    deleteClick(item);
  }
  return (
    <li className="card">
      <div className="card__discription">
        <div className="card__list">
          <h1 className="card__title">{item.nameRU}</h1>

          <p className="card__duration">{`${Math.floor(item.duration / 60)}ч ${item.duration % 60}м`}</p>
        </div>

        {location.pathname === "/movies" && (
          <button
            type="button"
            className={item.saved ? "card__bookmark-active" : "card__bookmark"}
            onClick={item.saved ? handleDeleteSaveMovie : handleSaveMovie} 
          ></button>
        )}

        {location.pathname === "/saved-movies" && (
          <button
            type="button"
            className="card__delete-movie"
            onClick={handleDeleteSaveMovie}
          ></button>
        )}
      </div>

      <a
        target="_blank"
        href={item.trailerLink}
        className="card__link-image"
        rel="noreferrer"
      >
        <img className="card__image" src={item.image} alt={item.nameRU} />
      </a>
    </li>
  );
}

export default MoviesCard;
