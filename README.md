# Casablanca Tram Tracker

![download](https://github.com/user-attachments/assets/1a77e8c6-ad28-40a1-9ec7-b5cb9478fcfd)


## Overview

Casablanca Tram Tracker is a responsive single-page web application that provides real-time tracking and information for Casablanca's tram network. The application allows users to view tram routes on an interactive map, track simulated tram movements, and find the nearest tram station based on their current location.

## Features

- **Interactive Map**: Centered on Casablanca with visualization of tram routes
- **Real-time Tram Tracking**: Simulated tram movement along the routes
- **Nearest Station Finder**: Calculates the closest station and estimated arrival time based on user's geolocation
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Informative Content**: Details about Casablanca's tram network and future plans

## Tech Stack

- **React** with **TypeScript** (Vite setup)
- **Tailwind CSS** for styling
- **react-leaflet** with OpenStreetMap for interactive maps
- Modern ES modules and functional components
- Custom hooks for geolocation and tram simulation

## Project Structure

```
casablanca-tram-tracker/
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, Intro, InfoArticle
│   │   └── map/          # TramMap, NearestStationCard
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── data/             # Tram route and station data
├── public/               # Static assets
└── ...config files       # Vite, Tailwind, TypeScript configs
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/ayoub0030/casablanca-tram-tracker.git
   ```

2. Install dependencies:
   ```
   cd casablanca-tram-tracker
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Screenshots

*Coming soon*

## Future Enhancements

- Integration with real-time tram data API when available
- User accounts for saving favorite routes and stations
- Push notifications for tram arrivals
- Journey planning functionality
- Multi-language support (Arabic, French, English)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

- [Ayoub](https://github.com/ayoub0030)
