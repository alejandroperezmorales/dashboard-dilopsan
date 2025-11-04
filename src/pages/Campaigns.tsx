import React, { useState } from "react";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { campaignsData } from "@/data/campaignsData";
import CampaignOverview from "@/components/campaigns/CampaignOverview";
import CampaignFunnel from "@/components/campaigns/CampaignFunnel";
import CampaignCard from "@/components/campaigns/CampaignCard";

const Campaigns: React.FC = () => {
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);
  
  const selectedCampaign = selectedCampaignId 
    ? campaignsData.find(campaign => campaign.id === selectedCampaignId)
    : null;

  const handleBackToOverview = () => {
    setSelectedCampaignId(null);
  };

  const handleCampaignSelect = (campaignId: string) => {
    setSelectedCampaignId(campaignId);
  };

  // Agrupar campañas por tipo de red social
  const campaignsByChannel = campaignsData.reduce((acc, campaign) => {
    if (!acc[campaign.type]) {
      acc[campaign.type] = [];
    }
    acc[campaign.type].push(campaign);
    return acc;
  }, {} as Record<string, typeof campaignsData>);

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "WhatsApp": return "💬";
      case "Instagram": return "📸";
      case "Facebook": return "👥";
      default: return "📱";
    }
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {!selectedCampaign ? (
          <>
            {/* Vista general de todas las campañas */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Campañas Publicitarias</h1>
              <p className="text-muted-foreground">
                Analiza el rendimiento de tus campañas y optimiza tu estrategia de marketing.
              </p>
            </div>
            
            {/* Campañas agrupadas por canal */}
            {Object.entries(campaignsByChannel).map(([channel, campaigns]) => (
              <div key={channel} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <span className="text-lg">{getChannelIcon(channel)}</span>
                  <h2 className="text-lg font-semibold text-foreground">{channel}</h2>
                  <span className="text-sm text-muted-foreground">({campaigns.length} campañas)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {campaigns.map((campaign) => (
                    <CampaignCard 
                      key={campaign.id} 
                      campaign={campaign}
                      onClick={() => handleCampaignSelect(campaign.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* Vista detallada de campaña seleccionada */}
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleBackToOverview}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a campañas
              </Button>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  {selectedCampaign.name}
                </h1>
                <p className="text-muted-foreground">
                  Análisis detallado de la campaña {selectedCampaign.type}
                </p>
              </div>
            </div>

            {/* Overview de la campaña */}
            <CampaignOverview campaign={selectedCampaign} />

            {/* Análisis por producto */}
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Embudo por Producto</CardTitle>
                <CardDescription>
                  Seguimiento detallado del proceso de conversión desde clicks hasta ventas para cada producto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedCampaign.products.map((product) => (
                    <CampaignFunnel key={product.codigoProducto} product={product} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insights y Recomendaciones */}
            <Card>
              <CardHeader>
                <CardTitle>Insights y Recomendaciones</CardTitle>
                <CardDescription>
                  Análisis automatizado basado en el rendimiento de la campaña
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedCampaign.products.map((product) => {
                    const clicksToPedidos = product.clicks > 0 ? (product.totalPedidos / product.clicks * 100) : 0;
                    const aumentoVsPromedio = product.promedioDiario > 0 
                      ? ((product.totalUnidadesVendidas - product.promedioDiario) / product.promedioDiario * 100)
                      : 0;

                    return (
                      <div key={product.codigoProducto} className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{product.descripcion}</h4>
                        <div className="space-y-2 text-sm">
                          {clicksToPedidos < 10 && product.clicks > 0 && (
                            <p className="text-yellow-600 dark:text-yellow-400">
                              ⚠️ Baja conversión de clicks a pedidos ({clicksToPedidos.toFixed(1)}%). 
                              Considera mejorar la descripción del producto o el precio.
                            </p>
                          )}
                          {clicksToPedidos > 20 && (
                            <p className="text-green-600 dark:text-green-400">
                              ✅ Excelente conversión de clicks a pedidos ({clicksToPedidos.toFixed(1)}%). 
                              Este producto tiene alto potencial.
                            </p>
                          )}
                          {aumentoVsPromedio > 50 && (
                            <p className="text-green-600 dark:text-green-400">
                              🚀 Rendimiento excepcional: +{aumentoVsPromedio.toFixed(1)}% vs promedio diario. 
                              Considera aumentar la inversión en este producto.
                            </p>
                          )}
                          {product.totalUnidadesCarrito > 0 && (
                            <p className="text-blue-600 dark:text-blue-400">
                              🛒 {product.totalUnidadesCarrito} unidades en carrito. 
                              Envía recordatorios para completar la compra.
                            </p>
                          )}
                          {product.clicks === 0 && product.totalPedidos > 0 && (
                            <p className="text-purple-600 dark:text-purple-400">
                              📱 Ventas orgánicas sin clicks registrados. 
                              Considera implementar mejor tracking de conversiones.
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </SidebarLayout>
  );
};

export default Campaigns;