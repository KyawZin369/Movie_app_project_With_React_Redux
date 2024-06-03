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