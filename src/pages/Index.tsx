
import { useState } from "react";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import Header, { TimePeriod } from "@/components/dashboard/Header";
import { PeriodDataProvider } from "@/context/PeriodDataContext";
import KeyMetrics from "@/components/dashboard/KeyMetrics";
import CacLtvStats from "@/components/dashboard/CacLtvStats";
import ChartsSection from "@/components/dashboard/ChartsSection";
import SalesTablesSection from "@/components/dashboard/SalesTablesSection";

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("day");

  return (
    <SidebarLayout>
      <div className="container px-0 sm:px-2 max-w-full">
        <Header 
          selectedPeriod={selectedPeriod} 
          onPeriodChange={setSelectedPeriod} 
        />
        
        <PeriodDataProvider selectedPeriod={selectedPeriod}>
          {/* Key metrics cards */}
          <KeyMetrics />
          
          {/* CAC/LTV Statistics Card */}
          <CacLtvStats />
          
          {/* Charts - Sales trend and order status */}
          <ChartsSection />
          
          {/* Sales tables - Vendors and Telemarketing */}
          <SalesTablesSection />
        </PeriodDataProvider>
      </div>
    </SidebarLayout>
  );
};

export default Index;
