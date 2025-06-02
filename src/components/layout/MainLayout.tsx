import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-gray-900 text-white h-full border-r border-gray-800">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Chat History</h2>
            <div className="space-y-2">
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Previous Chat 1</div>
              <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Previous Chat 2</div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
