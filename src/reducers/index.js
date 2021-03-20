import issueReducer from "./IssueReducer";
import searchRepoReducer from "./searchRepoReducer";

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    searchRes: searchRepoReducer,
    issuesRes: issueReducer
})

export default rootReducer