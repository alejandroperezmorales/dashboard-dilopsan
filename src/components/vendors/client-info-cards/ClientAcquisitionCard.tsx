
import { BadgeDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ClientData } from "@/data/types";
import ClientAcquisitionStats from "../ClientAcquisitionStats";

interface ClientAcquisitionCardProps {
  client: ClientData;
}

const ClientAcquisitionCard = ({ client }: ClientAcquisitionCardProps) => {
  if (!client.acquisitionSource) return null;
  
  // Calculate LTV/CAC ratio if data exists
  const getLtvCacRatio = () => {
    if (!client.cac || !client.ltv) return 0;
    return client.ltv / client.cac;
  };
  
  // Check if acquisition is from social media and has reached target
  const isHighlighted = client.acquisitionSource !== "traditional" && getLtvCacRatio() >= 3;

  return (
    <Card className={isHighlighted ? "border-2 border-blue-500 shadow-md" : ""}>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <BadgeDollarSign className="h-4 w-4 text-blue-600" />
          Datos de Adquisición
          {isHighlighted && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Meta alcanzada</span>
          )}
        </h3>
        
        {client.acquisitionSource !== "traditional" && (
          <div className="mb-3 bg-blue-50 p-2 rounded-md">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Meta LTV/CAC:</span>
              <div className="flex items-center gap-1">
                <span className={`font-bold text-sm ${getLtvCacRatio() >= 3 ? "text-sales-success" : "text-amber-500"}`}>
                  {getLtvCacRatio().toFixed(1)}x
                </span>
                <span className="text-xs text-muted-foreground">/ 3.0x</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div 
                className={`h-2 rounded-full ${getLtvCacRatio() >= 3 ? "bg-sales-success" : "bg-amber-500"}`} 
                style={{ width: `${Math.min((getLtvCacRatio() / 3) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">Periodo: {client.ltv_timeframe || '-'} meses</span>
              <span className="text-xs font-medium">
                {getLtvCacRatio() >= 3 ? "✓ Completo" : "En proceso"}
              </span>
            </div>
          </div>
        )}
        
        <ClientAcquisitionStats client={client} />
      </CardContent>
    </Card>
  );
};

export default ClientAcquisitionCard;
