
import React, { useMemo } from 'react';
import { Sale } from '../types';
import { MetricCard } from './MetricCard';
import { SalesLineChart } from './SalesLineChart';
import { CategoryPieChart } from './CategoryPieChart';
import { RegionBarChart } from './RegionBarChart';
import { TopSalesRepList } from './TopSalesRepList';

interface DashboardProps {
  data: Sale[];
}

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {

  const { totalRevenue, totalUnitsSold, salesOverTime, salesByCategory, salesByRegion, topSalesReps } = useMemo(() => {
    const totalRevenue = data.reduce((acc, sale) => acc + sale.unitsSold * sale.unitPrice, 0);
    const totalUnitsSold = data.reduce((acc, sale) => acc + sale.unitsSold, 0);

    const salesOverTimeData = data.reduce((acc, sale) => {
      const month = sale.date.substring(0, 7); // YYYY-MM
      if (!acc[month]) {
        acc[month] = { name: month, revenue: 0 };
      }
      acc[month].revenue += sale.unitsSold * sale.unitPrice;
      return acc;
    }, {} as { [key: string]: { name: string; revenue: number } });
    
    // Fix: Explicitly type sort callback parameters to resolve 'unknown' type error.
    const salesOverTime = Object.values(salesOverTimeData).sort((a: { name: string; revenue: number }, b: { name: string; revenue: number }) => a.name.localeCompare(b.name));

    const salesByCategoryData = data.reduce((acc, sale) => {
      const category = sale.productCategory;
      if (!acc[category]) {
        acc[category] = { name: category, value: 0 };
      }
      acc[category].value += sale.unitsSold * sale.unitPrice;
      return acc;
    }, {} as { [key: string]: { name: string; value: number } });
    
    const salesByCategory = Object.values(salesByCategoryData);
    
    const salesByRegionData = data.reduce((acc, sale) => {
        const region = sale.region;
        if (!acc[region]) {
            acc[region] = { name: region, revenue: 0 };
        }
        acc[region].revenue += sale.unitsSold * sale.unitPrice;
        return acc;
    }, {} as { [key: string]: { name: string; revenue: number } });
    
    const salesByRegion = Object.values(salesByRegionData);

    const salesByRepData = data.reduce((acc, sale) => {
        const rep = sale.salesRep;
        if (!acc[rep]) {
            acc[rep] = { name: rep, totalSales: 0 };
        }
        acc[rep].totalSales += sale.unitsSold * sale.unitPrice;
        return acc;
    }, {} as { [key: string]: { name: string; totalSales: number } });

    // Fix: Explicitly type sort callback parameters to resolve 'unknown' type error.
    const topSalesReps = Object.values(salesByRepData)
      .sort((a: { name: string; totalSales: number }, b: { name: string; totalSales: number }) => b.totalSales - a.totalSales)
      .slice(0, 5);

    return { totalRevenue, totalUnitsSold, salesOverTime, salesByCategory, salesByRegion, topSalesReps };
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard title="Total Revenue" value={`$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
      <MetricCard title="Total Units Sold" value={totalUnitsSold.toLocaleString()} />
      <div className="md:col-span-2 lg:col-span-4 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-white">Revenue Over Time</h3>
        <SalesLineChart data={salesOverTime} />
      </div>
      <div className="md:col-span-2 lg:col-span-2 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-white">Sales by Category</h3>
        <CategoryPieChart data={salesByCategory} />
      </div>
      <div className="md:col-span-2 lg:col-span-2 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-white">Sales by Region</h3>
        <RegionBarChart data={salesByRegion} />
      </div>
      <div className="md:col-span-2 lg:col-span-4 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-white">Top Sales Representatives</h3>
        <TopSalesRepList data={topSalesReps} />
      </div>
    </div>
  );
};
