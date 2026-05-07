import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGrid = ({rowData, gridRef, search, onToggleStatus}) => {

  const columnDefs = useMemo(() => [
    {
      headerName: "Name",
      valueGetter: (params) =>
        params.data.firstName + " " + params.data.lastName,
    },
    { field: "email" },
    { field: "department" },
    { field: "position" },
    {
      field: "salary",
      valueFormatter: (params) =>
        params.value ? `₹${params.value.toLocaleString()}` : "-",
    },
    { field: "hireDate" },
    { field: "age" },
    { field: "location" },
    { field: "performanceRating" },
    { field: "projectsCompleted" },
    {
  field: "isActive",
  headerName: "Status",
  cellRenderer: (params) => {
    const isActive = params.value;

    return (
      <div className="flex items-center gap-2 mt-2">

        <input
          type="checkbox"
          checked={isActive}
          onChange={() => onToggleStatus(params.data.id)}
          className="cursor-pointer"
        />

        <span
          className={`text-sm font-medium px-2 rounded-xl ${
            isActive ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>

      </div>
    );
  },
},
    { field: "skills", valueFormatter: (params) => params.value.join(", ") },
    { field: "manager", valueFormatter: (params) => params.value || "-" },
  ], [onToggleStatus]);

  const defaultColDef = useMemo(() => ({
    width: 120,
    resizable: true,
    sortable: true,
    filter: true,
  }), []);

  return (
    <div className="overflow-x-auto scrollbar-thin">

    <div className="ag-theme-alpine mt-5 h-100 rounded-lg shadow-sm overflow-hidden">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={search}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={false}
          rowSelection={{mode: "multiRow"}}
        />
    </div>
    </div>
  );
};

export default AgGrid;
