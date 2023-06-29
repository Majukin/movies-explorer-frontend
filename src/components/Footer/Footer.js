import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>

      <div className="footer__line"></div>

      <div className="footer__list">
        <p className="footer__copyright">&#169; 2023</p>

        <ul className="footer__links">
          <li className="links__item">
            <a
              className="links__text"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="links__item">
            <a
              className="links__text"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
