
import { VendorData } from '../types';
import * as vendors from './vendors';

// Create an array from all vendor exports
export const telemarketingData: VendorData[] = Object.values(vendors);
