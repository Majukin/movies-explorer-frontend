import arrow from "../../images/arrow.svg";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title color_text">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-item underline-grey">
          <a className="portfolio__link link" href="https://github.com/Majukin/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text text_medium">Статичный сайт</p>
            <img className="portfolio__link-img" src={arrow} alt="Стрелка" />
          </a>
        </li>
        <li className="portfolio__list-item underline-grey">
          <a className="portfolio__link link" href="https://github.com/Majukin/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text text_medium">Адаптивный сайт</p>
            <img className="portfolio__link-img" src={arrow} alt="Стрелка" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link link" href="https://github.com/Majukin/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text text_medium">Одностраничное приложение</p>
            <img className="portfolio__link-img" src={arrow} alt="Стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
