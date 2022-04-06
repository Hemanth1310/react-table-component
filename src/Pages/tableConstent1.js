import React from 'react';

// This is the table constant/settings which needed to render table elements
export const TableConstants = () => {
    const columns =  [
        {
            Header: "Name of the holding",
            accessor: "name",
            minWidth: 300,
            headerClass: 'resizable-header',
          },
          {
            Header: "Ticker",
            accessor: "ticker",
            minWidth: 300,
            headerClass: 'resizable-header',
          },
          {
            Header: "The asset class it belongs to",
            accessor: "asset_class",
            minWidth: 300,
            headerClass: 'resizable-header',
          },
          {
            Header: "Average price",
            accessor: "avg_price",
            minWidth: 300,
            headerClass: 'resizable-header',
          },
          {
            Header: "Market Price",
            accessor: "market_price",
            minWidth: 300,
            headerClass: 'resizable-header',
          },
          {
            Header: "Latest change percentage",
            accessor: "latest_chg_pct",
            minWidth: 300
          },
          {
            Header: "Market Value in Base CCY",
            accessor: "market_value_ccy",
            minWidth: 300
          }
     
    ]
  return columns;
};

export default TableConstants;