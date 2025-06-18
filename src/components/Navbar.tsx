import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-red-600">PUNISHER</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#stats" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Stats</a>
              <a href="#team" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</a>
              <a href="discord.gg/punisherhq" target="_blank" rel="noopener noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Add to Discord
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#stats" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Stats</a>
            <a href="#team" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="discord.gg/punisherhq" target="_blank" rel="noopener noreferrer" 
              className="bg-red-600 hover:bg-red-700 text-white block px-3 py-2 rounded-md text-base font-medium">
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;