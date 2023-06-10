import React from 'react';

import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__text-container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className='promo__links'>
          <li className='table__item'>
            <a href='#about-project' className='promo__link'>О проекте</a>
          </li>
          <li className='table__item'>
            <a href='#techs' className='promo__link'>Технологии</a>
          </li>
          <li className='table__item'>
            <a href='#about-me' className='promo__link'>Студент</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Promo;