import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  colorClass: string;
}

export function StatCard({ icon: Icon, label, value, colorClass }: StatCardProps) {
  return (
    <div className={`${colorClass} p-4 rounded-lg`}>
      <div className="flex items-center space-x-2 mb-2">
        <Icon className={`${colorClass.includes('green') ? 'text-green-600' : 'text-blue-600'}`} size={20} />
        <span className={`font-medium ${colorClass.includes('green') ? 'text-green-600' : 'text-blue-600'}`}>{label}</span>
      </div>
      <p className={`text-2xl font-bold ${colorClass.includes('green') ? 'text-green-700' : 'text-blue-700'}`}>{value}</p>
    </div>
  );
}