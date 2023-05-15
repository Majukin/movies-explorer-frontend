import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import MoviesCard from '../MoviesCard/MoviesCard';

import card1 from '../../images/pic__COLOR_pic.png';

function Movies() {
  const [loading, setLoading] = React.useState(false)

  const handleLoadClick = () => setLoading(!loading);
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList>
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
        <MoviesCard title='33 слова о дизайне' durationFilm='1ч 42м' classIcon='card__like-active' img={card1} />
      </MoviesCardList>
      <div className='movies__container'>
        <button className='movies__button' type='button' onClick={handleLoadClick}>Еще</button>
      </div>
      {loading && <Preloader />}

    </section>
  )
}

export default Movies;