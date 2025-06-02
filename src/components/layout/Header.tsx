import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-6 bg-gray-900 text-white border-b border-gray-800">
      <h1 className="text-xl font-semibold">Inventory Analyzer AI</h1>
      <button className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-white rounded-lg transition-colors">
        New Chat
      </button>
    </header>
  );
};
