import axios from "axios"
import * as actionTypes from './actionsType'

//Create fetch repo action
export const searchRepo = (query) => async dispatch =>{
    try{
        dispatch({type: actionTypes.START_SEARCH_REPOS, payload: {}})
        const response = await axios.post('https://api.github.com/graphql', {
            query: query,
        },{
            headers:{
                Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`
            }
        })
        dispatch({type: actionTypes.SEARCH_REPOS_SUCCESS, payload: response.data.data})
    }catch(err){
        dispatch({type: actionTypes.SEARCH_REPOS_FAIL, payload: err.message})
        console.log(err.message)
    }
}

//Issue action
export const fetchIssue = (query) => async dispatch =>{
    try{
        dispatch({type: actionTypes.FETCH_ISSUE_START, payload: {}})
        const response = await axios.post('https://api.github.com/graphql', {
            query: query,
        },{
            headers:{
                Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`
            }
        })
        dispatch({type: actionTypes.FETCH_ISSUE_SUCCESS,
             payload: response.data.data.repository.issues})
    }catch(err){
        dispatch({type: actionTypes.FETCH_ISSUE_FAIL, payload: err.message})
        console.log(err.message)
    }  
}