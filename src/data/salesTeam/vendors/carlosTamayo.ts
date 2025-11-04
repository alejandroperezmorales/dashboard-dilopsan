
import { VendorData } from '../../types';
import { carlosTamayoClients } from './carlosTamayo/clients';
import { carlosTamayoPromoSales } from './carlosTamayo/promoSales';

export const carlosTamayoData: VendorData = { 
  id: "2", 
  name: "Carlos Tamayo", 
  sales: 19800, 
  orders: 9, 
  trend: 3,
  totalClients: 37,
  activeClients: 18,
  webOrders: 4,
  erpOrders: 5,
  avatar: "CT",
  profit: 4554,
  commission: 1188,
  clients: carlosTamayoClients,
  promoSales: carlosTamayoPromoSales
};
