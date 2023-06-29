import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import "./SavedMovies.css";

function SavedMovies({
  filter,
  setFilter,
  savedMovies,
  deleteClick,
  width,
  searchSaveResult,
  onSearch,
  savedMoviesSearch,
  isLoading,
}) {
  return (
    <section className="saved-movies">
      <SearchForm
        filter={filter}
        setFilter={setFilter}
        savedMoviesSearch={savedMoviesSearch}
      />
      
      {isLoading && <Preloader></Preloader>}

      <MoviesCardList
        items={onSearch === undefined ? savedMovies : searchSaveResult}
        savedItems={savedMovies}
        filter={filter}
        deleteClick={deleteClick}
        width={width}
      />
    </section>
  );
}

export default SavedMovies;
