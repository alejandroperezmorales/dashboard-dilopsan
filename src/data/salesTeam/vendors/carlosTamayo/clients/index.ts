
import { ClientData } from '@/data/types';
import { herramientasDelSurData } from './herramientasDelSur';
import { constructorExpressData } from './constructorExpress';
import { materialesRodriguezData } from './materialesRodriguez';
import { ferreteriaIndustrialCTData } from './ferreteriaIndustrialCT';

// Export all clients as an array
export const carlosTamayoClients: ClientData[] = [
  herramientasDelSurData,
  constructorExpressData,
  materialesRodriguezData,
  ferreteriaIndustrialCTData
];
