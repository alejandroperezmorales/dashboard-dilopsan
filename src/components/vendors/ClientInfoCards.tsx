
import { ClientData } from "@/data/types";
import { useIsMobile } from "@/hooks/use-mobile";
import ClientContactInfo from "./client-info-cards/ClientContactInfo";
import ClientPurchaseInfo from "./client-info-cards/ClientPurchaseInfo";
import ClientAcquisitionCard from "./client-info-cards/ClientAcquisitionCard";

interface ClientInfoCardsProps {
  client: ClientData;
  formatDate: (dateString: string) => string;
  getTrendIcon: () => JSX.Element;
}

const ClientInfoCards = ({ 
  client, 
  formatDate 
}: ClientInfoCardsProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Contact Information - Now uses the dedicated component */}
      <ClientContactInfo client={client} />
      
      {/* Acquisition Data - Now uses the dedicated component */}
      {client.acquisitionSource && (
        <ClientAcquisitionCard client={client} />
      )}
      
      {/* Purchase Information - Now uses the dedicated component */}
      <ClientPurchaseInfo 
        client={client}
        formatDate={formatDate}
      />
    </div>
  );
};

export default ClientInfoCards;
