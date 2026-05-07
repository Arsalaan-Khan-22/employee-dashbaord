import React from 'react'

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm w-full h-40">
      <p className="text-lg text-gray-500">{title}</p>
      <div className="flex items-center gap-2 mt-3">
        <div className="bg-blue-100 p-4 rounded-lg text-blue-600 h-fit text-xl">{icon}</div>
        <h3 className="text-4xl sm:text-5xl font-semibold">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
