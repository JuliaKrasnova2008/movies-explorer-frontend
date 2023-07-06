import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchReducer";
import userReducer from "./slices/userReducer";

//создаю конст persistedState, пытемся получить localStorage сохраненные данные о всем сторе
const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

export const store = configureStore({
    reducer: {
        search: searchReducer,
        user: userReducer,
    },
    preloadedState: persistedState,
});
//подписываю store на то, чтобы при каждом изменении в localStorage сохранялся весь store
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
