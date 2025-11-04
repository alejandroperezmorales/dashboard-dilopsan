
import { salesTeamData } from "@/data/salesTeamData";
import { telemarketingData } from "@/data/telemarketingData";
import SalesTable from "./SalesTable";

const SalesTablesSection = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <SalesTable 
        title="Vendedores"
        description="Desempeño individual ordenado alfabéticamente"
        data={salesTeamData}
        type="vendors"
        className="w-full"
      />
      <SalesTable 
        title="Telemarketing"
        description="Desempeño individual ordenado alfabéticamente"
        data={telemarketingData}
        type="telemarketing"
        className="w-full"
      />
    </div>
  );
};

export default SalesTablesSection;
