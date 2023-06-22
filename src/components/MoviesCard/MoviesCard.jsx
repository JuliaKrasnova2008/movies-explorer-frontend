import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import film1 from "../../images/pic__COLOR_pic-1.png";
import { Navigate, useLocation } from "react-router-dom";
import { dislikeMovie, getLikeMovies, likeMovie } from "../../utils/MainApi";
import { useSelector } from "react-redux";

export default function MoviesCard({ movie }) {
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const id = useSelector((state) => state.user.token);
    const [isLike, setIsLike] = useState(false);

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + "ч. " + minutes + "м.";
    }
    useEffect(() => {
        getLikeMovies(token).then((data) => {
            setIsLike(data?.find((elem) => elem.movieId === movie.id));
        });
    }, [token]);

    function handleClick(e) {
        if (e.target.classList.contains("movies-card__favorite-btn_active")) {
            dislikeMovie(movie.id, token);
            e.target.classList.remove("movies-card__favorite-btn_active");
        } else {
            likeMovie(
                {
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: `https://api.nomoreparties.co${movie.image.url}`,
                    trailerLink: movie.trailerLink,
                    thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN,
                },
                token
            ).then(() => {
                e.target.classList.add("movies-card__favorite-btn_active");
            });
        }
    }

    return (
        <>
            {location.pathname === "/movies" ? (
                <>
                    <li className="movies-card">
                        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                            <img
                                className="movies-card__cover"
                                src={` https://api.nomoreparties.co${movie.image.url}`}
                                alt="Фото фильма"
                            />
                        </a>
                        <div className="movies-card__cover__container">
                            <div className="movies-card__desc">
                                <h5 className="movies-card__title">{movie.nameRU}</h5>
                                <p className="movies-card__duration">
                                    {getTimeFromMins(movie.duration)}
                                </p>
                            </div>
                            <button
                                type="button"
                                className={`movies-card__favorite-btn ${isLike ? "movies-card__favorite-btn_active" : ""
                                    }`}
                                onClick={(e) => handleClick(e)}
                            ></button>
                        </div>
                    </li>
                </>
            ) : (
                <>
                    <li className="movies-card">
                        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                            <img
                                className="movies-card__cover"
                                src={movie.image}
                                alt="Фото фильма"
                            />
                        </a>

                        <div className="movies-card__cover__container">
                            <div className="movies-card__desc">
                                <h5 className="movies-card__title">{movie.nameRU}</h5>
                                <p className="movies-card__duration">
                                    {" "}
                                    {getTimeFromMins(movie.duration)}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="movies-card__delete-btn"
                                onClick={(e) => dislikeMovie(movie.movieId, token)}
                            ></button>
                        </div>
                    </li>
                </>
            )}
        </>
    );
}
