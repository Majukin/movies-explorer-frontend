import { useEffect, useState } from "react";

import Auth from "../Auth/Auth";
import Input from "../Input/Input";

import FormValidation from "../../utils/FormValidation";

function Login({ resetMessageError, onLogin }) {
  const [buttonLogin, setButtonLogin] = useState("");
  const { values, handleChange, errors, isValid } = FormValidation();

  useEffect(() => {
    if (
      values.email === "" ||
      values.password === "" ||
      !isValid ||
      values.name === ""
    ) {
      setButtonLogin("button-disabled");
    } else {
      setButtonLogin("");
    }
  }, [values, isValid]);

  useEffect(() => {
    resetMessageError();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();
    !buttonLogin && onLogin(values);
  }

  return (
    <>
      <Auth
        link="/signup"
        auth="Регистрация"
        title="Рады видеть!"
        button="Войти"
        text="Ещё не зарегистрированы?"
        classNameButton={buttonLogin}
        onSubmit={handleSubmit}
        onChange={handleChange}

      >
        <Input
          labelName="Email"
          labelFor="email"
          idInput="email"
          inputName="email"
          typeInput="email"
          autoComplete="email"
          pattern={"^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$"}
          value={values.email || ""}
          onChange={handleChange}
          spanText={errors.email}
        />

        <Input
          labelName="Пароль"
          labelFor="password"
          idInput="password"
          inputName="password"
          typeInput="password"
          autoComplete="current-password"
          minLength={6}
          value={values.password || ""}
          spanText={errors.password}
          onChange={handleChange}
        />
      </Auth>
    </>
  );
}

export default Login;
