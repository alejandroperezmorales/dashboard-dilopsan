
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RegionBarChartProps {
  data: { name: string; revenue: number }[];
}

export const RegionBarChart: React.FC<RegionBarChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis type="number" stroke="#A0AEC0" tickFormatter={(value) => `$${Number(value / 1000).toLocaleString()}k`} />
          <YAxis type="category" dataKey="name" stroke="#A0AEC0" width={100} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}
            labelStyle={{ color: '#E2E8F0' }}
            formatter={(value) => [`$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'Revenue']}
          />
          <Legend wrapperStyle={{ color: '#A0AEC0' }} />
          <Bar dataKey="revenue" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
