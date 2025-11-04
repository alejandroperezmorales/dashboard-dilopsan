
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ClientData, PurchaseOrder } from "@/data/types";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ClientDetailInfo from "./ClientDetailInfo";
import ClientDetailOrders from "./ClientDetailOrders";

// Mock data generator for purchase orders
const generateMockOrders = (client: ClientData): PurchaseOrder[] => {
  if (client.orders) return client.orders;
  
  const orders: PurchaseOrder[] = [];
  // Generate between 5-10 orders
  const numOrders = Math.floor(Math.random() * 6) + 5;
  
  for (let i = 0; i < numOrders; i++) {
    // Generate date within the last 3 months
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 90));
    
    // Generate order amount around the client's average purchase amount
    const avgAmount = client.purchases / client.monthlyOrders;
    const amount = Math.round((avgAmount * (0.7 + Math.random() * 0.6)) / 10) * 10;
    
    // Calculate profit and commission based on typical ratios
    const profit = Math.round(amount * 0.2);
    const commission = Math.round(profit * 0.6);
    
    // Generate shipping cost around the client's average
    const shippingCost = Math.round(client.shippingCost * (0.8 + Math.random() * 0.4));
    
    orders.push({
      date: date.toISOString().split('T')[0],
      orderNumber: (100000 + Math.floor(Math.random() * 900000)).toString(),
      amount,
      profit,
      commission,
      shippingCost
    });
  }
  
  // Sort by date, most recent first
  return orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

interface ClientDetailDrawerProps {
  client: ClientData;
  open: boolean;
  onClose: () => void;
}

const ClientDetailDrawer = ({ client, open, onClose }: ClientDetailDrawerProps) => {
  const [orders, setOrders] = useState<PurchaseOrder[]>([]);
  
  useEffect(() => {
    // Generate mock orders when client changes
    setOrders(generateMockOrders(client));
  }, [client]);

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString('es-MX')}`;
  };
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd MMM yyyy", { locale: es });
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold flex items-center gap-2">
            {client.name} 
            <Badge variant="outline" className="ml-2">
              {client.code}
            </Badge>
          </DrawerTitle>
        </DrawerHeader>

        <div className="p-4 space-y-4 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ClientDetailInfo client={client} />
          </div>
          
          <Tabs defaultValue="historial" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="historial">Historial de Compras</TabsTrigger>
            </TabsList>
            
            <TabsContent value="historial">
              <ClientDetailOrders 
                orders={orders}
                formatDate={formatDate}
                formatCurrency={formatCurrency}
              />
            </TabsContent>
          </Tabs>
        </div>

        <DrawerFooter>
          <Button onClick={onClose}>Cerrar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ClientDetailDrawer;
