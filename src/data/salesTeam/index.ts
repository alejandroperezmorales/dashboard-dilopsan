
import { VendorData } from '../types';
import { carlosMezaData } from './vendors/carlosMeza';
import { carlosTamayoData } from './vendors/carlosTamayo';
import { hectorSalazarData } from './vendors/hectorSalazar';
import { jaimeVillarrealData } from './vendors/jaimeVillarreal';
import { marcoRiveraData } from './vendors/marcoRivera';
import { omarNieblaData } from './vendors/omarNiebla';
import { sinuheGaxiolaData } from './vendors/sinuheGaxiola';

// Combine all sales team vendor data into a single array
export const salesTeamData: VendorData[] = [
  carlosMezaData,
  carlosTamayoData,
  hectorSalazarData,
  jaimeVillarrealData,
  marcoRiveraData,
  omarNieblaData,
  sinuheGaxiolaData
];
