import React from 'react';
import './Portfolio.css';


function Portfolio() {
  return (
    <section className='portfolio'>
      <h6 className='portfolio__title'>
        Портфолио
      </h6>
      <ul className='list-site'>
        <li  className='list-site__title'>
          Статичный сайт
          <a className='list-site__link' href='https://github.com/Majukin/how-to-learn'>&#8599;</a>
        </li>

        <li  className='list-site__title'>
          Адаптивный сайт
          <a className='list-site__link' href='https://github.com/Majukin/russian-travel'>&#8599;</a>
        </li>
        <li  className='list-site__title list-site__title_not-line'>
          Одностраничное приложение
          <a className='list-site__link' href='https://github.com/Majukin/react-mesto-api-full-gha'>&#8599;</a>
        </li>
      </ul>
    </section>

  )
}

export default Portfolio;