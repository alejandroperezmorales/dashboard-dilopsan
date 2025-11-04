
import { useParams } from "react-router-dom";
import { TrendingDown, TrendingUp } from "lucide-react";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import { ClientData } from "@/data/types";
import { salesTeamData, telemarketingData } from "@/data/vendorsData";
import ClientHeader from "@/components/vendors/ClientHeader";
import ClientInfoCards from "@/components/vendors/ClientInfoCards";
import ClientOrdersHistory from "@/components/vendors/ClientOrdersHistory";
import ClientMonthlyChart from "@/components/vendors/ClientMonthlyChart";

const ClientDetail = () => {
  const { vendorId, clientId } = useParams<{ vendorId: string; clientId: string }>();
  
  // Find vendor and client
  const vendor = [...salesTeamData, ...telemarketingData].find(v => v.id === vendorId);
  const client = vendor?.clients.find(c => c.id === clientId);

  if (!vendor || !client) {
    return (
      <SidebarLayout>
        <div className="container px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Cliente no encontrado</h2>
            <p className="text-muted-foreground">
              No se encontró información para el cliente solicitado.
            </p>
          </div>
        </div>
      </SidebarLayout>
    );
  }

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

  // Determinar el ícono y color de tendencia
  const getTrendIcon = () => {
    const trend = client.purchaseTrend || 0;
    if (trend > 0) {
      return <TrendingUp className="h-4 w-4 text-sales-success" />;
    } else if (trend < 0) {
      return <TrendingDown className="h-4 w-4 text-sales-danger" />;
    } else {
      return <TrendingUp className="h-4 w-4 text-amber-500 rotate-45" />;
    }
  };

  return (
    <SidebarLayout>
      <div className="container px-4 py-8">
        <ClientHeader 
          client={client} 
          vendorId={vendorId || ''} 
          isNewClient={isNewClient} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left column for information cards */}
          <div>
            <ClientInfoCards 
              client={client} 
              formatDate={formatDate} 
              getTrendIcon={getTrendIcon} 
            />
          </div>
          
          {/* Right column for monthly chart */}
          <div>
            <ClientMonthlyChart 
              client={client}
            />
          </div>
        </div>
        
        <ClientOrdersHistory 
          orders={client.orders || []} 
          formatDate={formatDate} 
        />
      </div>
    </SidebarLayout>
  );
};

export default ClientDetail;
