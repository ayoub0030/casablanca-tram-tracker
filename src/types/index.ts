// Define types for the tram station
export interface TramStation {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
}

// Define types for the tram route
export interface TramRoute {
  id: string;
  name: string;
  color: string;
  stations: TramStation[];
  path: [number, number][]; // Array of [latitude, longitude] coordinates
}

// Define types for the tram position
export interface TramPosition {
  routeId: string;
  coordinates: [number, number]; // [latitude, longitude]
  heading: number; // Direction in degrees
  speed: number; // Speed in km/h
  timestamp: number; // Unix timestamp
}

// Define types for the user's location
export interface UserLocation {
  coordinates: [number, number] | null; // [latitude, longitude]
  error: string | null;
  timestamp: number | null;
}

// Define types for the nearest station calculation
export interface NearestStationInfo {
  station: TramStation;
  distance: number; // Distance in meters
  eta: number; // Estimated time of arrival in minutes
}
