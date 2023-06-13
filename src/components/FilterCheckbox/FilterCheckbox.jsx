import React from 'react'
import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <form className="filter-checkbox">
            <input
                className="filter-checkbox__input"
                type="checkbox"
            // onChange=
            // checked=
            >
            </input>
            <span className="filter-checkbox__subtitle">Короткометражки</span>
        </form>
    );
}
