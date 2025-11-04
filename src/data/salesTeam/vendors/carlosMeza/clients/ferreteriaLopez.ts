
import { ClientData } from '@/data/types';

export const ferreteriaLopezData: ClientData = { 
  id: "c1", 
  name: "Ferretería López", 
  purchases: 4300, 
  lastPurchaseDate: "2023-06-10",
  registerDate: "2023-01-15",
  purchaseTrend: 2,
  isCredit: true,
  profit: 860,
  monthlyOrders: 3,
  shippingCost: 150,
  code: "1001",
  creditStatus: "al corriente",
  purchasesOffers: true,
  returns: 1,
  contactName: "Roberto López",
  contactPhone: "6681234567",
  route: "Costa Rica / El Dorado",
  notes: "Cliente tiende a cancelar pedidos por falta de pago",
  orders: [
    {
      date: "2023-06-10",
      orderNumber: "123456",
      amount: 1800,
      profit: 360,
      commission: 216,
      shippingCost: 80
    },
    {
      date: "2023-05-22",
      orderNumber: "123123",
      amount: 1250,
      profit: 250,
      commission: 150,
      shippingCost: 50
    },
    {
      date: "2023-05-05",
      orderNumber: "122980",
      amount: 1250,
      profit: 250,
      commission: 150,
      shippingCost: 20
    },
    {
      date: "2023-04-18",
      orderNumber: "122456",
      amount: 950,
      profit: 190,
      commission: 114,
      shippingCost: 45
    },
    {
      date: "2023-03-30",
      orderNumber: "121678",
      amount: 780,
      profit: 156,
      commission: 93,
      shippingCost: 35
    },
    {
      date: "2023-03-12",
      orderNumber: "120987",
      amount: 1100,
      profit: 220,
      commission: 132,
      shippingCost: 60
    }
  ]
};
