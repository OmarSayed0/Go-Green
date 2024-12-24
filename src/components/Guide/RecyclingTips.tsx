import React from 'react';
import { Card } from '../ui/Card';

const tips = [
  {
    title: 'Clean Before Recycling',
    description: 'Rinse containers to remove food residue',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800'
  },
  {
    title: 'Check the Numbers',
    description: 'Look for recycling numbers (1-7) on plastic items',
    image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=800'
  },
  {
    title: 'Proper Storage',
    description: 'Keep recyclables clean and dry until collection',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800'
  }
];

export default function RecyclingTips() {
  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Recycling Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div key={tip.title} className="overflow-hidden rounded-lg bg-gray-50">
            <img 
              src={tip.image} 
              alt={tip.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}