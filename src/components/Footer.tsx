import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-red-600">PUNISHER</span>
            <p className="text-gray-400 mt-2">Securing Discord servers with advanced protection</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <a href="#features" className="text-gray-400 hover:text-red-500 transition-colors">Features</a>
            <a href="#stats" className="text-gray-400 hover:text-red-500 transition-colors">Stats</a>
            <a href="#team" className="text-gray-400 hover:text-red-500 transition-colors">Team</a>
            <a href="discord.gg/punisherhq" target="_blank" rel="noopener noreferrer" 
              className="text-red-600 hover:text-red-500 transition-colors">
              Join Discord
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-900/30 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Punisher Bot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;