import { combineReducers } from "redux";
import movies_reducer from "./movies_reducer";
import employees_reducer from "./employees_reducer";

var rootReducer = combineReducers({
    employees: employees_reducer,
    movies: movies_reducer
})

export default rootReducer;

// var store = {
//     employees: [],
//     movies: [],
//     flights: []
// }