
import { VendorData } from '../../types';
import { marcoRiveraClients } from './marcoRivera/clients';
import { marcoRiveraPromoSales } from './marcoRivera/promoSales';

export const marcoRiveraData: VendorData = { 
  id: "5", 
  name: "Marco Antonio Rivera", 
  sales: 28900, 
  orders: 14, 
  trend: 4,
  totalClients: 45,
  activeClients: 24,
  webOrders: 6,
  erpOrders: 8,
  avatar: "MR",
  profit: 6647,
  commission: 1734,
  clients: marcoRiveraClients,
  promoSales: marcoRiveraPromoSales
};
