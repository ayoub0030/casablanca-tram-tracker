import React, { useMemo } from 'react';
import { TramStation, TramRoute, UserLocation } from '../../types';
import { calculateDistance, calculateETA } from '../../utils/distance';

interface NearestStationCardProps {
  userLocation: UserLocation;
  route: TramRoute;
}

interface NearestStationResult {
  nearestStation: TramStation | null;
  distance: number;
  eta: number;
}

const NearestStationCard: React.FC<NearestStationCardProps> = ({
  userLocation,
  route,
}) => {
  // Calculate the nearest station and ETA
  const { nearestStation, distance, eta } = useMemo<NearestStationResult>(() => {
    // Default values
    let nearestStation: TramStation | null = null;
    let minDistance = Infinity;
    let eta = 0;

    // Check if user location is available
    if (userLocation.coordinates) {
      const [userLat, userLng] = userLocation.coordinates;

      // Find the nearest station
      route.stations.forEach((station) => {
        const [stationLat, stationLng] = station.coordinates;
        const dist = calculateDistance(userLat, userLng, stationLat, stationLng);

        if (dist < minDistance) {
          minDistance = dist;
          nearestStation = station;
        }
      });

      // Calculate ETA based on 20 km/h tram speed
      if (nearestStation) {
        eta = calculateETA(minDistance, 20);
      }
    }

    return {
      nearestStation,
      distance: minDistance,
      eta,
    };
  }, [userLocation, route]);

  if (!userLocation.coordinates) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Nearest Station
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {userLocation.error || 'Waiting for your location...'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Nearest Station
      </h3>
      {nearestStation ? (
        <>
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <h4 className="text-xl font-bold text-primary">
              {nearestStation.name}
            </h4>
          </div>
          <div className="space-y-1">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Distance:</span>{' '}
              {(distance / 1000).toFixed(2)} km
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">ETA:</span> {eta} minutes
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Line:</span> {route.name}
            </p>
          </div>
        </>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">
          No stations found nearby.
        </p>
      )}
    </div>
  );
};

export default NearestStationCard;
