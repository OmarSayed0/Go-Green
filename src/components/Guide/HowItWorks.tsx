import React from 'react';
import { PackagePlus, CalendarCheck, Coins, Recycle } from 'lucide-react';
import { Card } from '../ui/Card';

const steps = [
  {
    icon: PackagePlus,
    title: 'Collect & Sort',
    description: 'Separate your plastic waste into designated categories'
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Pickup',
    description: 'Book a convenient time for waste collection'
  },
  {
    icon: Recycle,
    title: 'We Recycle',
    description: 'Your waste is processed at certified recycling facilities'
  },
  {
    icon: Coins,
    title: 'Earn Rewards',
    description: 'Get points and rewards for your contribution'
  }
];

export default function HowItWorks() {
  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -z-10" />
            )}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Icon className="text-green-600" size={24} />
              </div>
              <h3 className="font-medium mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}