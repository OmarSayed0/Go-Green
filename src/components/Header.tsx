import React from 'react';
import { Recycle, User, Bell } from 'lucide-react';

interface HeaderProps {
  onNotificationClick: () => void;
  onProfileClick: () => void;
}

export default function Header({ onNotificationClick, onProfileClick }: HeaderProps) {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Recycle size={24} />
          <h1 className="text-xl font-bold">EcoRewards</h1>
        </button>
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 hover:bg-green-700 rounded-full"
            onClick={onNotificationClick}
          >
            <Bell size={20} />
          </button>
          <button 
            className="p-2 hover:bg-green-700 rounded-full"
            onClick={onProfileClick}
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}