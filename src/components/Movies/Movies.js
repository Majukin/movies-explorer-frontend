import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import "./Movies.css";

function Movies({
  cards,
  savedCards,
  filter,
  setFilter,
  isLoading,
  bookmarkClick,
  deleteClick,
  handleSearchSubmit,
  width,
  searchTag,
}) {
  const [index, setIndex] = useState(12);

  useEffect(() => {
    if (width > 768) {
      setIndex(12);
    }
    if (width <= 768 && width >= 330) {
      setIndex(8);
    }
    if (width < 330) {
      setIndex(5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  function addCards() {
    if (width > 768) {
      setIndex(index + 3);
    }
    if (width <= 768 && width >= 330) {
      setIndex(index + 2);
    }
    if (width < 330) {
      setIndex(index + 1);
    }
  }

  return (
    <section className="movies">
      <SearchForm
        filter={filter}
        setFilter={setFilter}
        handleSearchSubmit={handleSearchSubmit}
        searchTag={searchTag}
      />

      {isLoading && <Preloader />}

      <MoviesCardList
        items={cards}
        savedItems={savedCards}
        filter={filter}
        bookmarkClick={bookmarkClick}
        deleteClick={deleteClick}
        index={index}
        addCards={addCards}
      />
    </section>
  );
}

export default Movies;
