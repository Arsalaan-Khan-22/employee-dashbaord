import { useEffect, useRef, useState } from "react";
import AgGrid from "./components/AgGrid";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ToolbarSection from "./components/ToolbarSection";
import { employees } from "./data/employees";
import { FaRupeeSign, FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function App() {
  const [rowData, setRowData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  const gridRef = useRef();
  const [search, setSearch] = useState("");

  // Simulating Api Call
  useEffect(() => {
    setTimeout(() => {
      setRowData(employees);
      setAllData(employees);
      setLoading(false);
    }, 1000);
  }, []);

  const totalEmployees = rowData.length;

  const activeEmployees = rowData.filter((e) => e.isActive).length;

  const avgSalary =
    rowData.reduce((sum, emp) => sum + emp.salary, 0) / rowData.length || 0;

  const avgRating =
    rowData.reduce((sum, emp) => sum + emp.performanceRating, 0) /
      rowData.length || 0;

  const handleFilter = (value) => {
    if (value === "active") {
      setRowData(allData.filter((e) => e.isActive));
    } else if (value === "inactive") {
      setRowData(allData.filter((e) => !e.isActive));
    } else if (value === "all") {
      setRowData(allData);
    }
  };

  const handleToggleStatus = (id) => {
    const updatedData = allData.map((emp) =>
      emp.id === id ? { ...emp, isActive: !emp.isActive } : emp,
    );

    setRowData(updatedData);
    setAllData(updatedData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <StatsCard
              title="Total Employees"
              value={totalEmployees}
              icon={<FaUsers />}
            />
            <StatsCard
              title="Active Employees"
              value={activeEmployees}
              icon={<FaUserCheck />}
            />
            <StatsCard
              title="Avg Salary"
              value={avgSalary.toLocaleString()}
              icon={<FaRupeeSign />}
            />
            <StatsCard
              title="Avg Rating"
              value={avgRating.toFixed(1)}
              icon={<FaStar />}
            />
          </div>
          <ToolbarSection
            gridRef={gridRef}
            setSearch={setSearch}
            onFilter={handleFilter}
          />
          <AgGrid
            rowData={rowData}
            gridRef={gridRef}
            search={search}
            onToggleStatus={handleToggleStatus}
          />
        </>
      )}
    </div>
  );
}

export default App;
