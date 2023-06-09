import React from 'react'
import './AboutMe.css'
import Portfolio from '../Portfolio/Portfolio'
import photo from '../../images/pic.jpeg'

export default function AboutMe() {
    return (
        <>
            <section className='about-me'>
                <h2 className='about-me__main-title'>Студент</h2>
                <div className='about-me__info'>
                    <div className='about-me__description'>
                        <div className='about-me__personal-info'>
                            <h3 className='about-me__title'>Юлия</h3>
                            <p className='about-me__details'>Фронтенд-разработчик, 29 лет</p>
                            <p className='about-me__responsibilities'>
                                Большую часть своего времени я проработала в экономичесткой сфере. Но к концу 2021 года достаточно серьезно меня
                                начала посещать мысль о сфере рода деятельности. К тому моменту,внутренне, я погружалась в нездоровую рутину, зону комфорта
                                и отрицания дальнейшего развития в привычной мне области.
                                {"\n"}
                                {"\n"}
                                В голове вопрос: "Чем ты хочешь заниматься?".
                                {"\n"}И, как мне кажется, первыми сильнымы толчками при смене рода деятельности стали два фактора:
                                {"\n"}1 - большое количество друзей/знакомых,работающих в IT-сфере
                                {"\n"}2 - резкий скачок популярности IT-профессий. Не исключено, что на тот момент я стала одной из "жертв маркетинга" ха-ха

                                {"\n"}
                                {"\n"}
                                Но, что я знаю о программировании?
                                Я дала себе пару месяцев на самостоятельное изучение и каждый день узнавала что-то новое.
                                В скором времени я смогла определить, что конкретно мне нравится и почему. К тому же, оглядываясь назад, я поняла, что,
                                начиная с 10-го класса моя жизнь, так или иначе, пересекается с IT. Курсы по программированию, факультет педагогики по специальности
                                "Учитель нач.классов и информатики", работа с углубленным изучением программы 1С.

                                {"\n"}
                                {"\n"}
                                февраль 2022 года - начала изучение основ фронтенд-разработки на бесплатных онлайн-тренажерах, видео на youtube
                                {"\n"}апрель 2022 года - первые коммерческие курсы на базе онлайн школы HTML Academy
                                {"\n"}август 2022 года - старт курса от Яндекс Практикума по веб-разработке
                                {"\n"}декабрь 2022 года - приняла решение уйти с основного места работы и полностью погрузиться в изучение мира фронтенда (ни минуты не сомневаюсь,
                                что это было верное решение. Я ушла вовремя. Думаю, поэтому коллеги запомнили меня, как энтузиаста, готового всегда прийти на помощь и копаться
                                в задачах до последнего)
                                {"\n"}июль 2022 года - сдача дипломного проекта. Впереди несколько месяцев на самостоятельное изучение, подготовку пет-проектов и вперёд, в долгий нелёгкий путь ...
                            </p>
                        </div>
                        <a
                            href="https://github.com/JuliaKrasnova2008"
                            className="about-me__link"
                            target="_blank"
                            rel="noreferrer">
                            Github
                        </a>
                    </div>
                    <img src={photo} alt="Фото" className="about-me__photo" />
                </div>
            </section>
            <Portfolio />
        </>
    )
}
