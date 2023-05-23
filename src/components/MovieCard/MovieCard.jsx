import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { saveMovie, deleteMovie } from "../../services/actions/savedMovies";
import { useStore } from "../../services/StoreProvider";
import { moviesApiAddress } from "../../utils/constants";

import "./MovieCard.css";

function MovieCard({ movie }) {
  const [state, dispatch] = useStore();
  const [isMovieSaved, setIsMovieSaved] = useState();
  const [savedMovies, setSavedMovies] = useState();
  const location = useLocation();
  const path = location.pathname;
  const onRouteSavedMovies = path === "/saved-movies";

  useEffect(() => {
    setSavedMovies(state.savedMovie.saved);
  }, [state.savedMovie.saved]);

  useEffect(() => {
    if (savedMovies) {
      setIsMovieSaved(
        savedMovies.find((savedMovie) => savedMovie.movieId === (movie.id || movie.movieId))
      );
    }
  }, [movie.id, movie.movieId, savedMovies, state.savedMovie.saved]);

  const buttonClassLike =
    (isMovieSaved && !onRouteSavedMovies && "card__like_active") ||
    (onRouteSavedMovies && "card__like_delete");

  function handleClickLike() {
    if (onRouteSavedMovies || isMovieSaved) {
      deleteMovie(dispatch, isMovieSaved._id);
    } else {
      saveMovie(dispatch, movie);
    }
  }

  const imageUrl = movie.image.formats ? moviesApiAddress + movie.image.url : movie.image;
  const minutes = movie.duration % 60;
  const hours = Math.floor(movie.duration / 60);

  return (
    <article className="card">
      <div className="card__discription">
        <div>
          <h3 className="card__title">{movie.nameRU}</h3>
          <p className="card__duration color_text">{`${
            hours === 0 ? "" : hours + "ч"
          } ${minutes}м`}</p>
        </div>
        <button
          className={`card__like color_background link ${buttonClassLike}`}
          onClick={handleClickLike}
        ></button>
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="card__trailer-link"
      >
        <img className="card__image" src={imageUrl} alt={movie.nameRU} />
      </a>
    </article>
  );
}

export default MovieCard;
