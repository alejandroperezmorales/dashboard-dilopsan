
import { ClientData } from '@/data/types';
import { grupoConstructoresUnidosData } from './grupoConstructoresUnidos';
import { ferreteriaRivieraData } from './ferreteriaRiviera';
import { materialesAvanteData } from './materialesAvante';
import { construccionesModernasMRData } from './construccionesModernasMR';

// Export all clients as an array
export const marcoRiveraClients: ClientData[] = [
  grupoConstructoresUnidosData,
  ferreteriaRivieraData,
  materialesAvanteData,
  construccionesModernasMRData
];
