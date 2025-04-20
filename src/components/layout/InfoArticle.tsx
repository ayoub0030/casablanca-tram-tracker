import React from 'react';

const InfoArticle: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          About Casablanca's Tram Network
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition-colors">
            <h3 className="text-xl font-semibold text-primary mb-3">
              A Modern Transit Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Casablanca's tramway system, operated by Casa Transport, has been transforming urban mobility since its inauguration in December 2012. With 37 stations across 31 kilometers of track, it serves as the backbone of public transportation in Morocco's largest city.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The network currently handles over 250,000 passengers daily, connecting key residential areas with business districts, universities, and recreational zones. The distinctive orange trams have become an iconic symbol of the city's modernization efforts.
            </p>
          </article>
          
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition-colors">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Future Expansion Plans
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Casablanca continues to invest in expanding its tram network. The latest development phase includes extending Line 2 to connect more neighborhoods and improving integration with other transport modes like buses and the upcoming metro system.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By 2030, the city aims to have over 100 kilometers of tram lines, significantly reducing traffic congestion and carbon emissions. This expansion is part of Casablanca's broader sustainable urban mobility plan to create a more livable and environmentally friendly city.
            </p>
          </article>
        </div>
        
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition-colors">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Using This Tracker
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our Casablanca Tram Tracker provides real-time information about tram positions and estimated arrival times. The map displays the current tram routes with live updates on vehicle locations.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The nearest station feature uses your current location to calculate the closest tram stop and provides an estimated time of arrival. This helps you plan your journey more efficiently and reduces waiting times at stations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoArticle;
