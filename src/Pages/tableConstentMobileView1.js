import React from 'react';

// This is the table constant/settings which needed to render table elements
export const Testing = () => {
    const columns =  [
        {
            Header: "Name of the holding",
            accessor: "name",
            minWidth: 300
          },
          {
            Header: "Ticker",
            accessor: "ticker",
            minWidth: 300
          },
          {
            Header: "The asset class it belongs to",
            accessor: "asset_class",
            minWidth: 300
          },
          
     
    ]
  return columns;
};

export default Testing;