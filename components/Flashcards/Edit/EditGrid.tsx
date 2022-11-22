/* eslint-disable no-param-reassign */
import React, { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { CellValueChangedEvent, ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { v4 } from "uuid";
import Button from "../Button/Button";
import { Wordpair } from "../../../types/flashcards";

interface IEditGridProps {
  data: Wordpair[];
  onSave: (saveData: Wordpair[]) => Record<string, boolean>;
}

const columnTypes: Record<string, ColDef> = {
  wordColumn: {
    flex: 1,
    minWidth: 110,
    editable: true,
    resizable: true,
    sortable: true,
    cellStyle: (params) => {
      const id = `${params.node.data.uuid}-${params.colDef.field}`;
      if (params.data[`err-${id}`]) {
        return { backgroundColor: "#FF0000" };
      }
      if (params.data[`mr-${id}`]) {
        return { backgroundColor: "#e1f9e8" };
      }
      return null;
    },
  },
};

const EditGrid: React.FC<IEditGridProps> = ({ data, onSave }) => {
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

  const triggerSave = () => {
    const saveData: Wordpair[] = [];

    gridRef.current?.api.forEachNode((node) => {
      saveData.push(node.data);
    });

    const err = onSave(saveData);

    gridRef.current?.api.forEachNode((node) => {
      if (err[node.data.uuid]) {
        node.data[`err-${node.data.uuid}-first`] = !node.data.first;
        node.data[`err-${node.data.uuid}-second`] = !node.data.second;
      } else {
        node.data[`err-${node.data.uuid}-first`] = false;
        node.data[`err-${node.data.uuid}-second`] = false;
      }
    });

    gridRef.current?.api.refreshCells({ force: true, suppressFlash: true });
  };
  const onCellValueChanged = (event: CellValueChangedEvent) => {
    if (event.oldValue === event.newValue) return;

    const col = event.colDef.field;
    const id = `${event.node.data.uuid}-${col}`;

    // Edit cell for the first time, store original value
    if (!event.data[`mr-${id}-original`]) {
      event.data[`mr-${id}-original`] = event.oldValue;
    }

    event.data[`mr-${id}`] = !(
      event.newValue === event.data[`mr-${id}-original`]
    );

    triggerSave();
  };

  const onAddRowButtonClick = () => {
    gridRef.current?.api.applyTransaction({ add: [{ uuid: v4() }] });
    triggerSave();
  };

  const onDeleteRowsButtonClick = () => {
    const selected = gridRef.current?.api.getSelectedRows();
    gridRef.current?.api.applyTransaction({ remove: selected });
    triggerSave();
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
          rowData={data}
          columnDefs={columnDefs}
          columnTypes={columnTypes}
          pagination
          paginationPageSize={20}
          undoRedoCellEditing
          undoRedoCellEditingLimit={100}
          ref={gridRef}
          onCellValueChanged={onCellValueChanged}
          rowSelection="multiple"
          stopEditingWhenCellsLoseFocus
        />
      </div>
    </div>
  );
};

export default EditGrid;
