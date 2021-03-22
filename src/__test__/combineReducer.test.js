import { createStore } from 'redux'
import rootReducer from '../reducers'
import issueReducer from '../reducers/IssueReducer'
import searchRepoReducer from '../reducers/searchRepoReducer'

describe('rootReducer', ()=>{

    const store = createStore(rootReducer)

    it('should return default if no action type is recognized', ()=>{
        expect(rootReducer({},{type: null})).toEqual({
            searchRes: {
                loading: true,
                error: null,
                repos: []
            },
            issuesRes: {
                loading: true,
                error: null,
                issues: []
            }
        })
    })

    it('check the initial state of searchRepoReducer matches root reducer',()=>{
        expect(store.getState().searchRes).toEqual(searchRepoReducer(undefined,{type: null}))
    })

    it('check the initial state of issueReducer matches root reducer', ()=>{
        expect(store.getState().issuesRes).toEqual(issueReducer(undefined, {type:null}))
    })
})