import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-3 shadow-inner transition-colors">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Live positions simulated. Real-time feed coming soon.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          &copy; {new Date().getFullYear()} Casablanca Tram Tracker
        </p>
      </div>
    </footer>
  );
};

export default Footer;
