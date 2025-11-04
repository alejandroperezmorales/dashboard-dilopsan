
import { 
  BadgeDollarSign, 
  Coins, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  Facebook,
  Instagram,
  Users,
  Target
} from "lucide-react";
import { ClientData } from "@/data/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

interface ClientAcquisitionStatsProps {
  client: ClientData;
}

const ClientAcquisitionStats = ({ client }: ClientAcquisitionStatsProps) => {
  // No acquisition data case
  if (!client.acquisitionSource) {
    return null;
  }
  
  const getLtvCacRatio = () => {
    if (!client.cac || !client.ltv) return 0;
    return client.ltv / client.cac;
  };
  
  const getStatusColor = () => {
    const ratio = getLtvCacRatio();
    if (ratio >= 3) return "text-sales-success";
    if (ratio > 1) return "text-amber-500";
    return "text-sales-danger";
  };
  
  const getStatusIcon = () => {
    const ratio = getLtvCacRatio();
    if (ratio >= 3) return <TrendingUp className="h-3.5 w-3.5 text-sales-success" />;
    if (ratio > 1) return <Target className="h-3.5 w-3.5 text-amber-500" />;
    return <TrendingDown className="h-3.5 w-3.5 text-sales-danger" />;
  };
  
  const getStatusText = () => {
    const ratio = getLtvCacRatio();
    if (ratio >= 3) return "Positivo (LTV ≥ 3x CAC)";
    if (ratio > 1) return `En proceso (${(ratio * 100 / 3).toFixed(0)}% del objetivo)`;
    return "Negativo (LTV < CAC)";
  };
  
  const getProgressPercent = () => {
    const ratio = getLtvCacRatio();
    return Math.min((ratio / 3) * 100, 100);
  };
  
  const getAcquisitionIcon = () => {
    switch (client.acquisitionSource) {
      case "facebook":
        return <Facebook className="h-3.5 w-3.5 text-blue-600" />;
      case "instagram":
        return <Instagram className="h-3.5 w-3.5 text-pink-600" />;
      case "traditional":
        return <Users className="h-3.5 w-3.5 text-gray-600" />;
      default:
        return <Users className="h-3.5 w-3.5 text-gray-600" />;
    }
  };
  
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString('es-MX')}`;
  };
  
  const getAcquisitionText = () => {
    switch (client.acquisitionSource) {
      case "facebook":
        return "Facebook";
      case "instagram":
        return "Instagram";
      case "google":
        return "Google";
      case "referral":
        return "Referencia";
      case "traditional":
        return "Tradicional";
      default:
        return "Tradicional";
    }
  };
  
  const getRemainingToTarget = () => {
    if (!client.cac || !client.ltv) return 0;
    const target = client.cac * 3;
    return Math.max(0, target - client.ltv);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">Método de adquisición:</span>
        <div className="flex items-center gap-1">
          {getAcquisitionIcon()}
          <span className="text-xs font-medium">{getAcquisitionText()}</span>
        </div>
      </div>
      
      {(client.acquisitionSource !== "traditional") && (
        <>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <BadgeDollarSign className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">CAC:</span>
            </div>
            <span className="text-xs font-medium">
              {client.cac ? formatCurrency(client.cac) : "N/A"}
            </span>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Coins className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">LTV:</span>
            </div>
            <span className="text-xs font-medium">
              {client.ltv ? formatCurrency(client.ltv) : "N/A"}
            </span>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Periodo:</span>
            </div>
            <span className="text-xs font-medium">
              {client.ltv_timeframe ? `${client.ltv_timeframe} meses` : "N/A"}
            </span>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`flex items-center justify-between gap-2 ${getStatusColor()} rounded-md px-2 py-1 bg-gray-50 border`}>
                  <div className="flex items-center gap-1">
                    {getStatusIcon()}
                    <span className="text-xs font-medium">LTV/CAC:</span>
                  </div>
                  <span className="text-xs font-medium">
                    {client.cac && client.ltv ? `${getLtvCacRatio().toFixed(1)}x` : "N/A"}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{getStatusText()}</p>
                {getLtvCacRatio() < 3 && getLtvCacRatio() > 0 && (
                  <p className="text-xs mt-1">
                    Necesita {formatCurrency(getRemainingToTarget())} más en LTV para alcanzar la meta
                  </p>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <div className="space-y-1 pt-1">
            <Progress 
              value={getProgressPercent()} 
              className="h-1.5"
            />
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progreso hacia meta 3x</span>
              <span className="font-medium">{getProgressPercent().toFixed(0)}%</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientAcquisitionStats;
