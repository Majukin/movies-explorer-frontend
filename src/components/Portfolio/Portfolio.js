import { portfolioList } from "../../utils/consts";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>

      <ul className="portfolio__links">
        <li>
          {portfolioList.map((item, index) => (
            <a
              className={
                index === portfolioList.length - 1
                  ? "portfolio__link portfolio__link_not-line"
                  : "portfolio__link"
              }
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.value}
              <span className="portfolio__link-arrow">&#8599;</span>
            </a>
          ))}
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
