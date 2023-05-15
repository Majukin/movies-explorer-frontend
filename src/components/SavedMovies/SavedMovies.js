import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

import card1 from '../../images/pic__COLOR_pic.png';


function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList>
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__delete-saved-film' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__delete-saved-film' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__delete-saved-film' img={card1} />
      </MoviesCardList>
    </section>
  )
}

export default SavedMovies;