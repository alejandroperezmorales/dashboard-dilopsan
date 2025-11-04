
import { User, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ClientData } from "@/data/types";

interface ClientContactInfoProps {
  client: ClientData;
}

const ClientContactInfo = ({ client }: ClientContactInfoProps) => {
  // Format phone number for WhatsApp link
  const formatWhatsAppLink = (phone: string) => {
    // Remove any non-numeric characters
    const numericPhone = phone.replace(/\D/g, '');
    return `https://wa.me/${numericPhone}`;
  };

  return (
    <Card>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Información de Contacto</h3>
        <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
          {client.contactName && (
            <div className="flex justify-between items-center flex-wrap gap-1">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <User className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Contacto:</span>
              </div>
              <span className="font-medium">{client.contactName}</span>
            </div>
          )}
          
          {client.contactPhone && (
            <div className="flex justify-between items-center flex-wrap gap-1">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Teléfono:</span>
              </div>
              <a 
                href={formatWhatsAppLink(client.contactPhone)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium flex items-center gap-1 text-blue-600 hover:underline"
              >
                {client.contactPhone}
                <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </a>
            </div>
          )}
          
          {client.route && (
            <div className="flex justify-between items-center flex-wrap gap-1">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Ruta:</span>
              </div>
              <span className="font-medium">{client.route}</span>
            </div>
          )}
          
          {client.notes && (
            <div className="pt-2 mt-2 border-t">
              <p className="text-muted-foreground mb-1 text-xs sm:text-sm">Observaciones:</p>
              <p className="italic text-xs sm:text-sm">{client.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientContactInfo;
