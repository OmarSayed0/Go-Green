import React from 'react';
import UserProfile from '../components/UserAccount/UserProfile';
import UserStats from '../components/UserAccount/UserStats';
import ActivityChart from '../components/UserAccount/ActivityChart';

export default function UserAccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile />
      <UserStats />
      <ActivityChart />
    </div>
  );
}