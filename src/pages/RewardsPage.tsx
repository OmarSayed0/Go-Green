import React from 'react';
import RewardsBalance from '../components/Rewards/RewardsBalance';
import RewardsCatalog from '../components/Rewards/RewardsCatalog';

export default function RewardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <RewardsBalance />
      <RewardsCatalog />
    </div>
  );
}