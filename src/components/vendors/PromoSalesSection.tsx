
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { PromoSale } from "@/data/types";
import { Link } from "react-router-dom";

// Define colors for each promo type
const promoTypeColors: Record<string, string> = {
  "remate": "bg-rose-100 text-rose-800",
  "relampago": "bg-amber-100 text-amber-800",
  "preventa": "bg-blue-100 text-blue-800",
  "mejor-precio": "bg-green-100 text-green-800",
  "ofertas": "bg-purple-100 text-purple-800",
};

// Descriptive names for each promo type
const promoTypeNames: Record<string, string> = {
  "remate": "Remate",
  "relampago": "Relámpago",
  "preventa": "Preventa",
  "mejor-precio": "Mejor Precio",
  "ofertas": "Ofertas",
};

interface PromoSalesSectionProps {
  promoSales: PromoSale[];
  vendorId: string; // Pass vendorId as prop instead of using useParams
}

const PromoSalesSection = ({ promoSales, vendorId }: PromoSalesSectionProps) => {
  // Group sales by promotion type
  const promosByType: Record<string, PromoSale[]> = {};
  
  promoSales.forEach(promo => {
    if (!promosByType[promo.type]) {
      promosByType[promo.type] = [];
    }
    promosByType[promo.type].push(promo);
  });

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3">Promociones</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {Object.entries(promosByType).map(([type, promos]) => {
          // Calculate totals for this promotion type
          const totalCount = promos.reduce((sum, promo) => sum + promo.count, 0);
          const webCount = promos.filter(p => p.source === "web").reduce((sum, p) => sum + p.count, 0);
          const webPercent = Math.round((webCount / totalCount) * 100) || 0;
          
          return (
            <Card key={type} className="overflow-hidden">
              <CardContent className="p-3">
                <div className="flex flex-col h-full">
                  <Badge className={`self-start mb-2 ${promoTypeColors[type]}`}>
                    {promoTypeNames[type]}
                  </Badge>
                  
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Unidades:</span>
                    <span className="text-sm font-medium">{totalCount}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Web:</span>
                    <span className="text-sm font-medium">{webPercent}%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">ERP:</span>
                    <span className="text-sm font-medium">{100 - webPercent}%</span>
                  </div>
                  
                  <Link to={`/vendors/${vendorId}/promos/${type}`} className="mt-auto pt-2">
                    <Button variant="ghost" size="sm" className="w-full text-xs">
                      Ver detalle <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PromoSalesSection;
