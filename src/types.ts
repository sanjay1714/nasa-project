export type UserMode = 'user' | 'researcher';

export type SatelliteId = 'all' | 'Terra (MODIS)' | 'Aqua (MODIS)' | 'S-NPP (VIIRS)' | 'NOAA-20 (VIIRS)' | 'NOAA-21 (VIIRS)';

export interface FireObservation {
  id: string;
  satellite: string;
  satelliteShort: string;
  dateTime: string;
  location: string;
  lat: number;
  lng: number;
  confidence: 'High' | 'Medium' | 'Low';
  confidenceVal: number;
  frp: number; // Fire Radiative Power (MW)
}

export interface DayActivity {
  day: number;
  month: number;
  year: number;
  count: number;
  level: number; // 0 to 4
  isCurrentMonth: boolean;
}
