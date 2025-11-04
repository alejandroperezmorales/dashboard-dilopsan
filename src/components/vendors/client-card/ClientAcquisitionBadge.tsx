
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Users } from "lucide-react";

interface ClientAcquisitionBadgeProps {
  acquisitionSource?: string;
  hasReachedLtvTarget?: boolean;
}

const ClientAcquisitionBadge = ({ acquisitionSource, hasReachedLtvTarget }: ClientAcquisitionBadgeProps) => {
  if (!acquisitionSource) return null;
  
  // Get acquisition source icon
  const getAcquisitionIcon = () => {
    switch (acquisitionSource) {
      case "facebook":
        return <Facebook className="h-3 w-3 text-blue-600" />;
      case "instagram":
        return <Instagram className="h-3 w-3 text-pink-600" />;
      case "traditional":
      default:
        return <Users className="h-3 w-3 text-gray-600" />;
    }
  };
  
  // Determine badge style based on acquisition source
  const getBadgeClassName = () => {
    if (acquisitionSource === "facebook") {
      return "bg-blue-50 text-blue-800 border-blue-200";
    } else if (acquisitionSource === "instagram") {
      return "bg-pink-50 text-pink-800 border-pink-200";
    } 
    return "";
  };
  
  return (
    <Badge 
      variant="outline" 
      className={`text-xs flex items-center gap-1 ${getBadgeClassName()}`}
    >
      {getAcquisitionIcon()}
      {acquisitionSource}
    </Badge>
  );
};

export default ClientAcquisitionBadge;
