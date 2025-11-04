
import OrdersChart from "./OrdersChart";

// Updated order status data with all the states
const orderStatus = [
  { name: "Sin asignar", value: 12, color: "#d1d5db" }, // Gray
  { name: "Surtiendose", value: 18, color: "#1a70d0" }, // Dilopsan blue
  { name: "Empacandose", value: 15, color: "#F59E0B" }, // Warning orange
  { name: "Terminado", value: 20, color: "#4CAF50" },   // Success green
  { name: "Facturado", value: 10, color: "#2e4b78" },   // Dilopsan navy
];

const OrderStatusSection = () => {
  return (
    <OrdersChart 
      title="Estado de Pedidos"
      subtitle="Distribución actual"
      data={orderStatus}
    />
  );
};

export default OrderStatusSection;
