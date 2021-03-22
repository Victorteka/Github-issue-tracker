import { cleanup, render } from "@testing-library/react"

import Footer from './Footer'


describe('Footer', ()=>{
    afterEach(cleanup)

    it('should check footer correctly renders', ()=>{
        const {getByText} = render(
            <Footer />
        )
        expect(getByText(/2021/)).toBeInTheDocument
    })
})