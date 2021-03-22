import {cleanup, render} from '@testing-library/react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../reducers'
import IssueList from './IssueList'

describe('IssueList', ()=>{
    afterEach(cleanup)
    
    it('should check IssueList renders correctly', ()=>{
        const {getByText} = render(
            <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
                <IssueList />
            </Provider>
        )
        expect(getByText('Issues')).toBeInTheDocument
    })
})