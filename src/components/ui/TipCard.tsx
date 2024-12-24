import React from 'react';

interface TipCardProps {
  title: string;
  description: string;
  image: string;
}

export function TipCard({ title, description, image }: TipCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}