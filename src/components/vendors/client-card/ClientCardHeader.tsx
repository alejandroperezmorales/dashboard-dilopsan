
import { Hash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ClientAcquisitionBadge from "./ClientAcquisitionBadge";

interface ClientCardHeaderProps {
  name: string;
  code: string;
  isNewClient: boolean;
  acquisitionSource?: string;
  hasReachedLtvTarget?: boolean;
}

const ClientCardHeader = ({ 
  name, 
  code, 
  isNewClient, 
  acquisitionSource,
  hasReachedLtvTarget
}: ClientCardHeaderProps) => {
  return (
    <div className="flex justify-between items-start mb-1 flex-wrap gap-1">
      <h4 className="font-medium text-base">{name}</h4>
      <div className="flex items-center gap-1 flex-wrap">
        {isNewClient && (
          <Badge className="bg-green-100 text-green-800 text-xs">Nuevo</Badge>
        )}
        <Badge variant="outline" className="text-xs flex items-center gap-1">
          <Hash className="h-3 w-3" />
          {code}
        </Badge>
        {acquisitionSource && (
          <ClientAcquisitionBadge 
            acquisitionSource={acquisitionSource}
            hasReachedLtvTarget={hasReachedLtvTarget} 
          />
        )}
      </div>
    </div>
  );
};

export default ClientCardHeader;
