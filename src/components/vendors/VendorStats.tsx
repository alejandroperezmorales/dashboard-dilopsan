
import { Calendar, Users, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface VendorStatsProps {
  sales: number;
  trend: number;
  totalClients: number;
  activeClients: number;
}

const VendorStats = ({ sales, trend, totalClients, activeClients }: VendorStatsProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs sm:text-sm">Ventas:</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium">${sales.toLocaleString()}</span>
          <span 
            className={cn(
              "text-xs font-medium",
              trend > 0 ? "text-sales-success" : "text-sales-danger"
            )}
          >
            {trend > 0 ? "↑" : "↓"}{Math.abs(trend)}%
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex flex-col p-2 bg-gray-50 rounded-md">
          <div className="flex items-center gap-1 mb-1">
            <Users className="h-3 w-3 text-muted-foreground" />
            <span>Clientes:</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Total:</span>
            <span className="font-medium">{totalClients}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Activos:</span>
            <span className="font-medium">{activeClients}</span>
          </div>
        </div>
        
        <div className="flex flex-col p-2 bg-gray-50 rounded-md">
          <div className="flex items-center gap-1 mb-1">
            <ShoppingBag className="h-3 w-3 text-muted-foreground" />
            <span>Pedidos:</span>
          </div>
          <span className="font-medium text-lg text-center mt-1">{totalClients > 0 ? Math.round(activeClients / totalClients * 100) : 0}%</span>
          <span className="text-center text-xs text-muted-foreground">actividad</span>
        </div>
      </div>
    </div>
  );
};

export default VendorStats;
