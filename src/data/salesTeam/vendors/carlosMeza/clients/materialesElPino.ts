
import { ClientData } from '@/data/types';

export const materialesElPinoData: ClientData = { 
  id: "c2", 
  name: "Materiales El Pino", 
  purchases: 7200, 
  lastPurchaseDate: "2023-06-08",
  registerDate: "2022-11-20",
  purchaseTrend: 4,
  isCredit: true,
  profit: 1440,
  monthlyOrders: 5,
  shippingCost: 200,
  code: "1002",
  creditStatus: "al corriente",
  purchasesOffers: true,
  returns: 0,
  contactName: "Miguel Ángel Pino",
  contactPhone: "6686543210",
  route: "Mazatlán",
  notes: "Cliente siempre paga antes de la fecha de vencimiento",
  orders: [
    {
      date: "2023-06-08",
      orderNumber: "123444",
      amount: 2200,
      profit: 440,
      commission: 264,
      shippingCost: 90
    },
    {
      date: "2023-05-25",
      orderNumber: "123100",
      amount: 1800,
      profit: 360,
      commission: 216,
      shippingCost: 75
    },
    {
      date: "2023-05-12",
      orderNumber: "122800",
      amount: 1500,
      profit: 300,
      commission: 180,
      shippingCost: 65
    },
    {
      date: "2023-04-28",
      orderNumber: "122600",
      amount: 1700,
      profit: 340,
      commission: 204,
      shippingCost: 70
    }
  ]
};
