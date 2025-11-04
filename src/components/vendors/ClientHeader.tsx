
import { Link } from "react-router-dom";
import { ArrowLeft, Hash, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClientData } from "@/data/types";

interface ClientHeaderProps {
  client: ClientData;
  vendorId: string;
  isNewClient: () => boolean;
}

const ClientHeader = ({ client, vendorId, isNewClient }: ClientHeaderProps) => {
  return (
    <>
      <Link to={`/vendors/${vendorId}`}>
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Vendedor
        </Button>
      </Link>

      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{client.name}</h1>
            {isNewClient() && (
              <Badge className="bg-green-100 text-green-800 text-xs">Nuevo</Badge>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="text-xs flex items-center gap-1">
              <Hash className="h-3 w-3" />
              {client.code}
            </Badge>
            {client.isCredit ? (
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Cliente con crédito
                {client.creditStatus && (
                  <span className={`ml-1 ${
                    client.creditStatus === "al corriente" ? "text-green-600" : 
                    client.creditStatus === "adeudo" ? "text-amber-600" : "text-red-600"
                  }`}>
                    ({client.creditStatus})
                  </span>
                )}
              </Badge>
            ) : (
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Cliente de contado
              </Badge>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
