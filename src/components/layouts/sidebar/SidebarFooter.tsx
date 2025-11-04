
import React from "react";
import { Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarFooterProps {
  collapsed: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  setIsOpen?: (isOpen: boolean) => void;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ 
  collapsed, 
  isMobile, 
  toggleSidebar,
  setIsOpen 
}) => {
  return (
    <>
      <div className="p-2 border-t border-sidebar-border mt-auto">
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
            collapsed ? "justify-center px-2" : "px-3"
          )}
        >
          <Settings className="h-5 w-5" />
          <span className={cn("transition-opacity", 
            collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
          )}>Configuración</span>
        </Button>
      </div>

      {!isMobile && (
        <div className="p-2 border-t border-sidebar-border">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleSidebar}
            className={cn(
              "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
              collapsed ? "justify-center px-2" : "px-3"
            )}
          >
            {collapsed ? 
              <ChevronRight className="h-5 w-5" /> : 
              <>
                <ChevronLeft className="h-5 w-5" />
                <span>Colapsar menú</span>
              </>
            }
          </Button>
        </div>
      )}
    </>
  );
};

export default SidebarFooter;
