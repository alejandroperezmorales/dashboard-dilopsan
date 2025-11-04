import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MousePointer, ShoppingCart, Package } from "lucide-react";
import { Campaign } from "@/data/campaignsData";

interface CampaignCardProps {
  campaign: Campaign;
  onClick: () => void;
}

const CampaignCard = ({ campaign, onClick }: CampaignCardProps) => {
  const conversionRate = campaign.totalClicks > 0 
    ? (campaign.totalPedidos / campaign.totalClicks * 100).toFixed(1)
    : "0.0";

  const getChannelColor = (type: string) => {
    switch (type) {
      case "WhatsApp": return "bg-green-500/10 text-green-700 dark:text-green-300";
      case "Instagram": return "bg-pink-500/10 text-pink-700 dark:text-pink-300";
      case "Facebook": return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] h-fit"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-semibold leading-tight">{campaign.name}</CardTitle>
          <Badge className={`${getChannelColor(campaign.type)} text-xs px-2 py-0.5 shrink-0`}>
            {campaign.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="flex items-center justify-center mb-0.5">
              <MousePointer className="w-3 h-3 text-blue-500" />
            </div>
            <div className="text-lg font-bold">{campaign.totalClicks}</div>
            <div className="text-xs text-muted-foreground">Clicks</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-0.5">
              <ShoppingCart className="w-3 h-3 text-green-500" />
            </div>
            <div className="text-lg font-bold">{campaign.totalPedidos}</div>
            <div className="text-xs text-muted-foreground">Pedidos</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-0.5">
              <Package className="w-3 h-3 text-purple-500" />
            </div>
            <div className="text-lg font-bold">{campaign.totalUnidadesVendidas}</div>
            <div className="text-xs text-muted-foreground">Unidades</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs pt-2 border-t border-border">
          <span className="text-muted-foreground">Conversión: {conversionRate}%</span>
          <span className="text-muted-foreground">{campaign.products.length} productos</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
