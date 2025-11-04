
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarLogo from "./SidebarLogo";
import NavLinks from "./NavLinks";
import SidebarFooter from "./SidebarFooter";

interface MobileSidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ children, isOpen, setIsOpen }) => {
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="h-16 border-b border-sidebar-border flex items-center px-4 bg-sidebar">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-sidebar w-[250px]">
            <div className="flex flex-col h-full">
              <SidebarLogo collapsed={false} />
              <NavLinks collapsed={false} isMobile={true} setIsOpen={setIsOpen} />
              <SidebarFooter 
                collapsed={false} 
                isMobile={true} 
                toggleSidebar={toggleSidebar}
                setIsOpen={setIsOpen}
              />
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex justify-center flex-1">
          <img 
            src="/lovable-uploads/6d9882ff-acd8-41db-86ac-61d87923a5aa.png" 
            alt="Dilopsan Logo" 
            className="h-8"
          />
        </div>
      </header>
      <main className="flex-1 overflow-auto bg-background">
        <div className="p-3 sm:p-4 md:p-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MobileSidebar;
