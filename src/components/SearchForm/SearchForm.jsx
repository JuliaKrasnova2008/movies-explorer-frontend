import React, { useState } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/slices/searchReducer'

export default function SearchForm() {
    const search = useSelector((state) => state.search.search)
    const [value, setValue] = useState(search)

    const dispatch = useDispatch()

    function handleClick(event) {
        event.preventDefault()
        if (value !== '') {
            dispatch(setSearch(value))
        } else {
            alert("Нужно ввести ключевое слово")
        }
    }

    return (
        <>
            <section className="search">
                <form
                    className="search__form"
                    id="search-form"
                    onSubmit={handleClick}
                >
                    <input
                        // name
                        className="search__input"
                        id="search-input"
                        type="text"
                        placeholder="Фильм"
                        onChange={(event) => setValue(event.target.value)}
                        value={value}
                    ></input>
                    <button
                        className="search__btn"
                        type="submit"
                    >Найти</button>
                </form>
                <FilterCheckbox />
            </section>

        </>
    )
}
