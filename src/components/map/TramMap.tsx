import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { TramRoute, TramPosition } from '../../types';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet default marker icons
// This is needed because Leaflet's assets get messed up in the build process
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom tram icon
const tramIcon = L.divIcon({
  className: 'tram-marker',
  html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M4 16l4.5-4 7 4L20 8M9 9h1M15 9h1M9 9a1 1 0 100-2 1 1 0 000 2zM15 9a1 1 0 100-2 1 1 0 000 2zM4 22h16M2 22h20M12 2v2M12 6v2"/></svg>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

interface TramMapProps {
  route: TramRoute;
  tramPosition: TramPosition;
}

const TramMap: React.FC<TramMapProps> = ({ route, tramPosition }) => {
  // Center of Casablanca
  const casablancaCenter: [number, number] = [33.5731, -7.5898];
  
  return (
    <MapContainer
      center={casablancaCenter}
      zoom={13}
      style={{ height: 'calc(100vh - 200px)', width: '100%' }}
      className="z-0"
    >
      {/* Base map layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Tram route line */}
      <Polyline
        positions={route.path}
        pathOptions={{ color: route.color, weight: 5 }}
      />
      
      {/* Station markers */}
      {route.stations.map((station) => (
        <Marker
          key={station.id}
          position={station.coordinates}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{station.name}</h3>
              <p>Tram Line: {route.name}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      
      {/* Tram position marker */}
      <Marker
        position={tramPosition.coordinates}
        icon={tramIcon}
      >
        <Popup>
          <div>
            <h3 className="font-bold">Tram (simulated)</h3>
            <p>Line: {route.name}</p>
            <p>Speed: {tramPosition.speed} km/h</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default TramMap;
