
import { usePeriodData } from "@/context/PeriodDataContext";
import SalesChart from "./SalesChart";
import OrderStatusSection from "./OrderStatusSection";

const ChartsSection = () => {
  const { periodData, chartSubtitle } = usePeriodData();
  
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3 mb-4 sm:mb-6">
      <SalesChart 
        title="Tendencia de Ventas"
        subtitle={chartSubtitle}
        data={periodData.salesData}
        className="lg:col-span-2"
      />
      <OrderStatusSection />
    </div>
  );
};

export default ChartsSection;
