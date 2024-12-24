import React from 'react';
import { Coins } from 'lucide-react';
import { Card } from '../ui/Card';

export default function RewardsBalance() {
  return (
    <Card className="mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Rewards Balance</h2>
          <div className="flex items-center space-x-2">
            <Coins className="text-yellow-500" size={24} />
            <span className="text-3xl font-bold text-green-600">1,250</span>
            <span className="text-gray-600">points</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">Points expiring soon:</p>
          <p className="text-red-500 font-medium">250 points in 30 days</p>
        </div>
      </div>
    </Card>
  );
}