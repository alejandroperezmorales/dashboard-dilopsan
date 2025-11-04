
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientData } from "@/data/types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList, Legend } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ClientMonthlyChartProps {
  client: ClientData;
  months?: number;
  className?: string;
}

const ClientMonthlyChart = ({ client, months = 12, className }: ClientMonthlyChartProps) => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  // Generate array of available years (current year and 2 previous years)
  const availableYears = [currentYear, currentYear - 1, currentYear - 2];
  
  // Generate mock data for all 12 months of the selected year
  const generateMockData = () => {
    const data = [];
    const today = new Date();
    let purchaseAmount = client.purchases / client.monthlyOrders;
    
    // Create data for all 12 months of the year
    for (let month = 0; month < 12; month++) {
      const date = new Date(selectedYear, month, 1);
      
      // Determine if this month is in the past or current based on selected year
      const isCurrentYearAndMonth = selectedYear === today.getFullYear() && month === today.getMonth();
      const isPastMonthOfSelectedYear = selectedYear < today.getFullYear() || 
                                       (selectedYear === today.getFullYear() && month < today.getMonth());
      const shouldHaveData = isPastMonthOfSelectedYear || isCurrentYearAndMonth;
      
      // Only generate actual data for current and past months
      let amount = 0;
      let profit = 0;
      let profitMargin = 0;
      
      if (shouldHaveData) {
        // Apply some random variation to purchase amounts
        // Use the month and year to generate consistent random values
        const monthYearSeed = (month + 1) * selectedYear;
        const variation = 0.7 + (Math.sin(monthYearSeed) * 0.5 + 0.5) * 0.6; // Between 70% and 130%
        amount = Math.round(purchaseAmount * variation);
        
        // Calculate profit (10-20% of amount)
        const profitRate = 0.1 + (Math.cos(monthYearSeed) * 0.5 + 0.5) * 0.1; // Between 10% and 20%
        profit = Math.round(amount * profitRate);
        profitMargin = Math.round(profitRate * 100);
      }
      
      // Format month name
      const monthName = format(date, 'MMM', { locale: es });
      
      data.push({
        month: monthName.charAt(0).toUpperCase() + monthName.slice(1, 3),
        amount,
        profit,
        profitMargin
      });
    }
    
    return data;
  };
  
  const data = generateMockData();
  
  // Calculate total amount and profit (from non-zero months)
  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0);
  const averageProfitMargin = totalAmount > 0 ? Math.round((totalProfit / totalAmount) * 100) : 0;
  
  // Custom data for the stacked bar chart
  const stackedData = data.map(item => ({
    ...item,
    sales: item.amount - item.profit, // Base part (sales without profit)
    profit: item.profit // Top part (profit only)
  }));
  
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base sm:text-lg font-medium">Compras Mensuales</CardTitle>
          <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(parseInt(value))}>
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue placeholder={selectedYear.toString()} />
            </SelectTrigger>
            <SelectContent>
              {availableYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-muted-foreground">
            12 meses del año {selectedYear}
          </span>
          <div className="flex flex-col items-end">
            <span className="font-medium">${totalAmount.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              Utilidad: ${totalProfit.toLocaleString()}
              <span className="text-green-600">({averageProfitMargin}%)</span>
            </span>
          </div>
        </div>
        
        <div className="px-0">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart 
              data={stackedData} 
              margin={{ top: 20, right: 5, left: 0, bottom: 5 }}
              barGap={0}
              barCategoryGap={isMobile ? 3 : 8}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: isMobile ? 9 : 10 }}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={false}
                width={0}
              />
              <Tooltip 
                formatter={(value: number, name: string) => {
                  if (name === 'sales') return [`$${value.toLocaleString()}`, 'Venta (sin utilidad)'];
                  if (name === 'profit') return [`$${value.toLocaleString()}`, 'Utilidad'];
                  return [value, name];
                }}
                labelFormatter={(label) => `${label}`}
                contentStyle={{ 
                  fontSize: '12px',
                  padding: '8px'
                }}
              />
              <Legend 
                align="center"
                verticalAlign="top"
                height={36}
                payload={[
                  { value: 'Venta', type: 'square', color: '#1a70d0' },
                  { value: 'Utilidad', type: 'square', color: '#8B5CF6' }
                ]}
                wrapperStyle={{ fontSize: '10px' }}
              />
              <Bar 
                dataKey="sales" 
                stackId="a"
                fill="#1a70d0"
                radius={[0, 0, 0, 0]} 
                name="Venta"
                barSize={isMobile ? 8 : 16}
              />
              <Bar 
                dataKey="profit" 
                stackId="a"
                fill="#8B5CF6" 
                radius={[4, 4, 0, 0]} 
                name="Utilidad"
                barSize={isMobile ? 8 : 16}
              >
                <LabelList 
                  dataKey="profitMargin" 
                  position="top" 
                  formatter={(value: number) => value > 0 ? `${value}%` : ''} 
                  style={{ fontSize: '10px', fill: '#16a34a' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientMonthlyChart;
