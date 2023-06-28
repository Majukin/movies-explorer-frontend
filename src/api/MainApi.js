import { BASE_URL } from "../utils/consts";

class Api {
    constructor({ options, headers }) {
        this.options = options;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }

    checkToken(token) {
        return fetch(`${this.options}/users/me`, {
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${token}`,
            }
        }).then(this._checkResponse)
    }

    authorize({ email, password }) {
        return fetch(`${this.options}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password
            })
        }).then(this._checkResponse)
    };

    register({ name, email, password }) {
        return fetch(`${this.options}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ 
                name, 
                email, 
                password })
        }).then(this._checkResponse)
    };

    addSavedMovies(data) {
        return fetch(`${this.options}/movies/`, {
            method: 'POST',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                thumbnail: data.thumbnail,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                owner: data.user
            })
        }).then(this._checkResponse)
    }

    deleteSavedMovies(movieId) {
        return fetch(`${this.options}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },
        }).then(this._checkResponse)
    }

    saveUserInfo({ name, email }) {
        return fetch(`${this.options}/users/me`, {
            method: 'PATCH',
            headers: {
                ...this._headers,
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                name,
                email
            })
        }).then(this._checkResponse)
    }
}

const mainApi = new Api({
    options: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
}); 

export default mainApi;