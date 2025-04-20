import { useState, useEffect } from 'react';
import { TramPosition, TramRoute } from '../types';

/**
 * Custom hook to simulate tram movement along a route
 * @param route The tram route to simulate
 * @param speed The speed of the tram in km/h
 */
export const useTramSimulation = (
  route: TramRoute,
  speed: number = 20
): TramPosition => {
  const [position, setPosition] = useState<TramPosition>({
    routeId: route.id,
    coordinates: route.path[0] || [33.5731, -7.5898], // Default to Casablanca coordinates
    heading: 0,
    speed,
    timestamp: Date.now(),
  });

  useEffect(() => {
    // Skip if the route has no path
    if (!route.path.length) {
      return;
    }

    let currentIndex = 0;
    let direction = 1; // 1 for forward, -1 for backward

    // Update the tram position every 5 seconds
    const interval = setInterval(() => {
      // Move to the next point in the path
      currentIndex += direction;

      // If we reach the end of the path, reverse direction
      if (currentIndex >= route.path.length - 1) {
        direction = -1;
      } 
      // If we reach the start of the path, reverse direction
      else if (currentIndex <= 0) {
        direction = 1;
      }

      // Get the current and next coordinates
      const currentCoord = route.path[currentIndex];
      const nextCoord = route.path[currentIndex + direction];

      // Calculate heading if we have a next coordinate
      let heading = 0;
      if (nextCoord) {
        // Calculate the angle between the current and next coordinates
        heading = Math.atan2(
          nextCoord[1] - currentCoord[1],
          nextCoord[0] - currentCoord[0]
        ) * (180 / Math.PI);
      }

      // Update the position
      setPosition({
        routeId: route.id,
        coordinates: currentCoord,
        heading,
        speed,
        timestamp: Date.now(),
      });
    }, 5000); // Update every 5 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [route, speed]);

  return position;
};
