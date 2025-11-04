
import { BadgeDollarSign, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ClientLtvProgressProps {
  cac?: number;
  ltv?: number;
  ltv_timeframe?: number;
  acquisitionSource?: string;
}

const ClientLtvProgress = ({ cac, ltv, ltv_timeframe, acquisitionSource }: ClientLtvProgressProps) => {
  // Skip if not from social media or missing data
  if (!acquisitionSource || acquisitionSource === "traditional" || !cac || !ltv) {
    return null;
  }

  // Calculate LTV/CAC ratio if data exists
  const getLtvCacRatio = () => {
    if (!cac || !ltv) return 0;
    return ltv / cac;
  };
  
  // Check if client has reached LTV/CAC target
  const hasReachedLtvTarget = () => {
    return getLtvCacRatio() >= 3;
  };
  
  // Calculate progress percentage towards 3x LTV/CAC target
  const getLtvTargetProgress = () => {
    return Math.min((getLtvCacRatio() / 3) * 100, 100);
  };
  
  return (
    <div className="mb-2 bg-gray-50 p-1.5 rounded-md border">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1 text-xs">
          <BadgeDollarSign className="h-3 w-3 text-blue-600" />
          <span className="text-muted-foreground">LTV/CAC:</span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1">
                {hasReachedLtvTarget() ? (
                  <Badge className="h-5 bg-green-500 hover:bg-green-600 text-xs px-1.5">Meta 3x ✓</Badge>
                ) : (
                  <Target className="h-3 w-3 text-amber-500" />
                )}
                <span className={`font-medium text-xs ${hasReachedLtvTarget() ? 'text-sales-success' : 'text-amber-600'}`}>
                  {getLtvCacRatio().toFixed(1)}x
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{hasReachedLtvTarget() ? 'Meta 3x alcanzada' : `${getLtvTargetProgress().toFixed(0)}% de la meta`}</p>
              <p className="text-xs mt-1">{ltv_timeframe ? `Periodo: ${ltv_timeframe} meses` : ''}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Progress 
        value={getLtvTargetProgress()} 
        className="h-1" 
      />
    </div>
  );
};

export default ClientLtvProgress;
