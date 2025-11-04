
import { DollarSign, PackageOpen, TrendingUp, Users } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { usePeriodData } from "@/context/PeriodDataContext";
import { salesTeamData } from "@/data/salesTeamData";
import { telemarketingData } from "@/data/telemarketingData";

const KeyMetrics = () => {
  const { periodData } = usePeriodData();
  const { totalSales, totalProfit, totalOrders } = periodData;
  
  // Total active vendors
  const totalVendors = salesTeamData.length + telemarketingData.length;
  
  // Order status data for showing in-progress and completed orders
  const inProgressOrders = 18 + 15; // Surtiendose + Empacandose
  const completedOrders = 20; // Terminado

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 mb-4 sm:mb-6">
      <DashboardCard
        title="Ventas Totales"
        value={`$${totalSales.toLocaleString()}`}
        icon={<DollarSign className="h-6 sm:h-8 w-6 sm:w-8" />}
        trend={{ value: 5, isPositive: true }}
      />
      <DashboardCard
        title="Utilidad de la Venta"
        value={`$${totalProfit.toLocaleString()}`}
        icon={<TrendingUp className="h-6 sm:h-8 w-6 sm:w-8" />}
        trend={{ value: 7, isPositive: true }}
        className="bg-gradient-to-br from-white to-blue-50"
      />
      <DashboardCard
        title="Total de Pedidos"
        value={totalOrders}
        icon={<PackageOpen className="h-6 sm:h-8 w-6 sm:w-8" />}
        description={`${inProgressOrders} en proceso, ${completedOrders} terminados`}
      />
      <DashboardCard
        title="Vendedores Activos"
        value={totalVendors}
        icon={<Users className="h-6 sm:h-8 w-6 sm:w-8" />}
        description={`${salesTeamData.length} vendedores, ${telemarketingData.length} telemarketing`}
      />
    </div>
  );
};

export default KeyMetrics;
