import NavTab from "../NavTab/NavTab";

import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>

        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
