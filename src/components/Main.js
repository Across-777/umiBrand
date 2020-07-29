import React from 'react'
import MainLayout from './MainLayout'
import SearchComponent from './SearchComponent'
import TableComponent from './TableComponent'

export default (props) => {
    return (
        <div>
            <SearchComponent />
            <TableComponent />
        </div>

    )
}