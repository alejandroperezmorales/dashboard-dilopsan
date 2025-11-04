
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SalesLineChartProps {
  data: { name: string; revenue: number }[];
}

export const SalesLineChart: React.FC<SalesLineChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis dataKey="name" stroke="#A0AEC0" />
          <YAxis stroke="#A0AEC0" tickFormatter={(value) => `$${Number(value).toLocaleString()}`} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}
            labelStyle={{ color: '#E2E8F0' }}
            itemStyle={{ color: '#63B3ED' }}
            formatter={(value) => [`$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'Revenue']}
          />
          <Legend wrapperStyle={{ color: '#A0AEC0' }} />
          <Line type="monotone" dataKey="revenue" stroke="#38B2AC" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
