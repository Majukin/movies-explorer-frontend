import React from 'react';
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="aboutProject">
      <h2 className="project__title text_subtitle underline-black">О проекте</h2>
      <ul className="diplom">
        <li>
          <h3 className="diplom__title">Дипломный проект включал 5 этапов</h3>
          <p className="diplom__subtitle text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li>
          <h3 className="diplom__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="diplom__subtitle text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__duration">
        <div className="project__duration-area">
          <div className="project__duration-time text color_primary">1 неделя</div>
          <p className="project__duration-name text color_text">Back-end</p>
        </div>
        <div className="project__duration-area">
          <div className="project__duration-time text color_background">4 недели</div>
          <p className="project__duration-name text color_text">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
