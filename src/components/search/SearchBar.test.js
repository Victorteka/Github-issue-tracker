import {cleanup, fireEvent, getByPlaceholderText, getByText, render} from '@testing-library/react'

import SearchBar from './SearchBar'

describe('SearchBar', ()=>{

    afterEach(cleanup)

    it('should check search bar correctly renders', ()=>{
        const {getByPlaceholderText} = render(
            <SearchBar />
        )
        expect(getByPlaceholderText('Search repo ...')).toBeInTheDocument
    })

    // it('should check if text is correctly inputted', ()=>{
    //     fireEvent.change(getByText('Search Repo ...'),{
    //         target: {value: 'Javascript'}
    //     })
    //     expect(getByText('Javascript')).toBeInTheDocument
    // })
})