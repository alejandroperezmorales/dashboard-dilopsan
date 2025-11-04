
import { VendorData } from '../../types';
import { jaimeVillarrealClients } from './jaimeVillarreal/clients';
import { jaimeVillarrealPromoSales } from './jaimeVillarreal/promoSales';

export const jaimeVillarrealData: VendorData = { 
  id: "4", 
  name: "Jaime Villarreal", 
  sales: 22600, 
  orders: 11, 
  trend: -2,
  totalClients: 42,
  activeClients: 19,
  webOrders: 4,
  erpOrders: 7,
  avatar: "JV",
  profit: 4972,
  commission: 1356,
  clients: jaimeVillarrealClients,
  promoSales: jaimeVillarrealPromoSales
};
