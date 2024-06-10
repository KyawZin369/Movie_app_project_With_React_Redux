import { Movie_Action } from "../action_Type"


export const fetchMovie = (movies) => {
    return {
        type : Movie_Action.FETCH_MOVIE ,
        payload : movies
    }
}

export const selectMovie = (movie) => {
    return {
        type : Movie_Action.SELECT_MOVIE,
        payload : movie
    }
}

export const removeSelectMovie = (movie) => {
    return {
        type : Movie_Action.REMOVE_MOVIE_SELECTED,
        payload : movie
    }
}

export const searchMovie = (searchmovies) => {
    return {
        type : Movie_Action.SEARCH_MOVIE,
        payload : searchmovies
    }
}