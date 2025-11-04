
import { User } from "lucide-react";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import VendorList from "@/components/vendors/VendorList";
import { salesTeamData, telemarketingData } from "@/data/vendorsData";

const Vendors = () => {
  return (
    <SidebarLayout>
      <div className="container px-2 sm:px-4 max-w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Equipo de Ventas</h1>
          <p className="text-muted-foreground">
            Desempeño mensual detallado de vendedores y telemarketing
          </p>
        </div>
        
        <div className="space-y-8">
          <VendorList 
            vendors={salesTeamData} 
            title={`Vendedores (${salesTeamData.length})`} 
          />
          
          <VendorList 
            vendors={telemarketingData} 
            title={`Telemarketing (${telemarketingData.length})`} 
          />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Vendors;
