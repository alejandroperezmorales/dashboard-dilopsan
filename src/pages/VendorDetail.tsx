
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, DollarSign, PercentIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import ClientCard from "@/components/vendors/client-card";
import PromoSalesSection from "@/components/vendors/PromoSalesSection";
import VendorOrdersStatus from "@/components/vendors/VendorOrdersStatus";
import { salesTeamData, telemarketingData } from "@/data/vendorsData";
import { useState } from "react";

const VendorDetail = () => {
  const { vendorId } = useParams<{ vendorId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Find vendor in both data sets
  const vendor = [...salesTeamData, ...telemarketingData].find(
    (v) => v.id === vendorId
  );

  if (!vendor) {
    return (
      <SidebarLayout>
        <div className="container px-4 py-8">
          <Link to="/vendors">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Vendedores
            </Button>
          </Link>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Vendedor no encontrado</h2>
            <p className="text-muted-foreground">
              No se encontró información para el vendedor solicitado.
            </p>
          </div>
        </div>
      </SidebarLayout>
    );
  }

  // Calculate date from 3 months ago to determine active/inactive clients
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  
  // Filter clients by search and status (search by name or code)
  const filteredClients = vendor.clients.filter(
    client => 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      client.code.includes(searchQuery)
  );
  
  const activeClients = filteredClients.filter(
    client => new Date(client.lastPurchaseDate) >= threeMonthsAgo
  );
  
  const inactiveClients = filteredClients.filter(
    client => new Date(client.lastPurchaseDate) < threeMonthsAgo
  );

  return (
    <SidebarLayout>
      <div className="container px-4 py-8">
        <Link to="/vendors">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Vendedores
          </Button>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 rounded-full bg-primary items-center justify-center">
            <span className="text-white font-bold text-md">{vendor.avatar}</span>
          </div>
          <h1 className="text-2xl font-bold">{vendor.name}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Monto de Venta</h3>
              </div>
              <p className="text-2xl font-bold">${vendor.sales.toLocaleString()}</p>
              <span 
                className={`text-sm font-medium ${
                  vendor.trend > 0 ? "text-sales-success" : "text-sales-danger"
                }`}
              >
                {vendor.trend > 0 ? "↑" : "↓"}{Math.abs(vendor.trend)}% vs mes anterior
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <h3 className="font-medium">Utilidad</h3>
              </div>
              <p className="text-2xl font-bold">${vendor.profit.toLocaleString()}</p>
              <span className="text-sm text-muted-foreground">
                {Math.round((vendor.profit / vendor.sales) * 100)}% del total
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <PercentIcon className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Comisión</h3>
              </div>
              <p className="text-2xl font-bold">${vendor.commission.toLocaleString()}</p>
              <span className="text-sm text-muted-foreground">
                {Math.round((vendor.commission / vendor.sales) * 100)}% de comisión
              </span>
            </CardContent>
          </Card>
        </div>
        
        {/* Add the new VendorOrdersStatus component */}
        <VendorOrdersStatus vendorId={vendorId || ''} />
        
        {vendor.promoSales && vendor.promoSales.length > 0 && (
          <PromoSalesSection promoSales={vendor.promoSales} vendorId={vendorId || ''} />
        )}

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Clientes Individuales ({vendor.clients.length})</h2>
          
          <div className="mb-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar cliente por nombre o código..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="todos">
                Todos ({filteredClients.length})
              </TabsTrigger>
              <TabsTrigger value="activos">
                Activos ({activeClients.length})
              </TabsTrigger>
              <TabsTrigger value="inactivos">
                Inactivos ({inactiveClients.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredClients.map(client => (
                  <ClientCard key={client.id} client={client} vendorId={vendorId || ''} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="activos" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {activeClients.map(client => (
                  <ClientCard key={client.id} client={client} vendorId={vendorId || ''} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="inactivos" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {inactiveClients.map(client => (
                  <ClientCard key={client.id} client={client} vendorId={vendorId || ''} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default VendorDetail;
