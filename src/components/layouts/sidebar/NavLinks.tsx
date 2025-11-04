
import React from "react";
import { Home, Users, Package, MonitorPlay, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  collapsed: boolean;
  isMobile: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ collapsed, isMobile, setIsOpen }) => {
  const location = useLocation();

  return (
    <nav className="flex-1 p-2 space-y-1">
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
          collapsed ? "justify-center px-2" : "px-3",
          location.pathname === "/" && "bg-primary/10 text-primary"
        )}
        asChild
      >
        <Link to="/" onClick={() => isMobile && setIsOpen && setIsOpen(false)}>
          <Home className="h-5 w-5" />
          <span className={cn("transition-opacity", 
            collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
          )}>Ventas</span>
        </Link>
      </Button>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
          collapsed ? "justify-center px-2" : "px-3",
          location.pathname.includes("/vendors") && "bg-primary/10 text-primary"
        )}
        asChild
      >
        <Link to="/vendors" onClick={() => isMobile && setIsOpen && setIsOpen(false)}>
          <Users className="h-5 w-5" />
          <span className={cn("transition-opacity", 
            collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
          )}>Vendedores</span>
        </Link>
      </Button>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
          collapsed ? "justify-center px-2" : "px-3",
          location.pathname.includes("/order-monitor") && "bg-primary/10 text-primary"
        )}
        asChild
      >
        <Link to="/order-monitor" onClick={() => isMobile && setIsOpen && setIsOpen(false)}>
          <MonitorPlay className="h-5 w-5" />
          <span className={cn("transition-opacity", 
            collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
          )}>Monitor de pedidos</span>
        </Link>
      </Button>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
          collapsed ? "justify-center px-2" : "px-3",
          location.pathname.includes("/campaigns") && "bg-primary/10 text-primary"
        )}
        asChild
      >
        <Link to="/campaigns" onClick={() => isMobile && setIsOpen && setIsOpen(false)}>
          <TrendingUp className="h-5 w-5" />
          <span className={cn("transition-opacity", 
            collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
          )}>Campañas</span>
        </Link>
      </Button>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "w-full justify-start gap-3 font-normal text-sidebar-foreground hover:bg-sidebar-border hover:text-primary", 
          collapsed ? "justify-center px-2" : "px-3"
        )}
        asChild
      >
        <Link to="#" onClick={() => isMobile && setIsOpen && setIsOpen(false)}>
          <Package className="h-5 w-5" />
          <span className={cn("transition-opacity", 
            collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
          )}>Pedidos</span>
        </Link>
      </Button>
    </nav>
  );
};

export default NavLinks;
