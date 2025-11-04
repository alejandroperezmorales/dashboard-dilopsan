
import React from 'react';

interface TopSalesRepListProps {
  data: { name: string; totalSales: number }[];
}

const MEDAL_COLORS = ['text-yellow-400', 'text-gray-400', 'text-yellow-600'];

export const TopSalesRepList: React.FC<TopSalesRepListProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((rep, index) => (
        <div key={rep.name} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center">
            <span className={`w-8 text-center font-bold text-lg ${MEDAL_COLORS[index] || 'text-gray-500'}`}>{index + 1}</span>
            <p className="ml-4 font-medium text-gray-200">{rep.name}</p>
          </div>
          <p className="font-semibold text-cyan-400">
            ${rep.totalSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      ))}
    </div>
  );
};
