
import { VendorData } from '../../types';

export const arelyLopezData: VendorData = { 
  id: "8", 
  name: "Arely López", 
  sales: 15200, 
  orders: 7, 
  trend: 2,
  totalClients: 28,
  activeClients: 14,
  webOrders: 5,
  erpOrders: 2,
  avatar: "AL",
  profit: 3496,
  commission: 912,
  clients: [
    { 
      id: "c30", 
      name: "Ferretería Del Valle", 
      purchases: 3200, 
      lastPurchaseDate: "2023-06-10",
      registerDate: "2023-01-20",
      purchaseTrend: 1,
      isCredit: false,
      profit: 640,
      monthlyOrders: 2,
      shippingCost: 120,
      code: "8001",
      purchasesOffers: true,
      returns: 0,
      creditStatus: "al corriente",
      acquisitionSource: "facebook",
      cac: 850,
      ltv: 2800,
      ltv_timeframe: 5,
      orders: [
        {
          date: "2023-06-10",
          orderNumber: "167890",
          amount: 1700,
          profit: 340,
          commission: 204,
          shippingCost: 65
        },
        {
          date: "2023-05-25",
          orderNumber: "167500",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 55
        }
      ]
    },
    { 
      id: "c31", 
      name: "Materiales Express", 
      purchases: 3600, 
      lastPurchaseDate: "2023-06-07",
      registerDate: "2023-05-15",
      purchaseTrend: 2,
      isCredit: true,
      profit: 720,
      monthlyOrders: 2,
      shippingCost: 130,
      code: "8002",
      purchasesOffers: false,
      returns: 1,
      creditStatus: "adeudo",
      acquisitionSource: "facebook",
      cac: 700,
      ltv: 3200,
      ltv_timeframe: 1,
      orders: [
        {
          date: "2023-06-07",
          orderNumber: "167850",
          amount: 2100,
          profit: 420,
          commission: 252,
          shippingCost: 75
        },
        {
          date: "2023-05-20",
          orderNumber: "167400",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 55
        }
      ]
    },
    { 
      id: "c32", 
      name: "Construcciones Jiménez", 
      purchases: 4100, 
      lastPurchaseDate: "2023-06-03",
      registerDate: "2022-11-28",
      purchaseTrend: 0,
      isCredit: true,
      profit: 820,
      monthlyOrders: 3,
      shippingCost: 140,
      code: "8003",
      purchasesOffers: true,
      returns: 0,
      creditStatus: "al corriente",
      acquisitionSource: "instagram",
      cac: 1200,
      ltv: 4300,
      ltv_timeframe: 8,
      orders: [
        {
          date: "2023-06-03",
          orderNumber: "167800",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 60
        },
        {
          date: "2023-05-18",
          orderNumber: "167350",
          amount: 1400,
          profit: 280,
          commission: 168,
          shippingCost: 50
        },
        {
          date: "2023-05-02",
          orderNumber: "167100",
          amount: 1100,
          profit: 220,
          commission: 132,
          shippingCost: 30
        }
      ]
    },
    { 
      id: "c33", 
      name: "Ferretería La Central", 
      purchases: 4300, 
      lastPurchaseDate: "2023-05-29",
      registerDate: "2022-10-10",
      purchaseTrend: -1,
      isCredit: false,
      profit: 860,
      monthlyOrders: 3,
      shippingCost: 150,
      code: "8004",
      purchasesOffers: true,
      returns: 2,
      acquisitionSource: "instagram",
      cac: 950,
      ltv: 2800,
      ltv_timeframe: 7,
      orders: [
        {
          date: "2023-05-29",
          orderNumber: "167700",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 70
        },
        {
          date: "2023-05-15",
          orderNumber: "167300",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 55
        },
        {
          date: "2023-05-01",
          orderNumber: "167000",
          amount: 1000,
          profit: 200,
          commission: 120,
          shippingCost: 25
        }
      ]
    },
    { 
      id: "c42", 
      name: "Materiales San José", 
      purchases: 3800, 
      lastPurchaseDate: "2023-06-15",
      registerDate: "2023-05-25",
      purchaseTrend: 3,
      isCredit: true,
      profit: 760,
      monthlyOrders: 2,
      shippingCost: 135,
      code: "8005",
      purchasesOffers: false,
      returns: 0,
      creditStatus: "al corriente",
      acquisitionSource: "facebook",
      cac: 800,
      ltv: 3800,
      ltv_timeframe: 1,
      orders: [
        {
          date: "2023-06-15",
          orderNumber: "167950",
          amount: 2200,
          profit: 440,
          commission: 264,
          shippingCost: 80
        },
        {
          date: "2023-05-30",
          orderNumber: "167750",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 55
        }
      ]
    },
    { 
      id: "c43", 
      name: "Herramientas López", 
      purchases: 2900, 
      lastPurchaseDate: "2023-04-20",
      registerDate: "2022-12-15",
      purchaseTrend: -2,
      isCredit: false,
      profit: 580,
      monthlyOrders: 1,
      shippingCost: 110,
      code: "8006",
      purchasesOffers: false,
      returns: 1,
      acquisitionSource: "instagram",
      cac: 1500,
      ltv: 2900,
      ltv_timeframe: 4,
      orders: [
        {
          date: "2023-04-20",
          orderNumber: "166500",
          amount: 2900,
          profit: 580,
          commission: 348,
          shippingCost: 110
        },
        {
          date: "2023-03-15",
          orderNumber: "165800",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 70
        }
      ]
    },
    { 
      id: "c44", 
      name: "Ferrcons Materiales", 
      purchases: 4500, 
      lastPurchaseDate: "2023-06-08",
      registerDate: "2023-06-01",
      purchaseTrend: 4,
      isCredit: true,
      profit: 900,
      monthlyOrders: 3,
      shippingCost: 160,
      code: "8007",
      purchasesOffers: true,
      returns: 0,
      creditStatus: "al corriente",
      acquisitionSource: "facebook",
      cac: 1000,
      ltv: 4500,
      ltv_timeframe: 1,
      orders: [
        {
          date: "2023-06-08",
          orderNumber: "167900",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 70
        },
        {
          date: "2023-06-03",
          orderNumber: "167800",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 55
        },
        {
          date: "2023-05-25",
          orderNumber: "167600",
          amount: 1200,
          profit: 240,
          commission: 144,
          shippingCost: 35
        }
      ]
    }
  ],
  promoSales: [
    { id: "p38", type: "preventa", name: "Kit de Herramientas", count: 10, source: "web" },
    { id: "p39", type: "mejor-precio", name: "Generador Eléctrico", count: 1, source: "erp" },
    { id: "p40", type: "ofertas", name: "Lijadora Orbital", count: 5, source: "web" },
    { id: "p41", type: "remate", name: "Caja de Herramientas", count: 7, source: "web" },
    { id: "p42", type: "relampago", name: "Multímetro Digital", count: 3, source: "erp" },
    { id: "p43", type: "preventa", name: "Sierra de Mesa", count: 2, source: "web" }
  ]
};
