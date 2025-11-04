
import { Badge } from "@/components/ui/badge";
import { PromoSale } from "@/data/vendorsData";
import { Globe, Database } from "lucide-react";

interface ExpandedContentProps {
  expanded: boolean;
  promoSales?: PromoSale[];
}

const ExpandedContent = ({ expanded, promoSales = [] }: ExpandedContentProps) => {
  if (!expanded) return null;
  
  // Agrupar ventas promocionales por tipo
  const groupedByType = promoSales.reduce((acc, sale) => {
    if (!acc[sale.type]) {
      acc[sale.type] = { items: [], total: 0, web: 0, erp: 0 };
    }
    acc[sale.type].items.push(sale);
    acc[sale.type].total += sale.count;
    acc[sale.type][sale.source] += sale.count;
    return acc;
  }, {} as Record<string, { items: PromoSale[], total: number; web: number; erp: number }>);

  const getPromoBadgeColor = (type: string) => {
    switch (type) {
      case "remate": return "bg-[#F97316] text-white";
      case "relampago": return "bg-[#FEF7CD] text-black";
      case "preventa": return "bg-[#8B5CF6] text-white";
      case "mejor-precio": return "bg-[#ea384c] text-white";
      case "ofertas": return "bg-[#F2FCE2] text-black";
      default: return "bg-gray-200";
    }
  };
  
  const typeLabels: Record<string, string> = {
    "remate": "Remate",
    "relampago": "Relámpago",
    "preventa": "Preventa",
    "mejor-precio": "Mejor Precio",
    "ofertas": "Ofertas"
  };

  return (
    <div className="pt-2 mt-2 border-t">
      <div className="text-sm font-medium mb-2">Medicamentos en promoción vendidos:</div>
      
      {Object.keys(groupedByType).length > 0 ? (
        <div className="space-y-3">
          {Object.entries(groupedByType).map(([type, data]) => {
            const webPercentage = data.total > 0 ? Math.round((data.web / data.total) * 100) : 0;
            const erpPercentage = data.total > 0 ? Math.round((data.erp / data.total) * 100) : 0;
            
            return (
              <div key={type} className="bg-gray-50 p-3 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getPromoBadgeColor(type)}>
                    {typeLabels[type]}
                  </Badge>
                  <span className="text-sm font-medium">{data.total} unidades</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between px-2 py-1 bg-white rounded">
                    <span className="flex items-center">
                      <Globe className="h-3 w-3 text-primary mr-1" />
                      Web:
                    </span>
                    <span className="font-medium">{data.web} ({webPercentage}%)</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 bg-white rounded">
                    <span className="flex items-center">
                      <Database className="h-3 w-3 text-secondary mr-1" />
                      ERP:
                    </span>
                    <span className="font-medium">{data.erp} ({erpPercentage}%)</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-sm text-muted-foreground">
          No hay ventas de medicamentos en promoción
        </div>
      )}
    </div>
  );
};

export default ExpandedContent;
