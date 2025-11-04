
import React from "react";
import { cn } from "@/lib/utils";
import SidebarLogo from "./SidebarLogo";
import NavLinks from "./NavLinks";
import SidebarFooter from "./SidebarFooter";

interface DesktopSidebarProps {
  children: React.ReactNode;
  collapsed: boolean;
  toggleSidebar: () => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ 
  children, 
  collapsed, 
  toggleSidebar 
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col",
          collapsed ? "w-[70px]" : "w-[250px]"
        )}
      >
        <SidebarLogo collapsed={collapsed} />
        <NavLinks collapsed={collapsed} isMobile={false} />
        <SidebarFooter 
          collapsed={collapsed} 
          isMobile={false} 
          toggleSidebar={toggleSidebar}
        />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-background">
        <div className="p-4 sm:p-5 md:p-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DesktopSidebar;
