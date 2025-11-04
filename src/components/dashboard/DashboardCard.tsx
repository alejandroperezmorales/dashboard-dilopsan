
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const DashboardCard = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: DashboardCardProps) => {
  return (
    <Card className={cn("h-full transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 text-sales-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-xl sm:text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "mt-1 text-xs",
            trend.isPositive ? "text-sales-success" : "text-sales-danger"
          )}>
            <span className="inline-block mr-1">
              {trend.isPositive ? "↑" : "↓"}
            </span>
            {trend.value}% desde ayer
          </p>
        )}
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
