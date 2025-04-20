import { useState, useEffect } from 'react';
import { UserLocation } from '../types';

/**
 * Custom hook to get and track the user's geolocation
 */
export const useGeolocation = (): UserLocation => {
  const [location, setLocation] = useState<UserLocation>({
    coordinates: null,
    error: null,
    timestamp: null,
  });

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      setLocation({
        coordinates: null,
        error: 'Geolocation is not supported by your browser',
        timestamp: null,
      });
      return;
    }

    // Success handler for geolocation
    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      
      setLocation({
        coordinates: [latitude, longitude],
        error: null,
        timestamp: position.timestamp,
      });
    };

    // Error handler for geolocation
    const handleError = (error: GeolocationPositionError) => {
      setLocation({
        coordinates: null,
        error: error.message,
        timestamp: null,
      });
    };

    // Options for geolocation
    const options: PositionOptions = {
      enableHighAccuracy: true,
      maximumAge: 30000, // 30 seconds
      timeout: 10000, // 10 seconds
    };

    // Get the current position
    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      options
    );

    // Clean up the watch when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return location;
};
