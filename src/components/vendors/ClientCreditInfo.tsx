
import { ClientData } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";

interface ClientCreditInfoProps {
  client: ClientData;
}

const ClientCreditInfo = ({ client }: ClientCreditInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <CreditCard className="h-4 w-4 text-muted-foreground" />
      <span className="text-muted-foreground">Tipo de pago:</span>
      <span className="font-medium">
        {client.isCredit ? 'Crédito' : 'Contado'}
      </span>
      {client.isCredit && client.creditStatus && (
        <Badge className={
          client.creditStatus === "al corriente" ? "bg-green-100 text-green-800" :
          client.creditStatus === "adeudo" ? "bg-yellow-100 text-yellow-800" :
          "bg-red-100 text-red-800"
        }>
          {client.creditStatus}
        </Badge>
      )}
    </div>
  );
};

export default ClientCreditInfo;
