
import React from 'react'

// import { useTable, usePagination } from 'react-table'
import { useTable, useSortBy, usePagination ,useResizeColumns} from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnResizer from "react-column-resizer";
import classes from './styles.module.css'

export const Table = ({ columns, data }) =>{

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    resetResizing,
    state: { pageIndex, pageSize },
} = useTable(
    {
        columns,
        data,
        initialState: {  },
        
    },
    useSortBy,
    usePagination,
   
    
)

// Render the UI for your table
return (
    <div className="table-responsive">
      
        <table className="table table-striped table-hover" {...getTableProps()}>
            <thead  className="thead-dark">
            {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                               <>
                              
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} > 
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                   
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' '
                                                : ' '
                                            : ''}
                                            
                                    </span>
                                    
                                </th>
                                <ColumnResizer className={classes.columnResizer} />
                                </>
                            ))}
                            
                        </tr>
                    ))}
                    
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <>
                       
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return(<> <td {...cell.getCellProps()}>{cell.render('Cell')}</td> <td /></>)
                            })}
                        </tr>
                        
                        </>
                        
                    )
                })}
            </tbody>
        </table>
        {/* 
    Pagination can be built however you'd like. 
    This is just a very basic UI implementation:
  */}
      <div className={classes.end}>
        <ul className="pagination">
            <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <a className="page-link">First</a>
            </li>
            <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <a className="page-link">{'<'}</a>
            </li>
            <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                <a className="page-link">{'>'}</a>
            </li>
            <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <a className="page-link">Last</a>
            </li>
            <li>
                <a className="page-link">
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </a>
            </li>
            <li>
                <a className="page-link">
                    <input
                        className="form-control"
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px', height: '20px' }}
                    />
                </a>
            </li>{' '}
            <select
                className="form-control"
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                style={{ width: '120px', height: '38px' }}
            >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </ul>
        </div>
    </div>
)
}

export default Table