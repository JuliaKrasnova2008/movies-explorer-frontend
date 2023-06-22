import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ loadMore, movies, isBlocked, err }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const preloader = [...new Array(4)].map(() => <Preloader />); //так можно создать пустой массив из 8 элементов

    if (movies.length === 0) {
        return <div>Ничего не найдено</div>;
    }
    if (err) {
        return (
            <div>
                Во время запроса произошла ошибка. Возможно, проблема с соединением или
                сервер недоступен. Подождите немного и попробуйте ещё раз
            </div>
        );
    }
    return (
        <div className="movies-card-list">
            <ul className="movies-card-list__container">
                {loading
                    ? preloader
                    : movies.map((elem) => {
                        return <MoviesCard movie={elem} />;
                    })}
            </ul>
            {!isBlocked && (
                <button
                    onClick={loadMore}
                    className="movies-card-list__btn"
                // onClick
                >
                    Ещё
                </button>
            )}
        </div>
    );
}
