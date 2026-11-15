import { FireObservation, DayActivity } from '../types';

export const SATELLITE_DATA = [
  { name: 'Terra (MODIS)', value: 1915, color: '#8B5CF6', short: 'Terra' },
  { name: 'Aqua (MODIS)', value: 2298, color: '#3B82F6', short: 'Aqua' },
  { name: 'S-NPP (VIIRS)', value: 2808, color: '#06B6D4', short: 'SNPP' },
  { name: 'NOAA-20 (VIIRS)', value: 3191, color: '#F97316', short: 'N20' },
  { name: 'NOAA-21 (VIIRS)', value: 2552, color: '#F43F5E', short: 'N21' },
];

export const TOTAL_OBSERVATIONS = 12764;

export const SELECTED_OBSERVATION: FireObservation = {
  id: 'obs-main-001',
  satellite: 'VIIRS (N20)',
  satelliteShort: 'NOAA-20',
  dateTime: 'Jan 14, 2025, 10:24 UTC',
  location: '17.842° N, 78.492° E',
  lat: 17.842,
  lng: 78.492,
  confidence: 'High',
  confidenceVal: 92,
  frp: 48.6,
};

// Realistic distribution of active fire clusters across South Asia & Indochina
export const MOCK_FIRE_OBSERVATIONS: FireObservation[] = [
  SELECTED_OBSERVATION,
  // India - Telangana / Andhra Pradesh / Maharashtra
  { id: 'obs-2', satellite: 'VIIRS (N20)', satelliteShort: 'NOAA-20', dateTime: 'Jan 14, 2025, 10:23 UTC', location: '18.120° N, 78.850° E', lat: 18.12, lng: 78.85, confidence: 'High', confidenceVal: 88, frp: 52.1 },
  { id: 'obs-3', satellite: 'VIIRS (SNPP)', satelliteShort: 'S-NPP', dateTime: 'Jan 14, 2025, 08:15 UTC', location: '17.450° N, 78.120° E', lat: 17.45, lng: 78.12, confidence: 'High', confidenceVal: 84, frp: 39.4 },
  { id: 'obs-4', satellite: 'MODIS (Aqua)', satelliteShort: 'Aqua', dateTime: 'Jan 14, 2025, 07:40 UTC', location: '16.920° N, 79.210° E', lat: 16.92, lng: 79.21, confidence: 'Medium', confidenceVal: 65, frp: 28.0 },
  { id: 'obs-5', satellite: 'VIIRS (N21)', satelliteShort: 'NOAA-21', dateTime: 'Jan 14, 2025, 09:50 UTC', location: '19.240° N, 77.850° E', lat: 19.24, lng: 77.85, confidence: 'High', confidenceVal: 91, frp: 64.2 },
  { id: 'obs-6', satellite: 'MODIS (Terra)', satelliteShort: 'Terra', dateTime: 'Jan 14, 2025, 05:30 UTC', location: '18.650° N, 79.820° E', lat: 18.65, lng: 79.82, confidence: 'Medium', confidenceVal: 72, frp: 31.5 },
  { id: 'obs-7', satellite: 'VIIRS (N20)', satelliteShort: 'NOAA-20', dateTime: 'Jan 14, 2025, 10:25 UTC', location: '17.150° N, 77.400° E', lat: 17.15, lng: 77.40, confidence: 'Low', confidenceVal: 24, frp: 12.3 },
  
  // Central India - Madhya Pradesh / Chhattisgarh / Odisha
  { id: 'obs-8', satellite: 'VIIRS (SNPP)', satelliteShort: 'S-NPP', dateTime: 'Jan 14, 2025, 08:18 UTC', location: '21.500° N, 81.650° E', lat: 21.50, lng: 81.65, confidence: 'High', confidenceVal: 95, frp: 74.0 },
  { id: 'obs-9', satellite: 'VIIRS (N21)', satelliteShort: 'NOAA-21', dateTime: 'Jan 14, 2025, 09:52 UTC', location: '22.300° N, 80.200° E', lat: 22.30, lng: 80.20, confidence: 'High', confidenceVal: 86, frp: 45.2 },
  { id: 'obs-10', satellite: 'MODIS (Aqua)', satelliteShort: 'Aqua', dateTime: 'Jan 14, 2025, 07:44 UTC', location: '23.100° N, 78.900° E', lat: 23.10, lng: 78.90, confidence: 'Medium', confidenceVal: 58, frp: 22.4 },
  { id: 'obs-11', satellite: 'VIIRS (N20)', satelliteShort: 'NOAA-20', dateTime: 'Jan 14, 2025, 10:28 UTC', location: '20.800° N, 83.400° E', lat: 20.80, lng: 83.40, confidence: 'High', confidenceVal: 89, frp: 57.8 },
  { id: 'obs-12', satellite: 'MODIS (Terra)', satelliteShort: 'Terra', dateTime: 'Jan 14, 2025, 05:35 UTC', location: '21.900° N, 82.500° E', lat: 21.90, lng: 82.50, confidence: 'Low', confidenceVal: 28, frp: 14.1 },
  { id: 'obs-13', satellite: 'VIIRS (SNPP)', satelliteShort: 'S-NPP', dateTime: 'Jan 14, 2025, 08:20 UTC', location: '23.700° N, 81.100° E', lat: 23.70, lng: 81.10, confidence: 'Medium', confidenceVal: 68, frp: 33.6 },
  
  // North / Punjab / Haryana / Indo-Gangetic Plain
  { id: 'obs-14', satellite: 'VIIRS (N20)', satelliteShort: 'NOAA-20', dateTime: 'Jan 14, 2025, 10:30 UTC', location: '29.800° N, 75.900° E', lat: 29.80, lng: 75.90, confidence: 'High', confidenceVal: 93, frp: 81.2 },
  { id: 'obs-15', satellite: 'VIIRS (N21)', satelliteShort: 'NOAA-21', dateTime: 'Jan 14, 2025, 09:55 UTC', location: '30.400° N, 76.400° E', lat: 30.40, lng: 76.40, confidence: 'High', confidenceVal: 91, frp: 76.5 },
  { id: 'obs-16', satellite: 'MODIS (Aqua)', satelliteShort: 'Aqua', dateTime: 'Jan 14, 2025, 07:48 UTC', location: '28.600° N, 77.200° E', lat: 28.60, lng: 77.20, confidence: 'Medium', confidenceVal: 62, frp: 27.9 },
  { id: 'obs-17', satellite: 'VIIRS (SNPP)', satelliteShort: 'S-NPP', dateTime: 'Jan 14, 2025, 08:22 UTC', location: '26.800° N, 80.900° E', lat: 26.80, lng: 80.90, confidence: 'High', confidenceVal: 87, frp: 54.0 },
  { id: 'obs-18', satellite: 'MODIS (Terra)', satelliteShort: 'Terra', dateTime: 'Jan 14, 2025, 05:40 UTC', location: '25.300° N, 82.900° E', lat: 25.30, lng: 82.90, confidence: 'Medium', confidenceVal: 55, frp: 21.0 },

  // Eastern India & Myanmar & Southeast Asia
  { id: 'obs-19', satellite: 'VIIRS (N20)', satelliteShort: 'NOAA-20', dateTime: 'Jan 14, 2025, 10:32 UTC', location: '21.900° N, 96.100° E', lat: 21.90, lng: 96.10, confidence: 'High', confidenceVal: 97, frp: 112.4 },
  { id: 'obs-20', satellite: 'VIIRS (SNPP)', satelliteShort: 'S-NPP', dateTime: 'Jan 14, 2025, 08:25 UTC', location: '19.800° N, 96.500° E', lat: 19.80, lng: 96.50, confidence: 'High', confidenceVal: 94, frp: 98.7 },
  { id: 'obs-21', satellite: 'VIIRS (N21)', satelliteShort: 'NOAA-21', dateTime: 'Jan 14, 2025, 09:58 UTC', location: '18.800° N, 98.900° E', lat: 18.80, lng: 98.90, confidence: 'High', confidenceVal: 89, frp: 85.3 },
  { id: 'obs-22', satellite: 'MODIS (Aqua)', satelliteShort: 'Aqua', dateTime: 'Jan 14, 2025, 07:50 UTC', location: '15.200° N, 101.400° E', lat: 15.20, lng: 101.40, confidence: 'Medium', confidenceVal: 74, frp: 42.1 },
  { id: 'obs-23', satellite: 'MODIS (Terra)', satelliteShort: 'Terra', dateTime: 'Jan 14, 2025, 05:45 UTC', location: '13.700° N, 100.500° E', lat: 13.70, lng: 100.50, confidence: 'Low', confidenceVal: 29, frp: 15.6 },
  { id: 'obs-24', satellite: 'VIIRS (N20)', satelliteShort: 'NOAA-20', dateTime: 'Jan 14, 2025, 10:35 UTC', location: '12.500° N, 104.900° E', lat: 12.50, lng: 104.90, confidence: 'High', confidenceVal: 88, frp: 63.8 },
  { id: 'obs-25', satellite: 'VIIRS (SNPP)', satelliteShort: 'S-NPP', dateTime: 'Jan 14, 2025, 08:28 UTC', location: '16.400° N, 105.800° E', lat: 16.40, lng: 105.80, confidence: 'Medium', confidenceVal: 67, frp: 38.2 },
];

// Activity calendar data for January 2025
// Exactly matches the heatmap coloring in the screenshot
export const CALENDAR_DAYS: DayActivity[] = [
  // Dec previous days
  { day: 29, month: 12, year: 2024, count: 0, level: 0, isCurrentMonth: false },
  { day: 30, month: 12, year: 2024, count: 0, level: 0, isCurrentMonth: false },
  { day: 31, month: 12, year: 2024, count: 0, level: 0, isCurrentMonth: false },
  // Jan 1 - 4
  { day: 1, month: 1, year: 2025, count: 180, level: 2, isCurrentMonth: true },
  { day: 2, month: 1, year: 2025, count: 210, level: 2, isCurrentMonth: true },
  { day: 3, month: 1, year: 2025, count: 290, level: 3, isCurrentMonth: true },
  { day: 4, month: 1, year: 2025, count: 380, level: 4, isCurrentMonth: true },
  // Jan 5 - 11
  { day: 5, month: 1, year: 2025, count: 40, level: 1, isCurrentMonth: true },
  { day: 6, month: 1, year: 2025, count: 65, level: 1, isCurrentMonth: true },
  { day: 7, month: 1, year: 2025, count: 85, level: 1, isCurrentMonth: true },
  { day: 8, month: 1, year: 2025, count: 195, level: 2, isCurrentMonth: true },
  { day: 9, month: 1, year: 2025, count: 220, level: 2, isCurrentMonth: true },
  { day: 10, month: 1, year: 2025, count: 280, level: 3, isCurrentMonth: true },
  { day: 11, month: 1, year: 2025, count: 320, level: 3, isCurrentMonth: true },
  // Jan 12 - 18
  { day: 12, month: 1, year: 2025, count: 140, level: 2, isCurrentMonth: true },
  { day: 13, month: 1, year: 2025, count: 210, level: 2, isCurrentMonth: true },
  { day: 14, month: 1, year: 2025, count: 420, level: 4, isCurrentMonth: true }, // Selected!
  { day: 15, month: 1, year: 2025, count: 260, level: 3, isCurrentMonth: true },
  { day: 16, month: 1, year: 2025, count: 190, level: 2, isCurrentMonth: true },
  { day: 17, month: 1, year: 2025, count: 180, level: 2, isCurrentMonth: true },
  { day: 18, month: 1, year: 2025, count: 275, level: 3, isCurrentMonth: true },
  // Jan 19 - 25
  { day: 19, month: 1, year: 2025, count: 230, level: 3, isCurrentMonth: true },
  { day: 20, month: 1, year: 2025, count: 250, level: 3, isCurrentMonth: true },
  { day: 21, month: 1, year: 2025, count: 190, level: 2, isCurrentMonth: true },
  { day: 22, month: 1, year: 2025, count: 280, level: 3, isCurrentMonth: true },
  { day: 23, month: 1, year: 2025, count: 240, level: 3, isCurrentMonth: true },
  { day: 24, month: 1, year: 2025, count: 310, level: 3, isCurrentMonth: true },
  { day: 25, month: 1, year: 2025, count: 395, level: 4, isCurrentMonth: true },
  // Jan 26 - Feb 1
  { day: 26, month: 1, year: 2025, count: 220, level: 2, isCurrentMonth: true },
  { day: 27, month: 1, year: 2025, count: 240, level: 3, isCurrentMonth: true },
  { day: 28, month: 1, year: 2025, count: 290, level: 3, isCurrentMonth: true },
  { day: 29, month: 1, year: 2025, count: 270, level: 3, isCurrentMonth: true },
  { day: 30, month: 1, year: 2025, count: 280, level: 3, isCurrentMonth: true },
  { day: 31, month: 1, year: 2025, count: 310, level: 3, isCurrentMonth: true },
  { day: 1, month: 2, year: 2025, count: 0, level: 0, isCurrentMonth: false },
];
