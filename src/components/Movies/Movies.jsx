import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesCard from '../MoviesCard/MoviesCard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}
