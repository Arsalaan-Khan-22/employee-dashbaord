import React from "react";

const Header = () => {
  return (
    <div className="mb-4 px-2 sm:px-0">
      <h1 className="text-2xl font-semibold text-gray-800">
        Employee Management Dashboard
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Overview of employee data, performance and activity
      </p>
    </div>
  );
};

export default Header;