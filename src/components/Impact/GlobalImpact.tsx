import React from 'react';
import { TreePine, Droplets, Factory } from 'lucide-react';
import { Card } from '../ui/Card';

const impacts = [
  {
    icon: TreePine,
    value: '2,450',
    label: 'Trees Saved',
    description: 'Through plastic recycling efforts'
  },
  {
    icon: Droplets,
    value: '15,000L',
    label: 'Water Preserved',
    description: 'By reducing plastic production'
  },
  {
    icon: Factory,
    value: '-850kg',
    label: 'CO₂ Reduced',
    description: 'Less carbon emissions'
  }
];

export default function GlobalImpact() {
  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Our Collective Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impacts.map(({ icon: Icon, value, label, description }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto text-green-600 mb-2" size={32} />
            <div className="text-2xl font-bold text-green-700">{value}</div>
            <div className="font-medium text-gray-800">{label}</div>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}