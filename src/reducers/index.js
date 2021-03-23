import issueReducer from "./IssueReducer";
import searchRepoReducer from "./searchRepoReducer";

const { combineReducers } = require("redux");

//combine all the reducers together
const rootReducer = combineReducers({
    searchRes: searchRepoReducer,
    issuesRes: issueReducer
})

export default rootReducer