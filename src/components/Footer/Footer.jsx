import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title color_text underline-grey">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__row">
        <p className="footer__copyright">&#169; 2023</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a href="https://practicum.yandex.ru" className="link" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com" className="link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
