
import React from "react";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OrderMonitor: React.FC = () => {
  return (
    <SidebarLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Monitor de pedidos</h1>
        <p className="text-muted-foreground">
          Gestiona y monitoriza todos los pedidos en tiempo real.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Distribuidora TaskFlow Manager</CardTitle>
            <CardDescription>
              Sistema de gestión de pedidos para distribuidoras
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Aquí se integrará la funcionalidad completa del proyecto distribuidora-taskflow-manager.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Para completar la integración, necesitarás importar los componentes específicos 
              del proyecto distribuidora-taskflow-manager y adaptarlos a la estructura actual.
            </p>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default OrderMonitor;
