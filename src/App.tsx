import { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './components/layout/Header';
import Intro from './components/layout/Intro';
import Footer from './components/layout/Footer';
import TramMap from './components/map/TramMap';
import NearestStationCard from './components/map/NearestStationCard';
import InfoArticle from './components/layout/InfoArticle';

// Hooks
import { useGeolocation } from './hooks/useGeolocation';
import { useTramSimulation } from './hooks/useTramSimulation';

// Utils
import { getInitialTheme, Theme } from './utils/theme';

// Data
import { defaultRoute } from './data/tramData';

function App() {
  // Theme state
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());
  
  // Get user's geolocation
  const userLocation = useGeolocation();
  
  // Simulate tram movement
  const tramPosition = useTramSimulation(defaultRoute);
  
  // Initialize theme when the app first loads and when theme changes
  useEffect(() => {
    // Apply the theme to the HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Store the theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Custom theme setter that updates both state and DOM
  const handleThemeChange = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header theme={theme} setTheme={handleThemeChange} />
      <Intro />
      
      <main className="flex-grow relative">
        {/* Map Container */}
        <div className="w-full h-full">
          <TramMap route={defaultRoute} tramPosition={tramPosition} />
        </div>
        
        {/* Nearest Station Card - Positioned absolutely */}
        <div className="absolute bottom-4 left-4 w-80 sm:w-96 z-10">
          <NearestStationCard userLocation={userLocation} route={defaultRoute} />
        </div>
      </main>
      
      {/* Information Article Section */}
      <InfoArticle />
      
      <Footer />
    </div>
  );
}

export default App;
