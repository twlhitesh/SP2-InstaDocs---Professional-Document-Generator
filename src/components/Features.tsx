import React from 'react';
import { Zap, Shield, Download, Smartphone, Clock, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Create professional documents in seconds with our smart templates'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'All processing happens locally - your data never leaves your device'
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Copy to clipboard or download as text file for easy sharing'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more starting from scratch - professional templates ready to use'
    },
    {
      icon: Sparkles,
      title: 'Professional Quality',
      description: 'Industry-standard templates crafted by professionals'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose InstaDocs?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional document generation made simple, fast, and secure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;