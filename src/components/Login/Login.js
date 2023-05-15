import React from 'react';

import Auth from '../Auth/Auth';

function Login() {
  return (
    <>
      <Auth
        title='Рады видеть!'
        button='Войти'
        text='Ещё не зарегистрированы?'
        link='/signup'
        auth='Регистрация'
      >
      </Auth>
    </>
  )
}

export default Login;