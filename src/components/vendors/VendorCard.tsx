
import { Link } from "react-router-dom";
import { ChevronRight, Users, Calendar, TrendingUp, TrendingDown, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VendorData } from "@/data/vendorsData";
import VendorHeader from "./VendorHeader";

interface VendorCardProps {
  vendor: VendorData;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  // Calcular el porcentaje de actividad (clientes activos / total de clientes)
  const activityPercentage = vendor.totalClients > 0 
    ? Math.round((vendor.activeClients / vendor.totalClients) * 100) 
    : 0;

  return (
    <Link to={`/vendors/${vendor.id}`} className="block h-full">
      <Card className="h-full transition-all hover:shadow-lg border-l-4 border-l-primary/50 hover:bg-gray-50 cursor-pointer">
        <VendorHeader 
          name={vendor.name}
          avatar={vendor.avatar}
          orders={vendor.orders}
          expanded={false}
          onToggleExpand={() => {}}
        />
        <CardContent className="p-5">
          <div className="space-y-4">
            {/* Información principal de ventas */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Ventas del mes:</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-lg">${vendor.sales.toLocaleString()}</span>
                <span 
                  className={`ml-2 ${
                    vendor.trend > 0 ? "text-sales-success" : "text-sales-danger"
                  } font-medium text-sm flex items-center`}
                >
                  {vendor.trend > 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(vendor.trend)}%
                </span>
              </div>
            </div>
            
            {/* Datos de clientes */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Información de Clientes</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total:</span>
                    <span className="font-medium">{vendor.totalClients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Activos:</span>
                    <span className="font-medium">{vendor.activeClients}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <ShoppingBag className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm text-muted-foreground">Actividad:</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${activityPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">
                      {activityPercentage}% de clientes realizan pedidos
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pedidos */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Total de pedidos:</span>
              </div>
              <span className="font-bold text-lg">{vendor.orders}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="default" className="w-full">
            Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VendorCard;
