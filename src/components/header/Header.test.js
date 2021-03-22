import {cleanup, render } from '@testing-library/react'

import Header from './Header'

describe('Header', ()=>{
    afterEach(cleanup)

    it('should check header renders correctly', ()=>{
        const {getByText} = render(
            <Header />
        )
        expect(getByText('Github issue tracker')).toBeInTheDocument
    })
})