
import { VendorData } from '../../types';
import { carlosMezaClients } from './carlosMeza/clients';
import { carlosMezaPromoSales } from './carlosMeza/promoSales';

export const carlosMezaData: VendorData = { 
  id: "1", 
  name: "Carlos Meza", 
  sales: 25400, 
  orders: 12, 
  trend: 5,
  totalClients: 48,
  activeClients: 22,
  webOrders: 5,
  erpOrders: 7,
  avatar: "CM",
  profit: 5842,
  commission: 1524,
  clients: carlosMezaClients,
  promoSales: carlosMezaPromoSales
};
