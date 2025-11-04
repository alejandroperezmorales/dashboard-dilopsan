
import { ClientData } from '@/data/types';

export const materialesLaCumbreData: ClientData = { 
  id: "c5", 
  name: "Materiales La Cumbre", 
  purchases: 3700, 
  lastPurchaseDate: "2023-05-28",
  registerDate: "2022-12-18",
  purchaseTrend: 0,
  isCredit: true,
  profit: 740,
  monthlyOrders: 1,
  shippingCost: 130,
  code: "1005",
  creditStatus: "adeudo",
  purchasesOffers: false,
  returns: 1,
  contactName: "Ricardo Gómez",
  contactPhone: "6684567890",
  route: "Recoge en Dilopsan",
  notes: "Importante revisar historial de pagos antes de aceptar nuevos pedidos",
  orders: [
    {
      date: "2023-05-28",
      orderNumber: "123200",
      amount: 3700,
      profit: 740,
      commission: 444,
      shippingCost: 130
    },
    {
      date: "2023-04-15",
      orderNumber: "122500",
      amount: 2900,
      profit: 580,
      commission: 348,
      shippingCost: 110
    },
    {
      date: "2023-03-20",
      orderNumber: "121800",
      amount: 1800,
      profit: 360,
      commission: 216,
      shippingCost: 90
    }
  ]
};
