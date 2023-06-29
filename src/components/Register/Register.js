import { useEffect, useState } from "react";

import Auth from "../Auth/Auth";
import Input from "../Input/Input";

import FormValidation from "../../utils/FormValidation";

function Register({ resetMessageError, onRegister }) {
  const [buttonRegister, setButtonRegister] = useState("");

  const { values, handleChange, errors, isValid } = FormValidation();

  useEffect(() => {
    resetMessageError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (
      values.email === "" ||
      values.password === "" ||
      !isValid ||
      values.name === ""
    ) {
      setButtonRegister("button-disabled");
    } else {
      setButtonRegister("");
    }
  }, [values, isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    !buttonRegister && onRegister(values);
  }

  return (
    <>
      <Auth
        link="/signin"
        auth="Войти"
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        classNameButton={buttonRegister}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <Input
          labelName="Имя"
          labelFor="name"
          idInput="name"
          inputName="name"
          typeInput="text"
          autoComplete="name"
          pattern={"^[A-Za-zА-Яа-яЁё /s -]+$"}
          minLength={4}
          maxLength={10}
          value={values.name || ""}
          onChange={handleChange}
          spanText={errors.name}
        />

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
          onChange={handleChange}
          spanText={errors.password}
        />
      </Auth>
    </>
  );
}

export default Register;
