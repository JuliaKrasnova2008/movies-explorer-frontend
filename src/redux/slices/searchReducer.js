import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    short: false,
};
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        clearSearch: (state, action) => {
            state.search = "";
        },
        setShort: (state, action) => {
            state.short = action.payload;
        },
    },
});
export default searchSlice.reducer; //экспортируем хранилище
export const { setSearch, clearSearch, setShort } = searchSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
