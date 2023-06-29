import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import CurrentUserContext from "../../context/CurrentUserContext";

import MainApi from "../../api/MainApi";
import * as MovieApi from "../../api/MovieApi";
import useBrowserWidth from "../../hooks/useBrowserWidth";

const moviesTransform = (movies) => {
  movies.forEach((movie) => {
    if (!movie.image) {
      movie.image = `https://api.nomoreparties.co/${movie.image.url}`;
      movie.thumbnail = `https://api.nomoreparties.co/${movie.image.url}`;
    } else if (!movie.country) {
      movie.country = "Russia";
    } else if (!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      movie.image = `https://api.nomoreparties.co${movie.image.url}`;
    }
  });
  return movies;
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useBrowserWidth();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    isSucess: true,
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const [filter, setFilter] = useState();
  const [profileIsBeingEdited, setProfileIsBeingEdited] = useState(false);
  const [searchSaveResult, setSearchSaveResult] = useState([]);
  const [onSearch, setOnSearch] = useState();

  // eslint-disable-next-line no-unused-vars
  const [formMessageError, setFormMessageError] = useState("");

  useEffect(() => {
    tokenCheck();
    setIsAppReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) localStorage.setItem("jwt", token);
    setIsAppReady(true);
  }, [token]);

  useEffect(() => {
    if (isAppReady) {
      searchTag && localStorage.setItem("searchTag", searchTag);
      searchResult &&
        localStorage.setItem("searchResult", JSON.stringify(searchResult));
      savedMovies &&
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      allMovies && localStorage.setItem("allMovies", JSON.stringify(allMovies));
    }
  }, [savedMovies, searchTag, searchResult, allMovies, isAppReady]);

  useEffect(() => {
    if (isAppReady && token && allMovies.length > 0) {
      const allMoviesFiltered = allMovies.filter((data) => {
        return data.nameRU.toLowerCase().includes(searchTag.toLowerCase());
      });
      setSearchResult(allMoviesFiltered);
      if (allMoviesFiltered.length < 1) {
        setIsInfoTooltip({
          isOpen: true,
          isSucess: false,
          text: "Фильмы не найдены",
        });
      }
      setIsLoading(false);
    }
  }, [allMovies, isAppReady, searchTag, token]);

  useEffect(() => {
    if (Object.keys(currentUser).length) {
      async function fetchMyAPI() {
        let getSavedMovies = await MainApi.getSavedMovies();
        if (getSavedMovies) {
          setSavedMovies(getSavedMovies);
        }
      }

      fetchMyAPI();
    }
  }, [currentUser]);

  async function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    const searchResultLS = localStorage.getItem("searchResult");
    const savedMoviesLS = localStorage.getItem("savedMovies");
    const allMoviesLS = localStorage.getItem("searchMovies");
    const searchTagSL = localStorage.getItem("searchTag");
    if (jwt) {
      setToken(jwt);

      if (searchResultLS) {
        setSearchResult(JSON.parse(searchResultLS));
      }
      if (savedMoviesLS) {
        setSavedMovies(JSON.parse(savedMoviesLS));
      }
      if (allMoviesLS) {
        setAllMovies(JSON.parse(allMoviesLS));
      }
      if (searchTagSL) {
        setSearchTag(searchTagSL);
      }
      MainApi.checkToken(jwt)
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          setIsInfoTooltip({
            isOpen: true,
            isSucess: false,
            text: err,
          });
        });
    } else {
      localStorage.removeItem("savedMovies");
      localStorage.removeItem("searchTag");
      localStorage.removeItem("searchResult");
      localStorage.removeItem("allMovies");
    }
  }

  async function handleRegister(data) {
    try {
      let tryRegister = await MainApi.register(data);
      if (tryRegister) {
        setIsInfoTooltip({
          isOpen: true,
          isSucess: true,
          text: "Регистрация выполнена",
        });
        handleLogin(data);
      }
    } catch (error) {
      setIsInfoTooltip({
        isOpen: true,
        isSucess: false,
        text: "Ошибка регистрации",
      });
    }
  }

  async function handleLogin(data) {
    try {
      let auth = await MainApi.authorize(data);
      if (auth) {
        setToken(auth.token);
        setLoggedIn(true);
        navigate("/movies");
        let checkToken = await MainApi.checkToken(auth.token);
        if (checkToken) {
          setCurrentUser(checkToken);
        } else {
          setIsInfoTooltip({
            isOpen: true,
            isSucess: false,
            text: "Токен не найден",
          });
        }
      } else {
        setIsInfoTooltip({
          isOpen: true,
          isSucess: false,
          text: "Не удалось войти в аккаунт",
        });
      }
      if (loggedIn) {
        let checkToken = await MainApi.checkToken(loggedIn);
        if (checkToken) {
          setCurrentUser(checkToken);
        } else {
          setIsInfoTooltip({
            isOpen: true,
            isSucess: false,
            text: "Данные не загрузились",
          });
        }
      }
    } catch (error) {
      setToken(null);
      setIsInfoTooltip({
        isOpen: true,
        isSucess: false,
        text: "Не удалось войти в аккаунт",
      });
    }
  }

  async function handleUpdateDataUser({ name, email }) {
    try {
      let updateDataUser = await MainApi.saveUserInfo({ name, email });
      if (updateDataUser) {
        setCurrentUser({
          name,
          email,
        });
        setIsInfoTooltip({
          isOpen: true,
          isSucess: true,
          text: "Данные изменены",
        });
      }
    } catch (error) {
      setIsInfoTooltip({
        isOpen: true,
        isSucess: false,
        text: error,
      });
    }
  }

  async function handleSearchSubmit(searchTagValue) {
    try {
      setSearchTag(searchTagValue);
      if (allMovies.length === 0) {
        setIsLoading(true);
        let getMovies = await MovieApi.getMoviesApi();
        if (getMovies) {
          let transformGetMovies = moviesTransform(getMovies);
          setAllMovies(transformGetMovies);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsInfoTooltip({
            isOpen: true,
            isSucess: false,
            text: "Ошибка сервера",
          });
        }
      }
    } catch (error) {
      setIsLoading(false);
      setIsInfoTooltip({
        isOpen: true,
        isSucess: false,
        text: "Ошибка сервера",
      });
    }
  }

  async function handleSaveMovie(movie) {
    try {
      let movieSaved = await MainApi.addSavedMovies(movie);
      if (movieSaved) {
        setSavedMovies([movieSaved, ...savedMovies]);
      }
    } catch (error) {
      setIsInfoTooltip({
        isOpen: true,
        isSucess: false,
        text: error,
      });
    }
  }

  async function handleDeleteMovie(movie) {
    try {
      const savedMovie = savedMovies.find(
        (item) => item.movieId === movie.id || item.movieId === movie.movieId
      );
      let deletedMovie = await MainApi.deleteSavedMovies(savedMovie._id);
      if (deletedMovie) {
        const newSavedMoviesList = savedMovies.filter((updateMovie) => {
          if (
            movie.id === updateMovie.movieId ||
            movie.movieId === updateMovie.movieId
          ) {
            return false;
          } else {
            return true;
          }
        });
        const newSavedSearchMovieList = searchSaveResult.filter(
          (updateMovie) =>
            !(
              movie.id === updateMovie.movieId ||
              movie.movieId === updateMovie.movieId
            )
        );
        setSavedMovies(newSavedMoviesList);
        setSearchSaveResult(newSavedSearchMovieList);
      } else {
        return false;
      }
    } catch (error) {
      setIsInfoTooltip({
        isOpen: true,
        isSucess: false,
        text: error,
      });
    }
  }

  function savedMoviesSearch(inpulValue) {
    setOnSearch(!onSearch);
    setIsLoading(true);
    setTimeout(() => {
      const filterSavedMovies = savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(inpulValue.toLowerCase())
      );
      if (filterSavedMovies.length < 1) {
        setIsLoading(false);
        setIsInfoTooltip({
          isOpen: true,
          isSucess: false,
          text: "Фильмы не найдены",
        });
        setSearchSaveResult(savedMovies);
      } else {
        setIsLoading(false);
        return setSearchSaveResult(filterSavedMovies);
      }
    }, 2000);
  }

  function closeInfoTooltip() {
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
  }

  function resetAllFormMessage() {
    setFormMessageError("");
  }

  function handleEditProfile() {
    setProfileIsBeingEdited(true);
  }

  function onSignOut() {
    setLoggedIn(false);
    setCurrentUser({});
    setToken(null);
    setSearchTag("");
    setAllMovies([]);
    setSearchResult([]);
    setSavedMovies([]);
    setIsInfoTooltip({
      isOpen: false,
      isSucess: true,
      text: "",
    });
    setIsAppReady(false);
    setFilter();
    setProfileIsBeingEdited(false);
    setSearchSaveResult([]);
    // setOnSearch();
    localStorage.clear();
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header loggedIn={loggedIn} />

                <Main />

                <Footer />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header type="loggedIn" loggedIn={loggedIn} />

                  <Movies
                    cards={searchResult}
                    savedCards={savedMovies}
                    filter={filter}
                    setFilter={setFilter}
                    bookmarkClick={handleSaveMovie}
                    deleteClick={handleDeleteMovie}
                    handleSearchSubmit={handleSearchSubmit}
                    width={width}
                    isLoading={isLoading}
                    searchTag={searchTag}
                  />

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header type="loggedIn" loggedIn={loggedIn} />

                  <SavedMovies
                    filter={filter}
                    savedMovies={savedMovies}
                    setFilter={setFilter}
                    deleteClick={handleDeleteMovie}
                    width={width}
                    isLoading={isLoading}
                    savedMoviesSearch={savedMoviesSearch}
                    searchSaveResult={searchSaveResult}
                    onSearch={onSearch}
                  />

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header loggedIn={loggedIn} />

                  <Profile
                    onSignOut={onSignOut}
                    updateProfile={handleUpdateDataUser}
                    onEditProfile={handleEditProfile}
                    onBeingEdited={profileIsBeingEdited}
                  />
                </>
              </ProtectedRoute>
            }
          />

          {loggedIn ? (
            <Route path="*" element={<NotFound />} />
          ) : (
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleRegister}
                  resetMessageError={resetAllFormMessage}
                />
              }
            />
          )}

          {loggedIn ? (
            <Route path="*" element={<NotFound />} />
          ) : (
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={handleLogin}
                  resetMessageError={resetAllFormMessage}
                />
              }
            />
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>

        <InfoTooltip status={isInfoTooltip} onClose={closeInfoTooltip} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
