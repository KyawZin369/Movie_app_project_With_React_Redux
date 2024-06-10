import { searchMovie } from "../../Action/Movies"
import { Movie_Action } from "../../Action/action_Type"

const initialState = {
    movies : [],
    movie : {},
    searchmovies : []
}

export const movieReducer = ( state = initialState , {type , payload} ) => {
    switch(type){
        case Movie_Action.FETCH_MOVIE : 
        return { ...initialState , movies : payload }

        case Movie_Action.SELECT_MOVIE : 
        return { ...initialState , movie : payload }

        case Movie_Action.SEARCH_MOVIE : 
        return { ...initialState , searchmovies : payload }

        default : return state
    }
}