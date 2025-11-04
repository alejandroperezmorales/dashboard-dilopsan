
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderStatusItem {
  name: string;
  value: number;
  color: string;
}

interface OrdersChartProps {
  title: string;
  subtitle?: string;
  data: OrderStatusItem[];
  className?: string;
}

const OrdersChart = ({ title, subtitle, data, className }: OrdersChartProps) => {
  // Calculate total orders for percentage calculation
  const totalOrders = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((status, index) => {
            const percentage = totalOrders > 0 
              ? ((status.value / totalOrders) * 100).toFixed(1) 
              : "0";
              
            return (
              <div key={`status-${index}`} className="flex flex-col space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm flex items-center">
                    <span 
                      className="inline-block w-3 h-3 rounded-sm mr-2" 
                      style={{ backgroundColor: status.color }}
                    />
                    {status.name}
                  </span>
                  <span className="text-sm font-bold">
                    {status.value} <span className="text-muted-foreground font-normal">({percentage}%)</span>
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full rounded-full" 
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: status.color 
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersChart;
