
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { ClientData } from "@/data/types";
import { cn } from "@/lib/utils";

import ClientCardHeader from "./ClientCardHeader";
import ClientLtvProgress from "./ClientLtvProgress";
import ClientMetrics from "./ClientMetrics";

interface ClientCardProps {
  client: ClientData;
  vendorId: string;
}

const ClientCard = ({ client, vendorId }: ClientCardProps) => {
  // Formateador de fechas en español
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Verificar si es un cliente nuevo (menos de un mes desde su registro)
  const isNewClient = () => {
    const registerDate = new Date(client.registerDate || new Date().toISOString());
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return registerDate > oneMonthAgo;
  };

  // Check if client has reached LTV/CAC target
  const hasReachedLtvTarget = () => {
    if (!client.cac || !client.ltv) return false;
    return client.ltv / client.cac >= 3;
  };

  return (
    <Card className={cn(
      "h-full hover:shadow-sm transition-all",
      client.acquisitionSource && client.acquisitionSource !== "traditional" && 
        (hasReachedLtvTarget() ? "border-l-4 border-l-green-500" : "border-l-4 border-l-amber-400")
    )}>
      <CardContent className="p-3">
        <ClientCardHeader 
          name={client.name}
          code={client.code}
          isNewClient={isNewClient()}
          acquisitionSource={client.acquisitionSource}
          hasReachedLtvTarget={hasReachedLtvTarget()}
        />

        {/* LTV/CAC Progress for social media clients */}
        <ClientLtvProgress 
          cac={client.cac}
          ltv={client.ltv}
          ltv_timeframe={client.ltv_timeframe}
          acquisitionSource={client.acquisitionSource}
        />

        <ClientMetrics 
          purchases={client.purchases}
          profit={client.profit}
          monthlyOrders={client.monthlyOrders}
          shippingCost={client.shippingCost}
          lastPurchaseDate={client.lastPurchaseDate}
          purchaseTrend={client.purchaseTrend}
          isCredit={client.isCredit}
          contactName={client.contactName}
          route={client.route}
          formatDate={formatDate}
        />
        
        <Link to={`/vendors/${vendorId}/clients/${client.id}`}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mt-2 text-xs justify-between"
          >
            Ver más
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
