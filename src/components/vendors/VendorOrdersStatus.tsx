
import { Card, CardContent } from "@/components/ui/card";
import { Package, PackageCheck, PackageOpen, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderStatusProps {
  vendorId: string;
}

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

interface StatusData {
  status: OrderStatus;
  count: number;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const VendorOrdersStatus = ({ vendorId }: OrderStatusProps) => {
  // Mock data - in a real app this would come from the API
  const statusData: StatusData[] = [
    { 
      status: "pending", 
      count: Math.floor(Math.random() * 10) + 1, 
      icon: <Package className="h-4 w-4" />, 
      label: "Pendientes",
      color: "bg-amber-100 text-amber-800" 
    },
    { 
      status: "processing", 
      count: Math.floor(Math.random() * 15) + 5, 
      icon: <PackageOpen className="h-4 w-4" />, 
      label: "En proceso",
      color: "bg-blue-100 text-blue-800" 
    },
    { 
      status: "shipped", 
      count: Math.floor(Math.random() * 20) + 10, 
      icon: <Truck className="h-4 w-4" />, 
      label: "Enviados",
      color: "bg-purple-100 text-purple-800" 
    },
    { 
      status: "delivered", 
      count: Math.floor(Math.random() * 50) + 30, 
      icon: <PackageCheck className="h-4 w-4" />, 
      label: "Entregados",
      color: "bg-green-100 text-green-800" 
    }
  ];

  const totalOrders = statusData.reduce((sum, status) => sum + status.count, 0);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium">Pedidos de clientes</h2>
        <span className="text-xs text-muted-foreground">Total: <span className="font-semibold">{totalOrders}</span></span>
      </div>
      
      <Card className="overflow-hidden">
        <CardContent className="p-3">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {statusData.map((status) => (
              <div 
                key={status.status} 
                className="flex items-center gap-2 p-2 rounded-md border whitespace-nowrap flex-shrink-0"
                style={{ minWidth: "110px" }}
              >
                <div className={cn("p-1.5 rounded-full", status.color)}>
                  {status.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">{status.label}</span>
                  <span className="text-sm font-bold">{status.count}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorOrdersStatus;
