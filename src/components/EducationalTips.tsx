import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Card } from './ui/Card';
import { TipCard } from './ui/TipCard';

const tips = [
  {
    title: "Proper Plastic Sorting",
    description: "Learn how to identify and separate different types of plastics for efficient recycling.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800"
  },
  {
    title: "Reduce Single-Use Plastics",
    description: "Simple ways to minimize your daily plastic consumption and environmental impact.",
    image: "https://images.unsplash.com/photo-1618477462146-050d2757163d?auto=format&fit=crop&w=800"
  }
];

export default function EducationalTips() {
  return (
    <Card>
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="text-yellow-500" size={24} />
        <h2 className="text-lg font-semibold text-gray-800">Eco Tips</h2>
      </div>
      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <TipCard key={index} {...tip} />
        ))}
      </div>
    </Card>
  );
}