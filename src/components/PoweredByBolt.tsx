import React from 'react';

const PoweredByBolt: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 p-2 hover:shadow-xl transition-shadow duration-200">
        <img 
          src="/bolt.png" 
          alt="Powered by Bolt" 
          className="w-12 h-12 rounded-full"
          title="Powered by Bolt"
        />
      </div>
    </div>
  );
};

export default PoweredByBolt;