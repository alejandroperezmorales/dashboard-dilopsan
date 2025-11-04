
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SalesPerson {
  id: string;
  name: string;
  sales: number;
  orders: number;
  trend: number;
}

interface SalesTableProps {
  title: string;
  description?: string;
  data: SalesPerson[];
  type: "vendors" | "telemarketing";
  className?: string;
}

const SalesTable = ({ title, description, data, type, className }: SalesTableProps) => {
  // Sort data alphabetically by name
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  const isMobile = useIsMobile();
  
  // Different header style based on type - más claro
  const headerClass = type === "vendors" 
    ? "bg-primary/20 text-primary border-b border-primary/20" 
    : "bg-secondary/20 text-secondary border-b border-secondary/20";
  
  return (
    <Card className={cn("h-full transition-all hover:shadow-sm overflow-hidden", className)}>
      <CardHeader className={cn("rounded-t-lg", headerClass)}>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription className="opacity-80">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sortedData.map((person) => (
            <Card key={person.id} className="border rounded-md shadow-sm hover:shadow transition-all overflow-hidden bg-white">
              <div className={cn(
                "w-full h-1.5", 
                person.trend > 0 ? "bg-sales-success" : 
                person.trend < 0 ? "bg-sales-danger" : 
                "bg-gray-200"
              )} />
              <div className="p-3">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-sm sm:text-base">{person.name}</h3>
                  <span
                    className={cn(
                      "inline-flex items-center text-sm",
                      person.trend > 0
                        ? "text-sales-success"
                        : person.trend < 0
                        ? "text-sales-danger"
                        : "text-muted-foreground"
                    )}
                  >
                    {person.trend > 0 ? "↑" : person.trend < 0 ? "↓" : "–"}
                    {Math.abs(person.trend)}%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div>
                    <p className="text-muted-foreground">Ventas:</p>
                    <p className="font-medium">${person.sales.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pedidos:</p>
                    <p className="font-medium">{person.orders}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesTable;
