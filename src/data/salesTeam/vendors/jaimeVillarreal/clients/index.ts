
import { ClientData } from '@/data/types';
import { ferreteriaCentralData } from './ferreteriaCentral';
import { materialesModernosData } from './materialesModernos';
import { construccionesDelPacificoData } from './construccionesDelPacifico';
import { ferreteriaElConstructorData } from './ferreteriaElConstructor';

// Export all clients as an array
export const jaimeVillarrealClients: ClientData[] = [
  ferreteriaCentralData,
  materialesModernosData,
  construccionesDelPacificoData,
  ferreteriaElConstructorData
];
