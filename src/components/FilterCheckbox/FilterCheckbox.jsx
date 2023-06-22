import React from "react";
import "./FilterCheckbox.css";
import { useDispatch, useSelector } from "react-redux";
import { setShort } from "../../redux/slices/searchReducer";

export default function FilterCheckbox() {
    const short = useSelector((state) => state.search.short);
    const dispatch = useDispatch();
    return (
        <form className="filter-checkbox">
            <input
                className="filter-checkbox__input"
                type="checkbox"
                required
                onClick={() => dispatch(setShort(short ? false : true))}
                checked={short}
            ></input>
            <span className="filter-checkbox__subtitle">Короткометражки</span>
        </form>
    );
}
