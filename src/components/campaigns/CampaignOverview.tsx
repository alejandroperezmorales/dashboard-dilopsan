import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Campaign } from '@/data/campaignsData';
import { Calendar, MousePointer, ShoppingCart, Package, TrendingUp } from 'lucide-react';

interface CampaignOverviewProps {
  campaign: Campaign;
}

const CampaignOverview: React.FC<CampaignOverviewProps> = ({ campaign }) => {
  const conversionRate = campaign.totalClicks > 0 ? (campaign.totalPedidos / campaign.totalClicks * 100) : 0;
  const avgUnitsPerOrder = campaign.totalPedidos > 0 ? (campaign.totalUnidadesVendidas / campaign.totalPedidos) : 0;

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">{campaign.name}</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
              </Badge>
              <Badge variant="secondary">{campaign.type}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Clicks */}
          <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <MousePointer className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Clicks</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{campaign.totalClicks}</p>
            </div>
          </div>

          {/* Total Pedidos */}
          <div className="flex items-center space-x-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
            <ShoppingCart className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Pedidos</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{campaign.totalPedidos}</p>
            </div>
          </div>

          {/* Total Unidades */}
          <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <Package className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Unidades Vendidas</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{campaign.totalUnidadesVendidas}</p>
            </div>
          </div>

          {/* Tasa de Conversión */}
          <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
            <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Conversión</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{conversionRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        {/* Métricas secundarias */}
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Productos en campaña:</span>
              <span className="ml-2 font-medium">{campaign.products.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Promedio unidades por pedido:</span>
              <span className="ml-2 font-medium">{avgUnitsPerOrder.toFixed(1)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Click-to-Order Rate:</span>
              <span className="ml-2 font-medium">{conversionRate.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignOverview;