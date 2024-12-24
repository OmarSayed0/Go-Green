import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card } from './ui/Card';

interface NextCollectionProps {
  onScheduleClick: () => void;
}

export default function NextCollection({ onScheduleClick }: NextCollectionProps) {
  return (
    <Card className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Next Collection</h2>
      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Calendar className="text-blue-600" size={24} />
          <div>
            <p className="font-medium text-gray-800">Thursday, March 21</p>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Clock size={14} />
              <span>9:00 AM - 11:00 AM</span>
            </div>
          </div>
        </div>
        <button 
          onClick={onScheduleClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Schedule
        </button>
      </div>
    </Card>
  );
}