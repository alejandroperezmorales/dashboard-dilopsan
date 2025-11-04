
import { VendorData } from '../../types';

export const magdaNunezData: VendorData = { 
  id: "10", 
  name: "Magda Nuñez", 
  sales: 13900, 
  orders: 6, 
  trend: 1,
  totalClients: 25,
  activeClients: 12,
  webOrders: 4,
  erpOrders: 2,
  avatar: "MN",
  profit: 3197,
  commission: 834,
  clients: [
    { 
      id: "c38", 
      name: "Ferretería El Martillo", 
      purchases: 2900, 
      lastPurchaseDate: "2023-06-09",
      registerDate: "2023-03-18",
      purchaseTrend: 1,
      isCredit: false,
      profit: 580,
      monthlyOrders: 2,
      shippingCost: 100,
      code: "1001",
      purchasesOffers: false,
      returns: 0,
      acquisitionSource: "facebook",
      cac: 950,
      ltv: 2900,
      ltv_timeframe: 3,
      orders: [
        {
          date: "2023-06-09",
          orderNumber: "156789",
          amount: 1700,
          profit: 340,
          commission: 204,
          shippingCost: 60
        },
        {
          date: "2023-05-25",
          orderNumber: "155432",
          amount: 1200,
          profit: 240,
          commission: 144,
          shippingCost: 40
        }
      ]
    },
    { 
      id: "c39", 
      name: "Materiales Vanguardia", 
      purchases: 3500, 
      lastPurchaseDate: "2023-06-06",
      registerDate: "2023-02-20",
      purchaseTrend: 0,
      isCredit: true,
      profit: 700,
      monthlyOrders: 2,
      shippingCost: 120,
      code: "1002",
      purchasesOffers: true,
      returns: 1,
      creditStatus: "al corriente",
      acquisitionSource: "instagram",
      cac: 1200,
      ltv: 3500,
      ltv_timeframe: 4,
      orders: [
        {
          date: "2023-06-06",
          orderNumber: "156750",
          amount: 2000,
          profit: 400,
          commission: 240,
          shippingCost: 70
        },
        {
          date: "2023-05-20",
          orderNumber: "155400",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 50
        },
        {
          date: "2023-04-28",
          orderNumber: "154800",
          amount: 1300,
          profit: 260,
          commission: 156,
          shippingCost: 45
        }
      ]
    },
    { 
      id: "c40", 
      name: "Construcciones Del Sur", 
      purchases: 3800, 
      lastPurchaseDate: "2023-06-02",
      registerDate: "2022-10-25",
      purchaseTrend: -1,
      isCredit: true,
      profit: 760,
      monthlyOrders: 2,
      shippingCost: 130,
      code: "1003",
      purchasesOffers: false,
      returns: 0,
      creditStatus: "adeudo",
      acquisitionSource: "facebook",
      cac: 1050,
      ltv: 8200,
      ltv_timeframe: 8,
      orders: [
        {
          date: "2023-06-02",
          orderNumber: "156700",
          amount: 2200,
          profit: 440,
          commission: 264,
          shippingCost: 80
        },
        {
          date: "2023-05-15",
          orderNumber: "155300",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 50
        }
      ]
    },
    { 
      id: "c41", 
      name: "Ferretería Metropolitana", 
      purchases: 3700, 
      lastPurchaseDate: "2023-05-28",
      registerDate: "2022-11-30",
      purchaseTrend: -2,
      isCredit: false,
      profit: 740,
      monthlyOrders: 2,
      shippingCost: 120,
      code: "1004",
      purchasesOffers: true,
      returns: 2,
      acquisitionSource: "instagram",
      cac: 4200,
      ltv: 3700,
      ltv_timeframe: 6,
      orders: [
        {
          date: "2023-05-28",
          orderNumber: "156500",
          amount: 2100,
          profit: 420,
          commission: 252,
          shippingCost: 70
        },
        {
          date: "2023-05-10",
          orderNumber: "155100",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 50
        }
      ]
    },
    { 
      id: "c49", 
      name: "Ferretería Los Pinos", 
      purchases: 3200, 
      lastPurchaseDate: "2023-06-07",
      registerDate: "2023-05-28",
      purchaseTrend: 2,
      isCredit: false,
      profit: 640,
      monthlyOrders: 2,
      shippingCost: 110,
      code: "1005",
      purchasesOffers: false,
      returns: 0,
      acquisitionSource: "facebook",
      cac: 800,
      ltv: 1800,
      ltv_timeframe: 1,
      orders: [
        {
          date: "2023-06-07",
          orderNumber: "156780",
          amount: 1900,
          profit: 380,
          commission: 228,
          shippingCost: 65
        },
        {
          date: "2023-05-22",
          orderNumber: "155420",
          amount: 1300,
          profit: 260,
          commission: 156,
          shippingCost: 45
        }
      ]
    },
    { 
      id: "c50", 
      name: "Constructora Águila", 
      purchases: 4100, 
      lastPurchaseDate: "2023-04-10",
      registerDate: "2022-09-15",
      purchaseTrend: -1,
      isCredit: true,
      profit: 820,
      monthlyOrders: 3,
      shippingCost: 140,
      code: "1006",
      purchasesOffers: true,
      returns: 1,
      creditStatus: "vencido",
      acquisitionSource: "instagram",
      cac: 900,
      ltv: 6300,
      ltv_timeframe: 7,
      orders: [
        {
          date: "2023-04-10",
          orderNumber: "154100",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 60
        },
        {
          date: "2023-03-25",
          orderNumber: "153500",
          amount: 1400,
          profit: 280,
          commission: 168,
          shippingCost: 50
        },
        {
          date: "2023-03-08",
          orderNumber: "153000",
          amount: 900,
          profit: 180,
          commission: 108,
          shippingCost: 30
        }
      ]
    }
  ],
  promoSales: [
    { id: "p50", type: "preventa", name: "Kit de Herramientas", count: 10, source: "web" },
    { id: "p51", type: "mejor-precio", name: "Generador Eléctrico", count: 1, source: "erp" },
    { id: "p52", type: "ofertas", name: "Lijadora Orbital", count: 5, source: "web" },
    { id: "p53", type: "remate", name: "Caja de Herramientas", count: 7, source: "web" },
    { id: "p54", type: "relampago", name: "Multímetro Digital", count: 3, source: "erp" },
    { id: "p55", type: "preventa", name: "Sierra de Mesa", count: 2, source: "web" }
  ]
};
