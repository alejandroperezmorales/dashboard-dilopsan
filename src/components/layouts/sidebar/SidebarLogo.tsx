
import React from "react";

interface SidebarLogoProps {
  collapsed: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ collapsed }) => {
  return (
    <div className="p-4 flex items-center h-16 border-b border-sidebar-border">
      <div className="flex items-center gap-2 overflow-hidden">
        {collapsed ? (
          <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
            <span className="text-white font-bold text-xs">D</span>
          </div>
        ) : (
          <img 
            src="/lovable-uploads/6d9882ff-acd8-41db-86ac-61d87923a5aa.png" 
            alt="Dilopsan Logo" 
            className="h-8"
          />
        )}
      </div>
    </div>
  );
};

export default SidebarLogo;
