
import { Globe, Database } from "lucide-react";

interface VendorOrderSourcesProps {
  webOrders: number;
  erpOrders: number;
}

const VendorOrderSources = ({ webOrders, erpOrders }: VendorOrderSourcesProps) => {
  return (
    <div className="pt-2 border-t">
      <div className="text-sm font-medium mb-2">Origen de pedidos:</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md">
          <div className="flex items-center gap-1 mb-1">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">Web</span>
          </div>
          <span className="text-lg font-bold">{webOrders}</span>
        </div>
        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md">
          <div className="flex items-center gap-1 mb-1">
            <Database className="h-4 w-4 text-secondary" />
            <span className="text-xs font-medium">ERP</span>
          </div>
          <span className="text-lg font-bold">{erpOrders}</span>
        </div>
      </div>
    </div>
  );
};

export default VendorOrderSources;
