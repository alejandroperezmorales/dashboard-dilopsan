
import { createContext, useContext, useMemo } from "react";
import { TimePeriod } from "@/components/dashboard/Header";
import { salesTeamData } from "@/data/salesTeamData";
import { telemarketingData } from "@/data/telemarketingData";

// Interface for the period data
interface PeriodData {
  salesData: Array<{ name: string; value: number }>;
  totalSales: number;
  totalOrders: number;
  totalProfit: number;
}

// Context interface
interface PeriodDataContextType {
  periodData: PeriodData;
  chartSubtitle: string;
}

// Create the context
const PeriodDataContext = createContext<PeriodDataContextType | undefined>(undefined);

// Provider props interface
interface PeriodDataProviderProps {
  children: React.ReactNode;
  selectedPeriod: TimePeriod;
}

// Function to generate data based on selected period
const generatePeriodData = (period: TimePeriod): PeriodData => {
  // Factor of multiplication for simulating different periods
  const multiplier = period === "day" ? 1 : 
                   period === "week" ? 7 : 
                   period === "month" ? 30 : 
                   period === "quarter" ? 90 : 365;

  // Generate data of sales based on period
  let salesData;
  switch (period) {
    case "day":
      salesData = [
        { name: "8AM", value: 5000 },
        { name: "10AM", value: 9000 },
        { name: "12PM", value: 15000 },
        { name: "2PM", value: 12000 },
        { name: "4PM", value: 18000 },
        { name: "6PM", value: 10000 },
        { name: "8PM", value: 8000 },
      ];
      break;
    case "week":
      salesData = [
        { name: "Lun", value: 25000 },
        { name: "Mar", value: 35000 },
        { name: "Mié", value: 32000 },
        { name: "Jue", value: 38000 },
        { name: "Vie", value: 42000 },
        { name: "Sáb", value: 30000 },
        { name: "Dom", value: 20000 },
      ];
      break;
    case "month":
      salesData = [
        { name: "Sem 1", value: 180000 },
        { name: "Sem 2", value: 210000 },
        { name: "Sem 3", value: 240000 },
        { name: "Sem 4", value: 195000 },
      ];
      break;
    case "quarter":
      salesData = [
        { name: "Ene", value: 620000 },
        { name: "Feb", value: 580000 },
        { name: "Mar", value: 750000 },
      ];
      break;
    case "year":
      salesData = [
        { name: "Q1", value: 1950000 },
        { name: "Q2", value: 2300000 },
        { name: "Q3", value: 2150000 },
        { name: "Q4", value: 2650000 },
      ];
      break;
  }

  // Calculate totals adjusted to period
  const baseTotalSales = [...salesTeamData, ...telemarketingData].reduce((acc, curr) => acc + curr.sales, 0);
  const baseTotalOrders = [...salesTeamData, ...telemarketingData].reduce((acc, curr) => acc + curr.orders, 0);
  
  const totalSales = baseTotalSales * multiplier;
  const totalOrders = Math.round(baseTotalOrders * multiplier);
  const totalProfit = totalSales * 0.2;
  
  return {
    salesData,
    totalSales,
    totalOrders,
    totalProfit
  };
};

// Provider component
export const PeriodDataProvider = ({ children, selectedPeriod }: PeriodDataProviderProps) => {
  // Generate data based on the period
  const periodData = useMemo(() => generatePeriodData(selectedPeriod), [selectedPeriod]);
  
  // Generate subtitle based on the period
  const chartSubtitle = useMemo(() => {
    switch (selectedPeriod) {
      case "day": return "Ventas de hoy por hora";
      case "week": return "Últimos 7 días";
      case "month": return "Últimas 4 semanas";
      case "quarter": return "Últimos 3 meses";
      case "year": return "Por trimestre";
    }
  }, [selectedPeriod]);

  return (
    <PeriodDataContext.Provider value={{ periodData, chartSubtitle }}>
      {children}
    </PeriodDataContext.Provider>
  );
};

// Hook to use the period data context
export const usePeriodData = (): PeriodDataContextType => {
  const context = useContext(PeriodDataContext);
  if (context === undefined) {
    throw new Error("usePeriodData must be used within a PeriodDataProvider");
  }
  return context;
};
