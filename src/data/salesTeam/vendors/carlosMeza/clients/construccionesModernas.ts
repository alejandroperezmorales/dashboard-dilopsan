
import { ClientData } from '@/data/types';

export const construccionesModernasData: ClientData = { 
  id: "c3", 
  name: "Construcciones Modernas", 
  purchases: 6400, 
  lastPurchaseDate: "2023-06-05",
  registerDate: "2022-09-10",
  purchaseTrend: -1,
  isCredit: false,
  profit: 1280,
  monthlyOrders: 2,
  shippingCost: 180,
  code: "1003",
  purchasesOffers: false,
  returns: 2,
  contactName: "Fernando Sánchez",
  contactPhone: "6682345678",
  route: "Guasave",
  notes: "Requiere factura en cada compra, enviar por correo",
  orders: [
    {
      date: "2023-06-05",
      orderNumber: "123410",
      amount: 3800,
      profit: 760,
      commission: 456,
      shippingCost: 120
    },
    {
      date: "2023-05-15",
      orderNumber: "122900",
      amount: 2600,
      profit: 520,
      commission: 312,
      shippingCost: 60
    }
  ]
};
