
import { ShoppingBag, Package, Hash, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ClientData } from "@/data/types";
import ClientCreditInfo from "../ClientCreditInfo";

interface ClientPurchaseInfoProps {
  client: ClientData;
  formatDate: (dateString: string) => string;
}

const ClientPurchaseInfo = ({ client, formatDate }: ClientPurchaseInfoProps) => {
  // Determine the trend icon based on purchaseTrend
  const getTrendIcon = () => {
    const trend = client.purchaseTrend || 0;
    if (trend > 0) {
      return <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-sales-success" />;
    } else if (trend < 0) {
      return <TrendingDown className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-sales-danger" />;
    } else {
      return <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-500 rotate-45" />;
    }
  };

  return (
    <Card>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Información de Compras</h3>
        <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-2.5 text-xs sm:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Compras:</span>
            </div>
            <span className="font-medium">${client.purchases.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Package className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Pedidos:</span>
            </div>
            <span className="font-medium">{client.monthlyOrders}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Hash className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Código:</span>
            </div>
            <span className="font-medium">{client.code}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Última compra:</span>
            </div>
            <div className="flex items-center gap-1">
              {getTrendIcon()}
              <span className="font-medium">{formatDate(client.lastPurchaseDate)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t">
          <ClientCreditInfo client={client} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientPurchaseInfo;
