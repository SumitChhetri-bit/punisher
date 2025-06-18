import React from 'react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-black via-red-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Bot Statistics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Growing stronger with each server we protect
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg border border-red-900/30 bg-black/50 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
            <div className="text-gray-400">Servers Protected</div>
          </div>
          <div className="p-6 rounded-lg border border-red-900/30 bg-black/50 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">500K+</div>
            <div className="text-gray-400">Users Secured</div>
          </div>
          <div className="p-6 rounded-lg border border-red-900/30 bg-black/50 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="p-6 rounded-lg border border-red-900/30 bg-black/50 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
