
import { CardHeader, CardTitle } from "@/components/ui/card";

interface VendorHeaderProps {
  name: string;
  avatar: string;
  orders: number;
  expanded: boolean;
  onToggleExpand: () => void;
}

const VendorHeader = ({ name, avatar, orders }: VendorHeaderProps) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
      <div className="flex items-center space-x-3">
        <div className="flex h-8 w-8 rounded-full bg-primary items-center justify-center">
          <span className="text-white font-bold text-xs">{avatar}</span>
        </div>
        <div>
          <CardTitle className="text-base font-medium">{name}</CardTitle>
          <p className="text-xs text-muted-foreground">
            {orders} pedidos
          </p>
        </div>
      </div>
    </CardHeader>
  );
};

export default VendorHeader;
