import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) = {}
})

const FavoritesContextProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMealId] =  useState([])
    const addFavorite = id => {
        setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
    }

    const removeFavorite = id => {
        setFavoriteMealId((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider