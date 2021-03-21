import React from 'react'
import { Search } from 'semantic-ui-react'

import './Search.css'

function SearchBar({value, onChange}) {
    return (
        <div className='search__container'>
            <Search placeholder={"Search repo ..."}
                className='search'
                showNoResults={false}
                value={value}
                onSearchChange={e =>onChange(e.target.value)} />
        </div>
    )
}

export default SearchBar
