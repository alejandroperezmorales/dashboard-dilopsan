export interface CampaignProduct {
  codigoProducto: string;
  descripcion: string;
  totalPedidos: number;
  totalUnidadesVendidas: number;
  promedioDiario: number;
  totalUnidadesCarrito: number;
  startDate: string;
  expireDate: string;
  diasOferta: number;
  clicks: number;
}

export interface Campaign {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  products: CampaignProduct[];
  totalClicks: number;
  totalPedidos: number;
  totalUnidadesVendidas: number;
}

// Mock data con múltiples tipos de campañas y canales
export const campaignsData: Campaign[] = [
  {
    id: "1",
    name: "Oferta Relámpago",
    type: "WhatsApp",
    startDate: "2025-07-18",
    endDate: "2025-07-23",
    totalClicks: 31,
    totalPedidos: 14,
    totalUnidadesVendidas: 992,
    products: [
      {
        codigoProducto: "11093",
        descripcion: "DIONIXOL C/1 TAB. 100MG.",
        totalPedidos: 6,
        totalUnidadesVendidas: 312,
        promedioDiario: 312,
        totalUnidadesCarrito: 0,
        startDate: "2025-07-22 09:00:00",
        expireDate: "2025-07-23 09:00:00",
        diasOferta: 1,
        clicks: 16
      },
      {
        codigoProducto: "360220",
        descripcion: "DOLVER C/20 TABS. 600 MG.",
        totalPedidos: 2,
        totalUnidadesVendidas: 0,
        promedioDiario: 0,
        totalUnidadesCarrito: 6,
        startDate: "2025-07-22 09:00:00",
        expireDate: "2025-07-23 09:00:00",
        diasOferta: 1,
        clicks: 15
      },
      {
        codigoProducto: "660801",
        descripcion: "BIOMESINA C/10 TABLETAS 10MG",
        totalPedidos: 4,
        totalUnidadesVendidas: 495,
        promedioDiario: 495,
        totalUnidadesCarrito: 0,
        startDate: "2025-07-18 08:00:00",
        expireDate: "2025-07-19 08:00:00",
        diasOferta: 1,
        clicks: 0
      },
      {
        codigoProducto: "600210",
        descripcion: "WAMINDEL INFANTIL SOL. 120 ML.",
        totalPedidos: 2,
        totalUnidadesVendidas: 185,
        promedioDiario: 185,
        totalUnidadesCarrito: 0,
        startDate: "2025-07-18 08:00:00",
        expireDate: "2025-07-19 08:00:00",
        diasOferta: 1,
        clicks: 0
      }
    ]
  },
  {
    id: "2",
    name: "Ofertas Verdes - Julio",
    type: "Instagram",
    startDate: "2025-07-15",
    endDate: "2025-07-30",
    totalClicks: 156,
    totalPedidos: 42,
    totalUnidadesVendidas: 1248,
    products: [
      {
        codigoProducto: "20045",
        descripcion: "ACETAMINOFÉN 500MG C/10 TABS",
        totalPedidos: 18,
        totalUnidadesVendidas: 540,
        promedioDiario: 120,
        totalUnidadesCarrito: 12,
        startDate: "2025-07-15 10:00:00",
        expireDate: "2025-07-30 10:00:00",
        diasOferta: 15,
        clicks: 89
      },
      {
        codigoProducto: "30128",
        descripcion: "IBUPROFENO 400MG C/20 CAPS",
        totalPedidos: 24,
        totalUnidadesVendidas: 708,
        promedioDiario: 95,
        totalUnidadesCarrito: 8,
        startDate: "2025-07-15 10:00:00",
        expireDate: "2025-07-30 10:00:00",
        diasOferta: 15,
        clicks: 67
      }
    ]
  },
  {
    id: "3",
    name: "Remate Fin de Mes",
    type: "Facebook",
    startDate: "2025-07-25",
    endDate: "2025-07-31",
    totalClicks: 234,
    totalPedidos: 67,
    totalUnidadesVendidas: 1890,
    products: [
      {
        codigoProducto: "40567",
        descripcion: "AMOXICILINA 500MG C/21 CAPS",
        totalPedidos: 35,
        totalUnidadesVendidas: 1050,
        promedioDiario: 180,
        totalUnidadesCarrito: 24,
        startDate: "2025-07-25 08:00:00",
        expireDate: "2025-07-31 23:59:00",
        diasOferta: 6,
        clicks: 142
      },
      {
        codigoProducto: "50234",
        descripcion: "VITAMINA C 1000MG C/30 TABS",
        totalPedidos: 32,
        totalUnidadesVendidas: 840,
        promedioDiario: 65,
        totalUnidadesCarrito: 15,
        startDate: "2025-07-25 08:00:00",
        expireDate: "2025-07-31 23:59:00",
        diasOferta: 6,
        clicks: 92
      }
    ]
  },
  {
    id: "4",
    name: "Preventa Agosto",
    type: "WhatsApp",
    startDate: "2025-07-20",
    endDate: "2025-08-05",
    totalClicks: 98,
    totalPedidos: 28,
    totalUnidadesVendidas: 672,
    products: [
      {
        codigoProducto: "60789",
        descripcion: "PROTECTOR SOLAR FPS 60 200ML",
        totalPedidos: 16,
        totalUnidadesVendidas: 384,
        promedioDiario: 45,
        totalUnidadesCarrito: 18,
        startDate: "2025-07-20 09:00:00",
        expireDate: "2025-08-05 18:00:00",
        diasOferta: 16,
        clicks: 58
      },
      {
        codigoProducto: "70123",
        descripcion: "SUERO HIDRATANTE 500ML",
        totalPedidos: 12,
        totalUnidadesVendidas: 288,
        promedioDiario: 32,
        totalUnidadesCarrito: 9,
        startDate: "2025-07-20 09:00:00",
        expireDate: "2025-08-05 18:00:00",
        diasOferta: 16,
        clicks: 40
      }
    ]
  },
  {
    id: "5",
    name: "Ofertas Verdes - Instagram Stories",
    type: "Instagram",
    startDate: "2025-07-22",
    endDate: "2025-07-24",
    totalClicks: 87,
    totalPedidos: 19,
    totalUnidadesVendidas: 456,
    products: [
      {
        codigoProducto: "80456",
        descripcion: "MULTIVITAMÍNICO ADULTO C/60 CAPS",
        totalPedidos: 19,
        totalUnidadesVendidas: 456,
        promedioDiario: 85,
        totalUnidadesCarrito: 6,
        startDate: "2025-07-22 12:00:00",
        expireDate: "2025-07-24 12:00:00",
        diasOferta: 2,
        clicks: 87
      }
    ]
  }
];