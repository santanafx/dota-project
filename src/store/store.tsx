import { configureStore } from "@reduxjs/toolkit";
import heroesTableReducer from "../components/HeroesTable/heroesTableSlice";

const store = configureStore({
    reducer: {
        heroesTable: heroesTableReducer,
    },
});

export default store;
