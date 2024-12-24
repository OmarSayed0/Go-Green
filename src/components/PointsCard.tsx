import React from 'react';
import { Trophy, Coins, Recycle } from 'lucide-react';
import { Card } from './ui/Card';
import { StatCard } from './ui/StatCard';

interface PointsCardProps {
  onRewardsClick: () => void;
}

export default function PointsCard({ onRewardsClick }: PointsCardProps) {
  return (
    <Card className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Your Impact</h2>
          <p className="text-sm text-gray-600">Keep up the great work!</p>
        </div>
        <button
          onClick={onRewardsClick}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Trophy size={20} />
          <span>Redeem Rewards</span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          icon={Coins}
          label="Points"
          value={1250}
          colorClass="bg-green-50"
        />
        <StatCard
          icon={Recycle}
          label="Recycled"
          value="25 kg"
          colorClass="bg-blue-50"
        />
      </div>
    </Card>
  );
}