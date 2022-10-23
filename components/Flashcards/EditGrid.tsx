/* eslint-disable no-param-reassign */
import React, { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { CellValueChangedEvent, ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Button from "./Button/Button";

interface IEditPageProps {
  data: [string, string][];
}

interface Wordpair {
  first: string;
  second: string;
}

const columnTypes: Record<string, ColDef> = {
  wordColumn: {
    flex: 1,
    minWidth: 110,
    editable: true,
    resizable: true,
    sortable: true,
    cellStyle: (params) => {
      if (params.data[`mr-${params.column.getColDef().field}`]) {
        return { backgroundColor: "#e1f9e8" };
      }
      return null;
    },
  },
};

const Edit: React.FC<IEditPageProps> = ({ data }) => {
  const gridRef = useRef<AgGridReact>(null);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      headerName: "",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: "left",
      width: 50,
      field: "checkbox",
    },
    { field: "first", type: "wordColumn" },
    { field: "second", type: "wordColumn" },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {};
  }, []);

  const [words, setWords] = useState<Wordpair[]>([
    ...data.map(([first, second]) => {
      return { first, second };
    }),
  ]);

  const onCellValueChanged = (event: CellValueChangedEvent) => {
    if (event.oldValue === event.newValue) return;

    const col = event.column.getColDef().field!;

    // Edit cell for the first time, store original value
    if (!event.data[`mr-${event.column.getColDef().field}-original`]) {
      event.data[`mr-${event.column.getColDef().field}-original`] =
        event.oldValue;
    }

    event.data[`mr-${event.column.getColDef().field}`] = !(
      event.newValue ===
      event.data[`mr-${event.column.getColDef().field}-original`]
    );

    event.api.refreshCells({
      force: true,
      columns: [col],
      rowNodes: [event.node],
    });
  };

  const onAddRowButtonClick = () => {
    gridRef.current?.api.applyTransaction({ add: [{}] });
  };

  const onDeleteRowsButtonClick = () => {
    const selected = gridRef.current?.api.getSelectedRows();
    gridRef.current?.api.applyTransaction({ remove: selected });
  };

  return (
    <div>
      <div className="pb-2 pl-4">
        <Button label="Add row" onClick={onAddRowButtonClick} />
        <Button
          label="Delete selected rows"
          onClick={onDeleteRowsButtonClick}
        />
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          width: "40vw",
          height: 700,
        }}
      >
        <AgGridReact
          rowData={words}
          columnDefs={columnDefs}
          columnTypes={columnTypes}
          defaultColDef={defaultColDef}
          stopEditingWhenCellsLoseFocus
          pagination
          paginationPageSize={20}
          undoRedoCellEditing
          undoRedoCellEditingLimit={100}
          ref={gridRef}
          onCellValueChanged={onCellValueChanged}
          rowSelection="multiple"
        />
      </div>
    </div>
  );
};

export default Edit;
