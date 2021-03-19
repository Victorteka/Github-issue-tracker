import * as actionTypes from '../actions/actionsType'

const initialState = {
    loading: false,
    error: null,
    repos: []
}

const searchRepoReducer = (state = initialState, action) =>{
    switch(action.type){

        case actionTypes.START_SEARCH_REPOS:
            return {...state, loading: true}

        case actionTypes.SEARCH_REPOS_SUCCESS:
            return {...state, loading:false, repos: action.payload}

        case actionTypes.SEARCH_REPOS_FAIL:
            return {...state, error: action.payload}

        default:
            return state
    }
}

export default searchRepoReducer