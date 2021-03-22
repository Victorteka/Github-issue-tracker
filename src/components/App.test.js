import {cleanup, render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import App from './App'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'


describe('App', ()=>{
    afterEach(cleanup)

    it('should text all components are rendered correctly', ()=>{
        const {getAllByText} = render(
            <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
                <App/>
            </Provider>
        )
        expect(getAllByText(/Github/)).toBeInTheDocument
    })
})