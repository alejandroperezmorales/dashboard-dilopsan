
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileSidebar from "./sidebar/MobileSidebar";
import DesktopSidebar from "./sidebar/DesktopSidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-collapse sidebar on mobile screens
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Mobile sidebar
  if (isMobile) {
    return (
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </MobileSidebar>
    );
  }

  // Desktop sidebar
  return (
    <DesktopSidebar collapsed={collapsed} toggleSidebar={toggleSidebar}>
      {children}
    </DesktopSidebar>
  );
};

export default SidebarLayout;
