import React from 'react';
import './Portfolio.css';
import vector from '../../images/vector.svg'

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__list">
                <a
                    className="portfolio__link"
                    href=" https://juliakrasnova2008.github.io/how-to-learn/"
                    target="_blank"
                    rel="noreferrer">
                    <h4 className="portfolio__caption">Статичный сайт</h4>
                    <img className="portfolio__img" src={vector} alt="Вектор" />
                </a>
                <a
                    className="portfolio__link"
                    href="https://juliakrasnova2008.github.io/russian-travel/"
                    target="_blank"
                    rel="noreferrer">
                    <h4 className="portfolio__caption">Адаптивный сайт</h4>
                    <img className="portfolio__img" src={vector} alt="Вектор" />
                </a>
                <a
                    className="portfolio__link"
                    href="https://online-shop-f9eb7.web.app"
                    target="_blank"
                    rel="noreferrer">
                    <h4 className="portfolio__caption">Одностраничное приложение</h4>
                    <img className="portfolio__img" src={vector} alt="Вектор" />
                </a>
            </nav>
        </section>
    )
}
