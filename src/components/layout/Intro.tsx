import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-4 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-primary mb-2">
          Track Your Tram in Real-Time
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Stay informed about Casablanca's tram network with live positions and arrival times.
        </p>
      </div>
    </section>
  );
};

export default Intro;
