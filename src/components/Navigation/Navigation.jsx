import React from 'react'
import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom'


export default function Navigation() {
    const location = useLocation();

    return window.innerWidth > 768 ?
        <>
            {location.pathname === "/movies" ? (
                <div className='navigation__btn-container navigation__btn-container_films'>
                    <Link to="/movies" className='navigation__btn navigation__btn_bold '
                    >
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" className='navigation__btn'
                    >
                        Сохраненные фильмы
                    </Link>
                </div>
            ) : location.pathname === "/saved-movies" ? (
                <div className='navigation__btn-container navigation__btn-container_films'>
                    <Link to="/movies" className='navigation__btn'
                    >
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" className='navigation__btn navigation__btn_bold'
                    >
                        Сохраненные фильмы
                    </Link>
                </div>
            ) : (
                <div className='navigation__btn-container navigation__btn-container_films'>
                    <Link to="/movies" className='navigation__btn'
                    >
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" className='navigation__btn'
                    >
                        Сохраненные фильмы
                    </Link>
                </div>
            )
            }
            <div className='navigation__btn-container'>
                <Link
                    to="/profile"
                    className='navigation__btn navigation__btn_account'>
                    Аккаунт
                </Link>
            </div>
        </> :
        <>

            <div className="navigation__overlay">
                <div className="navigation__container-wrapper"></div>
                <div className="navigation__list">
                    <button className="navigation__close-button"></button>
                    <nav className="navigation__link">
                        <NavLink
                            exact
                            to="/"
                            // onClick
                            className="navigation__item"
                            activeClassName="navigation__item_active">
                            Главная
                        </NavLink>
                        <NavLink
                            to="/movies"
                            // onClick
                            className="navigation__item"
                            activeClassName="navigation__item_active">
                            Фильмы
                        </NavLink>
                        <NavLink
                            to="/saved-movies"
                            // onClick
                            className="navigation__item"
                            activeClassName="navigation__item_active">
                            Сохранённые фильмы
                        </NavLink>
                    </nav>
                    <Link
                        to="/profile"
                        // onClick
                        className='navigation__btn navigation__btn_account'>
                        Аккаунт
                    </Link>
                </div>
            </div>
        </>
}
