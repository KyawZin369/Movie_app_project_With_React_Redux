import { Movie_Action } from "../../Action/action_Type"

const initialState = {
    movies : [
        {
            name : "Code Lab",
            desc : "laksdjflkasjdflkjsadf asdklfjklsadfj asdklfjlksadfj "
        }
    ],
    movie : {}
}

export const movieReducer = ( state = initialState , {type , payload} ) => {
    switch(type){
        case Movie_Action.FETCH_MOVIE : 
        return { ...initialState , movies : payload }

        case Movie_Action.SELECT_MOVIE : 
        return { ...initialState , movie : payload }

        default : return state
    }
}