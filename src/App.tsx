import React, { useState } from 'react';
import Header from './components/Header';
import PointsCard from './components/PointsCard';
import NextCollection from './components/NextCollection';
import HowItWorks from './components/Guide/HowItWorks';
import GlobalImpact from './components/Impact/GlobalImpact';
import RecyclingTips from './components/Guide/RecyclingTips';
import NotificationPanel from './components/Notifications/NotificationPanel';
import UserAccountPage from './pages/UserAccountPage';
import SchedulePage from './pages/SchedulePage';
import RewardsPage from './pages/RewardsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setShowNotifications(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        onNotificationClick={toggleNotifications}
        onProfileClick={() => handleNavigation('account')}
      />
      
      {showNotifications && <NotificationPanel />}

      <main className="container mx-auto px-4 py-6">
        {currentPage === 'home' && (
          <>
            <PointsCard onRewardsClick={() => handleNavigation('rewards')} />
            <NextCollection onScheduleClick={() => handleNavigation('schedule')} />
            <HowItWorks />
            <GlobalImpact />
            <RecyclingTips />
          </>
        )}
        {currentPage === 'account' && <UserAccountPage />}
        {currentPage === 'schedule' && <SchedulePage />}
        {currentPage === 'rewards' && <RewardsPage />}
      </main>
    </div>
  );
}

export default App;