
import { VendorData } from '../../types';
import { omarNieblaClients } from './omarNiebla/clients';
import { omarNieblaPromoSales } from './omarNiebla/promoSales';

export const omarNieblaData: VendorData = { 
  id: "6", 
  name: "Omar Niebla", 
  sales: 17500, 
  orders: 8, 
  trend: -1,
  totalClients: 33,
  activeClients: 15,
  webOrders: 2,
  erpOrders: 6,
  avatar: "ON",
  profit: 3850,
  commission: 1050,
  clients: omarNieblaClients,
  promoSales: omarNieblaPromoSales
};
