import React, { useEffect, useState } from "react";

const ToolbarSection = ({ gridRef, setSearch, onFilter }) => {
  const [inputValue, setInputValue] = useState("");

  const handleExport = (e) => {
    gridRef.current.api.exportDataAsCsv();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(inputValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <h3 className="text-lg font-semibold">Employees List</h3>

        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search employees..."
          className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
        />
      </div>

      <div className="flex gap-4 items-center">
        <select
          onChange={(e) => onFilter(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 cursor-pointer"
        >
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default ToolbarSection;
