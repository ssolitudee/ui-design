import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full border-r border-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>
        <div className="space-y-2">
          {/* Placeholder for chat history items */}
          <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">
            Previous Chat 1
          </div>
          <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">
            Previous Chat 2
          </div>
        </div>
      </div>
    </aside>
  );
};
