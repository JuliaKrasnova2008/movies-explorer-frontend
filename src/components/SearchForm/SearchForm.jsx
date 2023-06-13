import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

export default function SearchForm() {
    return (
        <>
            <section className="search">
                <form
                    className="search__form"
                    id="search-form"
                // onSubmit
                >
                    <input
                        // name
                        className="search__input"
                        id="search-input"
                        type="text"
                        placeholder="Фильм"
                    // onChange
                    // value
                    ></input>
                    <button className="search__btn" type="submit">Найти</button>
                </form>
                <FilterCheckbox />
            </section>

        </>
    )
}
