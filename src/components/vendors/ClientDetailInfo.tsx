
import { ClientData } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Package, TrendingUp, ShoppingBag, PercentIcon, RefreshCcw } from "lucide-react";
import ClientCreditInfo from "./ClientCreditInfo";

interface ClientDetailInfoProps {
  client: ClientData;
}

const ClientDetailInfo = ({ client }: ClientDetailInfoProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-md font-medium mb-2">Información del Cliente</h3>
        <div className="space-y-2 text-sm">
          <ClientCreditInfo client={client} />
          
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Compras mensuales:</span>
            <span className="font-medium">${(client.purchases || 0).toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Utilidad:</span>
            <span className="font-medium">${(client.profit || 0).toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Costo de paquetería:</span>
            <span className="font-medium">${(client.shippingCost || 0).toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Pedidos mensuales:</span>
            <span className="font-medium">{client.monthlyOrders || 0}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <PercentIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Compra ofertas:</span>
            <span className="font-medium">{client.purchasesOffers ? 'Sí' : 'No'}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Devoluciones:</span>
            <span className="font-medium">{client.returns || 0}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientDetailInfo;
