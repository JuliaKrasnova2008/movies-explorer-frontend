import React, { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { getLikeMovies } from "../../utils/MainApi";

export default function SavedMovies() {
    const token = useSelector((state) => state.user.token);
    const [likedMovies, setLikedMovies] = useState([]);

    useEffect(() => {
        getLikeMovies(token).then((data) => {
            setLikedMovies(data);
        });
    }, [token]);


    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList movies={likedMovies} isBlocked={true} />
            <Footer />
        </>
    );
}
