import React from 'react';
import { Bell, Calendar, Award, AlertCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'collection',
    title: 'Next Collection Tomorrow',
    message: 'Prepare your recyclables for collection at 9 AM',
    time: '1 hour ago',
    icon: Calendar,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    id: 2,
    type: 'achievement',
    title: 'New Badge Earned!',
    message: 'You\'ve earned the "Consistent Recycler" badge',
    time: '2 hours ago',
    icon: Award,
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    id: 3,
    type: 'alert',
    title: 'Collection Rescheduled',
    message: 'Thursday collection moved to Friday',
    time: '1 day ago',
    icon: AlertCircle,
    color: 'text-red-600 bg-red-100',
  },
];

export default function NotificationPanel() {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell size={20} className="text-gray-600" />
            <h3 className="ml-2 font-semibold">Notifications</h3>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            Mark all as read
          </button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-start">
                <div className={`p-2 rounded-full ${notification.color} mr-3`}>
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 text-center border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-800">
          View all notifications
        </button>
      </div>
    </div>
  );
}