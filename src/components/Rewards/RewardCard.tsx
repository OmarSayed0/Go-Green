import React from 'react';
import { Coins } from 'lucide-react';
import { Card } from '../ui/Card';

interface RewardProps {
  reward: {
    store: string;
    title: string;
    points: number;
    image: string;
    category: string;
  };
}

export default function RewardCard({ reward }: RewardProps) {
  const canRedeem = 1250 >= reward.points; // Using the current points balance

  return (
    <Card className="overflow-hidden">
      <img
        src={reward.image}
        alt={reward.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-1">{reward.store}</div>
        <h3 className="text-lg font-semibold mb-2">{reward.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Coins className="text-yellow-500" size={16} />
            <span className="font-medium">{reward.points}</span>
            <span className="text-gray-600">points</span>
          </div>
          <button
            className={`px-4 py-2 rounded-lg ${
              canRedeem
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!canRedeem}
          >
            {canRedeem ? 'Redeem' : 'Not enough points'}
          </button>
        </div>
      </div>
    </Card>
  );
}