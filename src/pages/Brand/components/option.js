import React from 'react'
import SearchComponent from '../components/SearchComponent'
import TableComponent from '../components/TableComponent'
import BreadContent from '@/components/BreadContent';
import { Table } from 'antd';

export default (props) => {
    return (
        <BreadContent>
            <div>
                <SearchComponent />
                <TableComponent />
            </div>
        </BreadContent>


    )
}