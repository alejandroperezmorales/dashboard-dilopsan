
import { ClientData } from '@/data/types';

export const ferreteriaMartinezData: ClientData = { 
  id: "c4", 
  name: "Ferretería Martínez", 
  purchases: 3800, 
  lastPurchaseDate: "2023-06-02",
  registerDate: "2023-05-05",
  purchaseTrend: 1,
  isCredit: false,
  profit: 760,
  monthlyOrders: 2,
  shippingCost: 120,
  code: "1004",
  purchasesOffers: true,
  returns: 0,
  contactName: "Alejandra Martínez",
  contactPhone: "6689876543",
  route: "Ruta local",
  notes: "Cliente nuevo, interesado en productos de plomería",
  orders: [
    {
      date: "2023-06-02",
      orderNumber: "123350",
      amount: 2200,
      profit: 440,
      commission: 264,
      shippingCost: 70
    },
    {
      date: "2023-05-18",
      orderNumber: "122950",
      amount: 1600,
      profit: 320,
      commission: 192,
      shippingCost: 50
    }
  ]
};
