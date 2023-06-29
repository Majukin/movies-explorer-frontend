const checkResponse = (res) => res.ok ? res.json() : Promise.reject(res.status);

export const getMoviesApi = () => {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
}
