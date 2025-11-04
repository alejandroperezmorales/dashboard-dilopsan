
import { CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// Definimos los períodos de tiempo comunes
export type TimePeriod = "day" | "week" | "month" | "quarter" | "year";

interface HeaderProps {
  selectedPeriod?: TimePeriod;
  onPeriodChange?: (period: TimePeriod) => void;
}

const Header = ({ selectedPeriod = "day", onPeriodChange }: HeaderProps) => {
  const isMobile = useIsMobile();
  
  // Formato para las etiquetas de períodos
  const periodLabels: Record<TimePeriod, string> = {
    day: "Hoy",
    week: "Esta semana",
    month: "Este mes",
    quarter: "Este trimestre",
    year: "Este año"
  };
  
  // Format current date: "jueves, 04 de julio de 2024"
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const mobileOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };
  
  const formattedDate = today.toLocaleDateString('es-MX', isMobile ? mobileOptions : options);
  
  const handlePeriodChange = (period: TimePeriod) => {
    if (onPeriodChange) {
      onPeriodChange(period);
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 sm:pb-4 mb-2 sm:mb-3">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Dashboard de Ventas</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
          {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
        </p>
      </div>
      <div className="mt-2 sm:mt-0 flex items-center gap-2 self-start">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 sm:h-8 gap-1 text-xs sm:text-sm">
              <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{periodLabels[selectedPeriod]}</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem onClick={() => handlePeriodChange("day")}>
              Hoy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handlePeriodChange("week")}>
              Esta semana
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handlePeriodChange("month")}>
              Este mes
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handlePeriodChange("quarter")}>
              Este trimestre
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handlePeriodChange("year")}>
              Este año
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
