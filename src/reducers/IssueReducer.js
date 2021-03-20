import * as actionTypes from '../actions/actionsType'

const initialState = {
    loading: true,
    error: null,
    issues: []
}

const issueReducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_ISSUE_START:
            return {...state}
        case actionTypes.FETCH_ISSUE_SUCCESS:
            return {...state, loading: false, issues: action.payload}
        case actionTypes.FETCH_ISSUE_FAIL:
            return {...state, loading: false, error:action.payload}
        default:
            return state
    }
}

export default issueReducer