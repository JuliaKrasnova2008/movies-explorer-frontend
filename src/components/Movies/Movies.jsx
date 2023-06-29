import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { getMovies } from "../../utils/MoviesApi";
import { useWindowWidth } from "@react-hook/window-size";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const search = useSelector((state) => state.search.search);
    const [max, setMax] = useState(4);
    const [countFilms, setCountFilms] = useState(4);
    const [isBlocked, setIsBlocked] = useState(false);
    const width = useWindowWidth();
    const short = useSelector((state) => state.search.short);
    const [err, setErr] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (width > 1280) {
            setMax(4);
            setCountFilms(4);
        } else if (width > 1024) {
            setMax(3);
            setCountFilms(3);
        } else if (width > 768) {
            setMax(2);
            setCountFilms(2);
        } else if (width > 480) {
            setMax(2);
            setCountFilms(2);
        } else if (width >= 320) {
            setMax(5);
            setCountFilms(1);
        } else {
            setMax(5);
            setCountFilms(1);
        }
    }, [width]);

    function loadMore() {
        setCountFilms((prev) => prev + max);
    }

    useEffect(() => {
        if (countFilms >= movies.length) {
            setIsBlocked(true);
        } else {
            setIsBlocked(false);
        }
    }, [countFilms, movies, max]);

    useEffect(() => {
        if (search !== "") {
            setLoading(true)
            getMovies()
                .then((data) => {
                    setErr(false);
                    setMovies(
                        data.filter((elem) => {
                            if (short) {
                                return (
                                    (elem.nameRU.toLowerCase().includes(search.toLowerCase()) &&
                                        elem.duration <= 40) ||
                                    (elem.nameEN.toLowerCase().includes(search.toLowerCase()) &&
                                        elem.duration <= 40)
                                );
                            } else {
                                return (
                                    elem.nameRU.toLowerCase().includes(search.toLowerCase()) ||
                                    elem.nameEN.toLowerCase().includes(search.toLowerCase())
                                );
                            }
                        })
                    );
                    setLoading(false)
                })
                .catch((err) => {
                    setErr(true);
                    setLoading(false)
                });
        }
    }, [search, countFilms, short]);

    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList
                err={err}
                loadMore={loadMore}
                isBlocked={isBlocked}
                movies={movies.slice(0, countFilms)}
                loading={loading}
                isSavedFilms={false}
            />
            <Footer />
        </>
    );
}
