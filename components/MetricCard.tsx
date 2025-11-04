
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700 col-span-1 md:col-span-1 lg:col-span-2">
      <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
    </div>
  );
};
