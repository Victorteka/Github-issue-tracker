import React from 'react'
import { Search } from 'semantic-ui-react'

import './Search.css'

function SearchBar() {
    return (
        <div className='search__container'>
            <Search placeholder={"Search repo ..."}
                className='search'
                showNoResults={false} />
        </div>
    )
}

export default SearchBar
