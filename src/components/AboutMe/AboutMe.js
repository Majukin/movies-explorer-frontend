import Portfolio from "../Portfolio/Portfolio";

import photo from "../../images/photo.jpg";

import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about" id="about-me">

      <div className="student__line">
        <h1 className="student__line__title">Студент</h1>
        <div className="student__line__line"></div>
      </div>

      <div className="about__discription">
        <div className="student">
          <h4 className="student__name">Михаил</h4>

          <p className="student__profession">Фронтенд-разработчик, 29 лет</p>

          <p className="student__descrition">
            Я родился в Таганроге, закончил факультет истории и права РГЭУ
            "РИНХ". В 2021 году начал увлекаться кодингом, после чего решил
            пройти курс по веб-разработке.
          </p>

          <a
            className="student__link"
            href="https://github.com/Majukin"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about__photo" alt="фото студента" src={photo} />
      </div>

      <Portfolio />
    </section>
  );
}

export default AboutMe;
