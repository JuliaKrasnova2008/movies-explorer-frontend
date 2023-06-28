import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    id: "",
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        },

    },
});
export default userSlice.reducer; //экспортируем хранилище
export const { setToken, setId } = userSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
