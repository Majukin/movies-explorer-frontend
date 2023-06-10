import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/photo.jpg';
import TitleLine from '../TitleLine/TitleLine';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <TitleLine
        title='Студент'
      />
      <div className='about-me__discription'>
        <div className='student'>
          <h6 className='student__name'>
            Михаил
          </h6>
          <h6 className='student__profession'>
            Фронтенд-разработчик, 29 лет
          </h6>
          <p className='student__descrition'>
            Я родился в Таганроге, закончил факультет истории и права РГЭУ "РИНХ". В 2021 году начал увлекаться кодингом, после чего решил пройти курс по веб-разработке.
          </p>
          <ul className='link'>
            <li>
              <a className='link__item' href='https://github.com/Majukin' target='_blank'>
                Github
              </a>
            </li>
          </ul>

        </div>
        <img className='about-me__photo' alt='фото студента' src={photo} />
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;
