import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The brilliant minds behind Punisher Bot
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">D</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Duke</h3>
            <p className="text-red-600 mb-4">Owner</p>
            <p className="text-gray-400">
              Visionary leader and strategist behind Punisher Bot
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">S</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Sumit</h3>
            <p className="text-red-600 mb-4">Lead Developer</p>
            <p className="text-gray-400">
              Technical genius crafting Punisher's advanced features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;