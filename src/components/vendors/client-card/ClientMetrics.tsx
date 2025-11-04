
import { Calendar, CreditCard, Package, ShoppingBag, TrendingDown, TrendingUp, MapPin, User } from "lucide-react";

interface ClientMetricsProps {
  purchases: number;
  profit?: number;
  monthlyOrders?: number;
  shippingCost?: number;
  lastPurchaseDate: string;
  purchaseTrend?: number;
  isCredit?: boolean;
  contactName?: string;
  route?: string;
  formatDate: (date: string) => string;
}

const ClientMetrics = ({
  purchases,
  profit,
  monthlyOrders,
  shippingCost,
  lastPurchaseDate,
  purchaseTrend,
  isCredit,
  contactName,
  route,
  formatDate
}: ClientMetricsProps) => {
  // Determine the icon and color of trend
  const getTrendIcon = () => {
    const trend = purchaseTrend || 0;
    if (trend > 0) {
      return <TrendingUp className="h-4 w-4 text-sales-success" />;
    } else if (trend < 0) {
      return <TrendingDown className="h-4 w-4 text-sales-danger" />;
    } else {
      return <TrendingUp className="h-4 w-4 text-amber-500 rotate-45" />;
    }
  };

  return (
    <>
      {isCredit && (
        <div className="flex items-center mb-2 text-xs text-muted-foreground">
          <CreditCard className="h-3.5 w-3.5 mr-1" />
          <span>Crédito</span>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs mb-2">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Compras:</span>
          <span className="font-medium">${purchases.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Utilidad:</span>
          <span className="font-medium">${(profit || 0).toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <ShoppingBag className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Pedidos:</span>
          </div>
          <span className="font-medium">{monthlyOrders || 0}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Package className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Envío:</span>
          </div>
          <span className="font-medium">${(shippingCost || 0).toLocaleString()}</span>
        </div>
      </div>

      {/* Display route and contact if available */}
      {(route || contactName) && (
        <div className="border-t border-b py-1 my-1 text-xs">
          {route && (
            <div className="flex items-center gap-1 mb-1">
              <MapPin className="h-3 w-3 text-blue-500" />
              <span className="text-muted-foreground">Ruta:</span>
              <span className="font-medium ml-auto truncate">{route}</span>
            </div>
          )}
          
          {contactName && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">Contacto:</span>
              <span className="font-medium ml-auto truncate">{contactName}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center text-xs pt-1 mt-1 border-t">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3 text-muted-foreground" />
          <span className="text-muted-foreground">Última compra:</span>
        </div>
        <div className="flex items-center gap-1">
          {getTrendIcon()}
          <span className="font-medium">{formatDate(lastPurchaseDate)}</span>
        </div>
      </div>
    </>
  );
};

export default ClientMetrics;
