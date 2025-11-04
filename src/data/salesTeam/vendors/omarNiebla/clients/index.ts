
import { ClientData } from '@/data/types';
import { ferreteriaDelCentroData } from './ferreteriaDelCentro';
import { materialesUniversoData } from './materialesUniverso';
import { construccionesElAlamoData } from './construccionesElAlamo';
import { ferreteriaIndustrialONData } from './ferreteriaIndustrialON';

// Export all clients as an array
export const omarNieblaClients: ClientData[] = [
  ferreteriaDelCentroData,
  materialesUniversoData,
  construccionesElAlamoData,
  ferreteriaIndustrialONData
];
