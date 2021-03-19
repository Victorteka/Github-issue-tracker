import searchRepoReducer from "./searchRepoReducer";

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    searchRes: searchRepoReducer
})

export default rootReducer