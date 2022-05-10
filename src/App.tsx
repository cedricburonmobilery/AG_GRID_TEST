import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import { data } from './store'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ImgCellRenderer from './imgCellRenderer';
const rowHeight = 100;
const styleGrid={
  height:'800px', width:'100'
}

function App() {
  const [rowData] = useState(data);

  const [columnDefs] = useState([
    { field: "loc" },
    { field:"adress"},
    { field: "prop" },
    { field: "price" },
    { field: "imgs", cellRenderer: ImgCellRenderer,cellClass: "cell-border cell-vertical-align-text-right",autoHeight: true,}
  ]);

  return (
    <div className="App">
      <div className="ag-theme-alpine" style={styleGrid}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowHeight={rowHeight}
          >
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
