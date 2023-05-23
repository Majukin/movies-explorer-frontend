import "./Promo.css";

function Promo() {
  return (
    <section className="promo color_background">
      <h1 className="promo__title text_title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <ul className='promo__list'>
        <li className='promo__list-item color_secondary'>
          <a href='#aboutProject' className='promo__list-item'>О проекте</a>
        </li>
        <li className='promo__list-item color_secondary'>
          <a href='#techs' className='promo__list-item'>Технологии</a>
        </li>
        <li className='promo__list-item color_secondary'>
          <a href='#student' className='promo__list-item'>Студент</a>
        </li>
      </ul>
    </section>
  );
}

export default Promo;
