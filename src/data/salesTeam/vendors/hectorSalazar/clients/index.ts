
import { ClientData } from '@/data/types';
import { grupoConstructorDelValleData } from './grupoConstructorDelValle';
import { ferreteriaTorresData } from './ferreteriaTorres';
import { construccionesAvanzadasData } from './construccionesAvanzadas';
import { materialesElRobleData } from './materialesElRoble';

// Export all clients as an array
export const hectorSalazarClients: ClientData[] = [
  grupoConstructorDelValleData,
  ferreteriaTorresData,
  construccionesAvanzadasData,
  materialesElRobleData
];
