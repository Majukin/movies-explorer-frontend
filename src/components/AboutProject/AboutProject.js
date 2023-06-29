import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="about-project">

      <div className="project__line">
        <h1 className="project__line__title">О проекте</h1>
        <div className="project__line__line"></div>
      </div>

      <div className="project__description">
        <div className="diplom">
          <h2 className="diplom__title">Дипломный проект включал 5 этапов</h2>

          <p className="diplom__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="diplom indent">
          <h2 className="diplom__title">На выполнение диплома ушло 5 недель</h2>

          <p className="diplom__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="project__duration">
        <div className="project__duration__week project__duration__week_active">
          <div className="project__duration__subtitle project__duration__subtitle_back">
            1 неделя
          </div>

          <div className="project__duration__title">Back-end</div>
        </div>

        <div className="project__duration__week">
          <div className="project__duration__subtitle project__duration__subtitle_front">
            4 недели
          </div>

          <div className="project__duration__title project__duration__title_indent">
            Front-end
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
