import React, { useEffect, useState } from 'react'
import './MoviesCardList.css'
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);
    const preloader = [...new Array(4)].map(() => <Preloader />); //так можно создать пустой массив из 8 элементов

    return (
        <div className='movies-card-list'>
            <ul className='movies-card-list__container'>
                {loading ?
                    preloader
                    :
                    <MoviesCard />
                }
            </ul>
            <button className="movies-card-list__btn"
            // onClick
            >
                Ещё
            </button>
        </div>
    )
}
