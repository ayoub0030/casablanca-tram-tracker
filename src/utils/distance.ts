/**
 * Calculate the distance between two coordinates using the Haversine formula
 * @param lat1 Latitude of first point
 * @param lon1 Longitude of first point
 * @param lat2 Latitude of second point
 * @param lon2 Longitude of second point
 * @returns Distance in meters
 */
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  // Earth's radius in meters
  const R = 6371e3;
  
  // Convert latitude and longitude from degrees to radians
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;
  
  // Haversine formula
  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
};

/**
 * Calculate the estimated time of arrival (ETA) based on distance and speed
 * @param distance Distance in meters
 * @param speed Speed in km/h
 * @returns ETA in minutes
 */
export const calculateETA = (distance: number, speed: number): number => {
  // Convert speed from km/h to m/s
  const speedInMetersPerSecond = (speed * 1000) / 3600;
  
  // Calculate time in seconds
  const timeInSeconds = distance / speedInMetersPerSecond;
  
  // Convert time to minutes
  const timeInMinutes = timeInSeconds / 60;
  
  return Math.round(timeInMinutes);
};
