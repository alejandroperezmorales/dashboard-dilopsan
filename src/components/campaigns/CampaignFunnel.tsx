import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CampaignProduct } from '@/data/campaignsData';
import { MousePointer, ShoppingCart, Package, TrendingUp } from 'lucide-react';

interface CampaignFunnelProps {
  product: CampaignProduct;
}

const CampaignFunnel: React.FC<CampaignFunnelProps> = ({ product }) => {
  // Cálculo de tasas de conversión
  const clicksToPedidos = product.clicks > 0 ? (product.totalPedidos / product.clicks * 100) : 0;
  const pedidosToVentas = product.totalPedidos > 0 ? (product.totalUnidadesVendidas / product.totalPedidos) : 0;
  
  // Cálculo del aumento vs promedio diario
  const aumentoVsPromedio = product.promedioDiario > 0 
    ? ((product.totalUnidadesVendidas - product.promedioDiario) / product.promedioDiario * 100)
    : product.totalUnidadesVendidas > 0 ? 100 : 0;

  const maxValue = Math.max(product.clicks, product.totalPedidos, product.totalUnidadesVendidas);

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          {product.descripcion}
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Código: {product.codigoProducto}</Badge>
          {aumentoVsPromedio > 0 && (
            <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              +{aumentoVsPromedio.toFixed(1)}% vs promedio
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Embudo Visual */}
        <div className="space-y-3">
          {/* Clicks */}
          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <div className="flex items-center gap-3">
              <MousePointer className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="font-medium text-foreground">Clicks</p>
                <p className="text-sm text-muted-foreground">Interacciones iniciales</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{product.clicks}</p>
              <Progress value={maxValue > 0 ? (product.clicks / maxValue * 100) : 0} className="w-24 h-2" />
            </div>
          </div>

          {/* Pedidos */}
          <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg ml-4">
            <div className="flex items-center gap-3">
              <ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <div>
                <p className="font-medium text-foreground">Pedidos</p>
                <p className="text-sm text-muted-foreground">
                  Conversión: {clicksToPedidos.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{product.totalPedidos}</p>
              <Progress value={maxValue > 0 ? (product.totalPedidos / maxValue * 100) : 0} className="w-24 h-2" />
            </div>
          </div>

          {/* Unidades Vendidas */}
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg ml-8">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-medium text-foreground">Unidades Vendidas</p>
                <p className="text-sm text-muted-foreground">
                  Promedio por pedido: {pedidosToVentas.toFixed(1)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{product.totalUnidadesVendidas}</p>
              <Progress value={maxValue > 0 ? (product.totalUnidadesVendidas / maxValue * 100) : 0} className="w-24 h-2" />
            </div>
          </div>

          {/* Comparación con Promedio */}
          {product.promedioDiario > 0 && (
            <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg ml-12">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="font-medium text-foreground">Rendimiento</p>
                  <p className="text-sm text-muted-foreground">
                    vs Promedio diario ({product.promedioDiario})
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${aumentoVsPromedio >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {aumentoVsPromedio >= 0 ? '+' : ''}{aumentoVsPromedio.toFixed(1)}%
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Métricas adicionales */}
        {product.totalUnidadesCarrito > 0 && (
          <div className="pt-3 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">{product.totalUnidadesCarrito}</span> unidades en carrito (pendientes)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CampaignFunnel;