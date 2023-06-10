import React from 'react';
import './Portfolio.css';


function Portfolio() {
  return (
    <section className='portfolio'>
      <h6 className='portfolio__title'>
        Портфолио
      </h6>
      <ul className='list-site'>
        <a className='list-site__title' href='https://github.com/Majukin/how-to-learn' target='_blank'>
          Статичный сайт
          <a className='list-site__link' href='https://github.com/Majukin/how-to-learn' target='_blank'>&#8599;</a>
        </a>
        <a className='list-site__title' href='https://github.com/Majukin/russian-travel' target='_blank'>
          Адаптивный сайт
          <a className='list-site__link' href='https://github.com/Majukin/russian-travel' target='_blank'>&#8599;</a>
        </a>
        <a className='list-site__title list-site__title_not-line' href='https://github.com/Majukin/react-mesto-api-full-gha' target='_blank'>
          Одностраничное приложение
          <a className='list-site__link' href='https://github.com/Majukin/react-mesto-api-full-gha' target='_blank'>&#8599;</a>
        </a>
      </ul>
    </section>

  )
}

export default Portfolio;