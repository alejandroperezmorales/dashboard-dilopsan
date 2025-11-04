
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Package, 
  CircleCheck, 
  CircleDot, 
  CircleX,
  Truck,
  FileText,
  Clock
} from "lucide-react";
import { PurchaseOrder } from "@/data/types";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface ClientOrdersHistoryProps {
  orders: PurchaseOrder[];
  formatDate: (dateString: string) => string;
}

const ClientOrdersHistory = ({ orders, formatDate }: ClientOrdersHistoryProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  // Filter orders by date and search
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderNumber.includes(searchQuery);
    
    if (!startDate && !endDate) return matchesSearch;
    
    const orderDate = new Date(order.date);
    const start = startDate ? new Date(startDate) : new Date(0);
    const end = endDate ? new Date(endDate) : new Date();
    
    return matchesSearch && orderDate >= start && orderDate <= end;
  });

  // Función para obtener color basado en el estatus del pedido
  const getOrderStatusColor = (status?: string) => {
    switch(status) {
      case "Preparando": return "bg-amber-500 hover:bg-amber-600";
      case "Empacando": return "bg-blue-500 hover:bg-blue-600";
      case "Enviado": return "bg-purple-500 hover:bg-purple-600";
      case "Entregado": return "bg-green-500 hover:bg-green-600";
      case "Cancelado": return "bg-red-500 hover:bg-red-600";
      default: return "bg-slate-500 hover:bg-slate-600";
    }
  };

  // Función para obtener ícono basado en el estatus del pago
  const getPaymentStatusIcon = (status?: string) => {
    switch(status) {
      case "Pagado": return <CircleCheck className="h-4 w-4 text-green-500" />;
      case "Abonado": return <CircleDot className="h-4 w-4 text-amber-500" />;
      case "Adeudo": return <CircleX className="h-4 w-4 text-red-500" />;
      default: return <CircleDot className="h-4 w-4 text-slate-500" />;
    }
  };

  // Función para mostrar el detalle de envío
  const renderShippingDetails = (order: PurchaseOrder) => {
    return (
      <div className="bg-muted/30 rounded-md p-3 mt-2 text-xs">
        <h4 className="font-medium mb-1.5">Detalles de envío</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-muted-foreground">Tipo de entrega:</span>
            <p className="font-medium">{order.deliveryType || "No especificado"}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Fecha de envío:</span>
            <p className="font-medium">{order.shippingDate ? formatDate(order.shippingDate) : "Pendiente"}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Bultos:</span>
            <p className="font-medium">{order.packages || "N/A"}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Folio:</span>
            <p className="font-medium">{order.documentNumber || "Pendiente"}</p>
          </div>
          {order.shippingAddress && (
            <div className="col-span-2">
              <span className="text-muted-foreground">Dirección:</span>
              <p className="font-medium break-words">{order.shippingAddress}</p>
            </div>
          )}
          {order.recipientPhone && (
            <div className="col-span-2">
              <span className="text-muted-foreground">Teléfono:</span>
              <p className="font-medium">{order.recipientPhone}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-4">Historial de Compras</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por número de orden..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div>
          <Input
            type="date"
            placeholder="Fecha inicial"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        
        <div>
          <Input
            type="date"
            placeholder="Fecha final"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>No. Orden</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Estatus</TableHead>
              <TableHead>Pago</TableHead>
              <TableHead>Paquetería</TableHead>
              <TableHead className="text-right">Monto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <React.Fragment key={order.orderNumber}>
                  <TableRow 
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => setExpandedOrder(expandedOrder === order.orderNumber ? null : order.orderNumber)}
                  >
                    <TableCell>
                      {expandedOrder === order.orderNumber ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{order.orderNumber}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{formatDate(order.date)}</span>
                        <span className="text-xs text-muted-foreground">{order.time || '12:00 PM'}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={`${getOrderStatusColor(order.orderStatus)} text-white`}
                      >
                        {order.orderStatus || 'Pendiente'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getPaymentStatusIcon(order.paymentStatus)}
                        <span>{order.paymentStatus || 'Pendiente'}</span>
                      </div>
                    </TableCell>
                    <TableCell>{order.courierName || 'Por definir'}</TableCell>
                    <TableCell className="text-right font-medium">${order.amount.toLocaleString()}</TableCell>
                  </TableRow>
                  
                  {expandedOrder === order.orderNumber && (
                    <TableRow>
                      <TableCell colSpan={7} className="p-0">
                        <div className="px-4 py-3 bg-muted/20">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="text-sm font-medium flex items-center gap-1.5 mb-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                Documento
                              </h4>
                              <div className="text-xs space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Folio:</span>
                                  <span className="font-medium">{order.documentNumber || 'Pendiente'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Fecha:</span>
                                  <span className="font-medium">
                                    {order.documentDate ? formatDate(order.documentDate) : 'Pendiente'}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Hora:</span>
                                  <span className="font-medium">{order.documentTime || 'N/A'}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium flex items-center gap-1.5 mb-2">
                                <Truck className="h-4 w-4 text-muted-foreground" />
                                Envío
                              </h4>
                              <div className="text-xs space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Guía:</span>
                                  <span className="font-medium">{order.trackingNumber || 'Pendiente'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Bultos:</span>
                                  <span className="font-medium">{order.packages || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Fecha envío:</span>
                                  <span className="font-medium">
                                    {order.shippingDate ? formatDate(order.shippingDate) : 'Pendiente'}
                                  </span>
                                </div>
                                
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full mt-1 text-xs h-7"
                                >
                                  Ver detalle de envío
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium flex items-center gap-1.5 mb-2">
                                <Package className="h-4 w-4 text-muted-foreground" />
                                Información de Transacción
                              </h4>
                              <div className="text-xs space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Utilidad:</span>
                                  <span className="font-medium">${order.profit.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Comisión:</span>
                                  <span className="font-medium">${order.commission.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Costo envío:</span>
                                  <span className="font-medium">${order.shippingCost.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Detalles de envío colapsables */}
                          <Accordion type="single" collapsible className="mt-3">
                            <AccordionItem value="shipping-details">
                              <AccordionTrigger className="py-2 text-sm">
                                Detalles de envío
                              </AccordionTrigger>
                              <AccordionContent>
                                {renderShippingDetails(order)}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No hay pedidos que coincidan con los criterios de búsqueda
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClientOrdersHistory;
