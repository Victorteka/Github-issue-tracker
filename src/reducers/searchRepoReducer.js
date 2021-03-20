import * as actionTypes from '../actions/actionsType'

const initialState = {
    loading: true,
    error: null,
    repos: []
}

const searchRepoReducer = (state = initialState, action) =>{
    switch(action.type){

        case actionTypes.START_SEARCH_REPOS:
            return {...state}

        case actionTypes.SEARCH_REPOS_SUCCESS:
            return {...state, loading:false, repos: action.payload}

        case actionTypes.SEARCH_REPOS_FAIL:
            return {...state,loading:false, error: action.payload}

        default:
            return state
    }
}

export default searchRepoReducer