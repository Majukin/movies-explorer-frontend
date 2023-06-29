import { useEffect, useContext } from "react";

import CurrentUserContext from "../../context/CurrentUserContext";
import FormValidation from "../../utils/FormValidation";

import "./Profile.css";

function Profile({ onSignOut, updateProfile }) {
  const currentUser = useContext(CurrentUserContext);

  const currentUserName = currentUser.name;

  const { values, setValues, handleChange, errors, isValid } = FormValidation();

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [setValues, currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    updateProfile(values);
  }
  
  function checkAccountEdit() {
    return (
      !isValid ||
      (values.name === currentUser.name && values.email === currentUser.email)
    );
  }

  return (
    <section className="profile">
      <h1 className="profile__greetings">Привет, {currentUserName}!</h1>

      <form className="profile__form" type="submit" onSubmit={handleSubmit}>
        <label className="profile__label" htmlFor="name">
          Имя
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Имя"
            className="profile__input"
            pattern={"^[A-Za-zА-Яа-яЁё /s -]+$"}
            required
            value={values.name || ""}
            onChange={handleChange}
          />
        </label>

        <span className="error">{errors.name || ""}</span>

        <label
          htmlFor="email"
          className="profile__label profile__label_not-line"
        >
          E-mail
          <input
            className="profile__input"
            name="email"
            type="email"
            id="email"
            placeholder="email"
            pattern={"^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$"}
            required
            value={values.email || ""}
            onChange={handleChange}
          />
        </label>

        <span className="error">{errors.email || ""}</span>

        <button className={checkAccountEdit() ? "profile__submit disabled" : "profile__submit"} disabled={checkAccountEdit()}>
          Редактировать
        </button>
      </form>
 
      <button className="profile__exit" onClick={onSignOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
