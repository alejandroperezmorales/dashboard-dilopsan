
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 p-4 border-b border-gray-700">
      <div className="container mx-auto flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 mr-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
        </svg>
        <h1 className="text-2xl font-bold text-white tracking-wider">
          Dilopsan <span className="font-light text-gray-400">Sales Dashboard</span>
        </h1>
      </div>
    </header>
  );
};
