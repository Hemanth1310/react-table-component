import React from 'react';

export const TableConstants = () => {
    const columns =  [
          {
              Header: "Name",
              accessor: "name",
            //   minWidth: 300,
              headerClass: 'resizable-header',
            },
            {
              Header: "Ticket Ref",
              accessor: "ticketref",
            //   minWidth: 300,
              headerClass: 'resizable-header',
            },
            {
              Header: "Trade Date",
              accessor: "traded_on",
            //   minWidth: 300,
              headerClass: 'resizable-header',
            },
            {
              Header: "QTY",
              accessor: "quantity",
            //   minWidth: 300,
              headerClass: 'resizable-header',
            },
            {
              Header: "CCY",
              accessor: "currency",
            //   minWidth: 300,
              headerClass: 'resizable-header',
            }
       
      ]
    
  
   
  
    return columns;
  }
  
  export default TableConstants;
  