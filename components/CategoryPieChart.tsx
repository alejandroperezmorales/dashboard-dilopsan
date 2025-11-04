
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CategoryPieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ['#38B2AC', '#3182CE', '#805AD5', '#D53F8C'];

export const CategoryPieChart: React.FC<CategoryPieChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}
            labelStyle={{ color: '#E2E8F0' }}
            formatter={(value) => `$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          />
          <Legend wrapperStyle={{ color: '#A0AEC0' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
