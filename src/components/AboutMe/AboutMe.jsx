import React from 'react';
import "./AboutMe.css";
import foto from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about" id="student">
      <h2 className="about__header text_subtitle underline-black">Студент</h2>
      <div className="student">
        <div className="student_description">
          <h3 className="student__name text_title">Михаил</h3>
          <p className="student__profession">Фронтенд-разработчик, 29 лет</p>
          <p className="student_description text">
            Я родился в Таганроге, закончил факультет истории и права РГЭУ "РИНХ". В 2021 году начал увлекаться кодингом, после чего решил пройти курс по веб-разработке.
          </p>
          <a href="https://github.com/Majukin" className="student__link link" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <img className="student_photo"  alt="Фото студента" src={foto}/>
      </div>
    </section>
  );
};

export default AboutMe;
