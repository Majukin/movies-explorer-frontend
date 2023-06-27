import { techsList } from "../../utils/consts";

import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">

      <div className="techs__line">
        <h1 className="techs__line__title">Технологии</h1>
        <div className="techs__line__line"></div>
      </div>

      <div className="decription">
        <h3 className="decription__title">{techsList.length} технологий</h3>

        <p className="decription__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>

      <ul className="techs__list">
        {techsList.map((tech) => (
          <li key={tech} className="techs__list-item">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Techs;
