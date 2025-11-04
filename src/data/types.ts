
export interface ClientData {
  id: string;
  name: string;
  purchases: number;
  lastPurchaseDate: string;
  // Add the missing properties
  registerDate?: string;
  purchaseTrend: number;
  isCredit: boolean;
  profit: number;
  monthlyOrders: number;
  shippingCost: number;
  code: string; // 4-digit code field
  creditStatus?: "al corriente" | "adeudo" | "vencido"; // Credit status
  purchasesOffers?: boolean; // Whether client purchases offers
  returns?: number; // Number of returns
  orders?: PurchaseOrder[]; // Purchase history
  
  // New fields
  contactName?: string; // Contact name (may be different from registered name)
  contactPhone?: string; // Contact phone number
  route?: "Mazatlán" | "Costa Rica / El Dorado" | "Guasave" | "Ruta local" | "Recoge en Dilopsan"; // Client's delivery route
  notes?: string; // Notes/observations about the client
  
  // Customer acquisition data
  acquisitionSource?: "traditional" | "facebook" | "instagram" | "google" | "referral" | "tradicional";
  cac?: number; // Customer Acquisition Cost
  ltv?: number; // Lifetime Value
  ltv_timeframe?: number; // LTV timeframe in months (max 18)
}

export interface PurchaseOrder {
  date: string;
  orderNumber: string; // 8-digit order number
  amount: number;
  profit: number;
  commission: number;
  shippingCost: number;
  
  // Nuevos campos
  time?: string; // Hora del pedido (formato AM/PM)
  courierName?: string; // Nombre de paquetería
  trackingNumber?: string; // Número de guía (12 dígitos)
  shippingDate?: string; // Fecha de envío
  packages?: number; // Número de bultos
  documentNumber?: string; // Folio de remisión o factura
  documentDate?: string; // Fecha del documento
  documentTime?: string; // Hora del documento
  orderStatus?: "Preparando" | "Empacando" | "Enviado" | "Entregado" | "Cancelado"; // Estatus del pedido
  paymentStatus?: "Pagado" | "Abonado" | "Adeudo"; // Estatus del pago
  deliveryType?: "Ciudad" | "Ruta" | "Paquetería" | "Recoge cliente"; // Tipo de entrega
  shippingAddress?: string; // Dirección de envío
  recipientPhone?: string; // Teléfono del destinatario
}

export interface PromoSale {
  id: string;
  type: "remate" | "relampago" | "preventa" | "mejor-precio" | "ofertas";
  name: string;
  count: number;
  source: "web" | "erp";
}

export interface VendorData {
  id: string;
  name: string;
  sales: number;
  orders: number;
  trend: number;
  totalClients: number;
  activeClients: number;
  webOrders: number;
  erpOrders: number;
  avatar: string;
  profit: number;
  commission: number;
  clients: ClientData[];
  promoSales?: PromoSale[];
}
