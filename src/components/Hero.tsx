import React from 'react';
import { Shield, Zap, Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
          Welcome to <span className="text-red-600">Punisher</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          The ultimate Discord bot for server security and utility. Protect your community with advanced moderation features.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="discord.gg/punisherhq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Add to Discord
          </a>
          <a
            href="#features"
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-gray-400">Protect your server with intelligent moderation</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Quick response time and efficient processing</p>
          </div>
          <div className="flex flex-col items-center">
            <Server className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Uptime</h3>
            <p className="text-gray-400">Reliable protection around the clock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;