import {cleanup, fireEvent, getByPlaceholderText, getByTestId, getByText, render, screen} from '@testing-library/react'

import SearchBar from './SearchBar'

describe('SearchBar', ()=>{

    afterEach(cleanup)

    it('should check search bar correctly renders', ()=>{
        const {getByPlaceholderText} = render(
            <SearchBar />
        )
        expect(getByPlaceholderText('Search repo ...')).toBeInTheDocument
    })

    it('should check if text is correctly inputted', ()=>{
        const onChange = jest.fn()
        const {getByPlaceholderText, getByText} = render(
            <SearchBar onChange={onChange} value='' />
        )
        fireEvent.change(getByPlaceholderText('Search repo ...'),{
            target: {value: 'Javascript'}
        })
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})