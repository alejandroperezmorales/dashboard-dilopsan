
import { VendorData } from '../../types';
import { sinuheGaxiolaClients } from './sinuheGaxiola/clients';
import { sinuheGaxiolaPromoSales } from './sinuheGaxiola/promoSales';

export const sinuheGaxiolaData: VendorData = { 
  id: "7", 
  name: "Sinuhe Gaxiola", 
  sales: 33400, 
  orders: 16, 
  trend: 9,
  totalClients: 58,
  activeClients: 31,
  webOrders: 9,
  erpOrders: 7,
  avatar: "SG",
  profit: 7682,
  commission: 2004,
  clients: sinuheGaxiolaClients,
  promoSales: sinuheGaxiolaPromoSales
};
