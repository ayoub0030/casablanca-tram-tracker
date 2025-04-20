import { TramStation, TramRoute } from '../types';

// Simplified Casablanca tram stations (placeholder data)
export const tramStations: TramStation[] = [
  {
    id: 'station-1',
    name: 'Sidi Moumen',
    coordinates: [33.5845, -7.5432],
  },
  {
    id: 'station-2',
    name: 'Attacharouk',
    coordinates: [33.5812, -7.5523],
  },
  {
    id: 'station-3',
    name: 'Hay Mohammadi',
    coordinates: [33.5789, -7.5612],
  },
  {
    id: 'station-4',
    name: 'Casa Port',
    coordinates: [33.5971, -7.6156],
  },
  {
    id: 'station-5',
    name: 'Place Mohammed V',
    coordinates: [33.5731, -7.5898],
  },
  {
    id: 'station-6',
    name: 'Ain Diab',
    coordinates: [33.5912, -7.6643],
  },
  {
    id: 'station-7',
    name: 'Facultés',
    coordinates: [33.5682, -7.6123],
  },
  {
    id: 'station-8',
    name: 'Mers Sultan',
    coordinates: [33.5823, -7.6034],
  },
];

// Simplified Casablanca tram route (placeholder data)
export const tramRoutes: TramRoute[] = [
  {
    id: 'route-1',
    name: 'Line 1',
    color: '#ff6600', // Casa Tram orange
    stations: tramStations.slice(0, 5), // First 5 stations
    path: [
      [33.5845, -7.5432], // Sidi Moumen
      [33.5832, -7.5478],
      [33.5812, -7.5523], // Attacharouk
      [33.5801, -7.5567],
      [33.5789, -7.5612], // Hay Mohammadi
      [33.5845, -7.5876],
      [33.5912, -7.6023],
      [33.5971, -7.6156], // Casa Port
      [33.5851, -7.6027],
      [33.5731, -7.5898], // Place Mohammed V
    ],
  },
  {
    id: 'route-2',
    name: 'Line 2',
    color: '#009933', // Green
    stations: tramStations.slice(4, 8), // Last 4 stations
    path: [
      [33.5731, -7.5898], // Place Mohammed V
      [33.5802, -7.6012],
      [33.5823, -7.6034], // Mers Sultan
      [33.5756, -7.6078],
      [33.5682, -7.6123], // Facultés
      [33.5797, -7.6384],
      [33.5912, -7.6643], // Ain Diab
    ],
  },
];

// Default route to display
export const defaultRoute = tramRoutes[0];
