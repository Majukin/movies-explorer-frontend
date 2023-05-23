import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleErrorkBack() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__button link" onClick={handleErrorkBack}>
        Назад
      </button>
    </section>
  );
};

export default NotFoundPage;
