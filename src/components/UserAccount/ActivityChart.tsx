import React from 'react';
import { Card } from '../ui/Card';

export default function ActivityChart() {
  // Simulated data points for the chart
  const data = [65, 45, 75, 55, 85, 70, 90];
  const max = Math.max(...data);

  return (
    <Card className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Recycling Activity</h3>
      <div className="h-64 flex items-end justify-between gap-2">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-green-200 rounded-t-lg transition-all hover:bg-green-300"
              style={{ height: `${(value / max) * 100}%` }}
            />
            <span className="text-xs mt-2">Day {index + 1}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}