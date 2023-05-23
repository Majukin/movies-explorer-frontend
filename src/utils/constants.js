export const moviesApiAddress  = "https://api.nomoreparties.co";
export const backendApiAddress = "https://api.movies.practicum.nomoredomains.monster";

export const validationMessages = {
  name: "Неверный формат имени",
  email: "Неверный формат почты",
  password: "Неверный формат пароля",
};

export const resMessages = {
  409: "Пользователь с такой почтой уже зарегистрирован",
  401: "Пользователь не авторизован",
  500: "Ошибка на сервере",
  400: "Введенные данные невалидны",
};

export const infoMessages = {
  notFound : "Фильмы не найдены",
  requestMoviesFaild: "Во время запроса произошла ошибка",
};

export const regForSymbols = /[_~!@#$%^&*()\[\]+`'";:<>\/\\|=]/g;
export const regForName = /[a-z-. а-яё]+/g;
export const regForPassword = /[0-9a-z-а-яё]+/g;
