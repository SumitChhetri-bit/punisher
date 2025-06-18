import React from 'react';
import { Shield, Lock, Bell, Settings, Users, Terminal } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Moderation",
      description: "Automatically detect and handle spam, inappropriate content, and raids."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: "Advanced Security",
      description: "Protect your server with anti-nuke systems and anti-bot measures."
    },
    {
      icon: <Bell className="w-8 h-8 text-red-600" />,
      title: "Custom Alerts",
      description: "Set up custom notifications for important server events."
    },
    {
      icon: <Settings className="w-8 h-8 text-red-600" />,
      title: "Utility Commands",
      description: "Comprehensive set of utility commands for server management."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Role Management",
      description: "Advanced role management with auto-roles and reaction roles."
    },
    {
      icon: <Terminal className="w-8 h-8 text-red-600" />,
      title: "Logging System",
      description: "Detailed logging of all server activities and moderation actions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes Punisher the ultimate choice for Discord server security and management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-red-900/30 bg-gradient-to-br from-black to-red-900/10 hover:border-red-600 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
