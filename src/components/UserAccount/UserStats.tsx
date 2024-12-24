import React from 'react';
import { LineChart, Wallet, Scale } from 'lucide-react';
import { Card } from '../ui/Card';

const stats = [
  { label: 'Total Points', value: '3,450', change: '+12%', icon: Wallet },
  { label: 'Monthly Collections', value: '8', change: '+2', icon: LineChart },
  { label: 'Total Weight', value: '45kg', change: '+5kg', icon: Scale },
];

export default function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
              <Icon className="text-green-600" size={24} />
            </div>
          </Card>
        );
      })}
    </div>
  );
}