import { VendorData } from '../../types';

export const keilaSanchezData: VendorData = { 
  id: "9", 
  name: "Keila Sanchez", 
  sales: 18700, 
  orders: 9, 
  trend: 4,
  totalClients: 32,
  activeClients: 17,
  webOrders: 6,
  erpOrders: 3,
  avatar: "KS",
  profit: 4301,
  commission: 1122,
  clients: [
    { 
      id: "c34", 
      name: "Grupo Constructor Hernández", 
      purchases: 5200, 
      lastPurchaseDate: "2023-06-11",
      registerDate: "2022-09-05",
      purchaseTrend: 3,
      isCredit: true,
      profit: 1040,
      monthlyOrders: 4,
      shippingCost: 170,
      code: "9001",
      purchasesOffers: true,
      returns: 1,
      creditStatus: "al corriente",
      contactName: "Fernando Hernández",
      contactPhone: "6681234567",
      route: "Mazatlán",
      notes: "Cliente prioritario, atender con urgencia",
      orders: [
        {
          date: "2023-06-11",
          orderNumber: "187900",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 60
        },
        {
          date: "2023-06-03",
          orderNumber: "187750",
          amount: 1400,
          profit: 280,
          commission: 168,
          shippingCost: 45
        },
        {
          date: "2023-05-22",
          orderNumber: "187500",
          amount: 1200,
          profit: 240,
          commission: 144,
          shippingCost: 35
        },
        {
          date: "2023-05-08",
          orderNumber: "187200",
          amount: 800,
          profit: 160,
          commission: 96,
          shippingCost: 30
        }
      ]
    },
    { 
      id: "c35", 
      name: "Ferretería Construmart", 
      purchases: 4700, 
      lastPurchaseDate: "2023-06-08",
      registerDate: "2023-04-22",
      purchaseTrend: 2,
      isCredit: false,
      profit: 940,
      monthlyOrders: 3,
      shippingCost: 160,
      code: "9002",
      purchasesOffers: true,
      returns: 0,
      contactName: "Laura Méndez",
      contactPhone: "6682345678",
      route: "Ruta local",
      notes: "Prefiere entregas por la tarde",
      orders: [
        {
          date: "2023-06-08",
          orderNumber: "187850",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 60
        },
        {
          date: "2023-05-25",
          orderNumber: "187550",
          amount: 1700,
          profit: 340,
          commission: 204,
          shippingCost: 55
        },
        {
          date: "2023-05-12",
          orderNumber: "187300",
          amount: 1200,
          profit: 240,
          commission: 144,
          shippingCost: 45
        }
      ]
    },
    { 
      id: "c36", 
      name: "Materiales La Cima", 
      purchases: 4500, 
      lastPurchaseDate: "2023-06-04",
      registerDate: "2022-12-15",
      purchaseTrend: 1,
      isCredit: true,
      profit: 900,
      monthlyOrders: 3,
      shippingCost: 150,
      code: "9003",
      purchasesOffers: false,
      returns: 2,
      creditStatus: "adeudo",
      contactName: "Ricardo Montoya",
      contactPhone: "6683456789",
      route: "Costa Rica / El Dorado",
      notes: "Atención con crédito, verificar estatus antes de vender",
      orders: [
        {
          date: "2023-06-04",
          orderNumber: "187800",
          amount: 1900,
          profit: 380,
          commission: 228,
          shippingCost: 65
        },
        {
          date: "2023-05-20",
          orderNumber: "187450",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 55
        },
        {
          date: "2023-05-01",
          orderNumber: "187100",
          amount: 1000,
          profit: 200,
          commission: 120,
          shippingCost: 30
        }
      ]
    },
    { 
      id: "c37", 
      name: "Construcciones Del Centro", 
      purchases: 4300, 
      lastPurchaseDate: "2023-05-30",
      registerDate: "2022-11-10",
      purchaseTrend: 0,
      isCredit: false,
      profit: 860,
      monthlyOrders: 3,
      shippingCost: 140,
      code: "9004",
      purchasesOffers: true,
      returns: 1,
      contactName: "Alejandra Torres",
      contactPhone: "6684567890",
      route: "Guasave",
      notes: "Cliente regular, sin observaciones especiales",
      orders: [
        {
          date: "2023-05-30",
          orderNumber: "187650",
          amount: 1700,
          profit: 340,
          commission: 204,
          shippingCost: 55
        },
        {
          date: "2023-05-15",
          orderNumber: "187350",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 50
        },
        {
          date: "2023-04-28",
          orderNumber: "186900",
          amount: 1100,
          profit: 220,
          commission: 132,
          shippingCost: 35
        }
      ]
    },
    { 
      id: "c45", 
      name: "Materiales Del Norte", 
      purchases: 5800, 
      lastPurchaseDate: "2023-06-12",
      registerDate: "2023-05-30",
      purchaseTrend: 4,
      isCredit: true,
      profit: 1160,
      monthlyOrders: 4,
      shippingCost: 190,
      code: "9005",
      purchasesOffers: true,
      returns: 0,
      creditStatus: "al corriente",
      contactName: "Miguel Arellano",
      contactPhone: "6685678901",
      route: "Mazatlán",
      notes: "Cliente nuevo con alto potencial de compra",
      orders: [
        {
          date: "2023-06-12",
          orderNumber: "187950",
          amount: 1700,
          profit: 340,
          commission: 204,
          shippingCost: 55
        },
        {
          date: "2023-06-05",
          orderNumber: "187800",
          amount: 1500,
          profit: 300,
          commission: 180,
          shippingCost: 50
        },
        {
          date: "2023-05-25",
          orderNumber: "187550",
          amount: 1400,
          profit: 280,
          commission: 168,
          shippingCost: 45
        },
        {
          date: "2023-05-15",
          orderNumber: "187350",
          amount: 1200,
          profit: 240,
          commission: 144,
          shippingCost: 40
        }
      ]
    },
    { 
      id: "c46", 
      name: "Ferretería El Constructor", 
      purchases: 3900, 
      lastPurchaseDate: "2023-04-15",
      registerDate: "2022-10-25",
      purchaseTrend: -1,
      isCredit: false,
      profit: 780,
      monthlyOrders: 2,
      shippingCost: 130,
      code: "9006",
      purchasesOffers: false,
      returns: 3,
      contactName: "José Gutiérrez",
      contactPhone: "6686789012",
      route: "Ruta local",
      notes: "Alto índice de devoluciones, verificar pedidos con cuidado",
      orders: [
        {
          date: "2023-04-15",
          orderNumber: "186500",
          amount: 2100,
          profit: 420,
          commission: 252,
          shippingCost: 70
        },
        {
          date: "2023-03-30",
          orderNumber: "186200",
          amount: 1800,
          profit: 360,
          commission: 216,
          shippingCost: 60
        }
      ]
    },
    { 
      id: "c47", 
      name: "Grupo Ferretero Nacional", 
      purchases: 6100, 
      lastPurchaseDate: "2023-06-09",
      registerDate: "2023-06-01",
      purchaseTrend: 5,
      isCredit: true,
      profit: 1220,
      monthlyOrders: 5,
      shippingCost: 200,
      code: "9007",
      purchasesOffers: true,
      returns: 1,
      creditStatus: "al corriente",
      contactName: "Claudia Morales",
      contactPhone: "6687890123",
      route: "Costa Rica / El Dorado",
      notes: "Cliente nuevo con necesidades especiales de material",
      orders: [
        {
          date: "2023-06-09",
          orderNumber: "187900",
          amount: 1900,
          profit: 380,
          commission: 228,
          shippingCost: 65
        },
        {
          date: "2023-06-02",
          orderNumber: "187750",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 55
        },
        {
          date: "2023-05-25",
          orderNumber: "187550",
          amount: 1300,
          profit: 260,
          commission: 156,
          shippingCost: 45
        },
        {
          date: "2023-05-18",
          orderNumber: "187400",
          amount: 900,
          profit: 180,
          commission: 108,
          shippingCost: 25
        },
        {
          date: "2023-05-10",
          orderNumber: "187200",
          amount: 400,
          profit: 80,
          commission: 48,
          shippingCost: 10
        }
      ]
    },
    { 
      id: "c48", 
      name: "Constructora Moderna", 
      purchases: 4200, 
      lastPurchaseDate: "2023-05-20",
      registerDate: "2022-11-05",
      purchaseTrend: -2,
      isCredit: true,
      profit: 840,
      monthlyOrders: 3,
      shippingCost: 145,
      code: "9008",
      purchasesOffers: false,
      returns: 2,
      creditStatus: "vencido",
      contactName: "Roberto Sandoval",
      contactPhone: "6688901234",
      route: "Guasave",
      notes: "Crédito vencido, sólo vender con autorización",
      orders: [
        {
          date: "2023-05-20",
          orderNumber: "187450",
          amount: 1600,
          profit: 320,
          commission: 192,
          shippingCost: 55
        },
        {
          date: "2023-05-08",
          orderNumber: "187150",
          amount: 1400,
          profit: 280,
          commission: 168,
          shippingCost: 50
        },
        {
          date: "2023-04-25",
          orderNumber: "186800",
          amount: 1200,
          profit: 240,
          commission: 144,
          shippingCost: 40
        }
      ]
    }
  ],
  promoSales: [
    { id: "p44", type: "preventa", name: "Kit de Herramientas", count: 10, source: "web" },
    { id: "p45", type: "mejor-precio", name: "Generador Eléctrico", count: 1, source: "erp" },
    { id: "p46", type: "ofertas", name: "Lijadora Orbital", count: 5, source: "web" },
    { id: "p47", type: "remate", name: "Caja de Herramientas", count: 7, source: "web" },
    { id: "p48", type: "relampago", name: "Multímetro Digital", count: 3, source: "erp" },
    { id: "p49", type: "preventa", name: "Sierra de Mesa", count: 2, source: "web" }
  ]
};
