
import { useState } from "react";
import { PurchaseOrder } from "@/data/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Calendar } from "lucide-react";

interface ClientDetailOrdersProps {
  orders: PurchaseOrder[];
  formatDate: (dateString: string) => string;
  formatCurrency: (amount: number) => string;
}

const ClientDetailOrders = ({ orders, formatDate, formatCurrency }: ClientDetailOrdersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  
  // Filter orders based on search term and date
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderNumber.includes(searchTerm);
    const matchesDate = dateFilter ? order.date.includes(dateFilter) : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por # de orden" 
            className="pl-9" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 items-center">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <Input 
            type="date" 
            className="w-auto" 
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          {dateFilter && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setDateFilter("")}
            >
              Limpiar
            </Button>
          )}
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Orden #</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Utilidad</TableHead>
              <TableHead>Comisión</TableHead>
              <TableHead>Envío</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell>{order.orderNumber}</TableCell>
                  <TableCell>{formatCurrency(order.amount)}</TableCell>
                  <TableCell>{formatCurrency(order.profit)}</TableCell>
                  <TableCell>{formatCurrency(order.commission)}</TableCell>
                  <TableCell>{formatCurrency(order.shippingCost)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClientDetailOrders;
