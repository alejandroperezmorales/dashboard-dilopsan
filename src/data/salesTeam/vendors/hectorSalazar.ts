
import { VendorData } from '../../types';
import { hectorSalazarClients } from './hectorSalazar/clients';
import { hectorSalazarPromoSales } from './hectorSalazar/promoSales';

export const hectorSalazarData: VendorData = { 
  id: "3", 
  name: "Hector Salazar", 
  sales: 31200, 
  orders: 15, 
  trend: 8,
  totalClients: 52,
  activeClients: 29,
  webOrders: 8,
  erpOrders: 7,
  avatar: "HS",
  profit: 7176,
  commission: 1872,
  clients: hectorSalazarClients,
  promoSales: hectorSalazarPromoSales
};
