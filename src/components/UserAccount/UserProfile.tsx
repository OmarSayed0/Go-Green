import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { Card } from '../ui/Card';

export default function UserProfile() {
  return (
    <Card className="mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <User size={40} className="text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <div className="flex items-center space-x-4 mt-2 text-gray-600">
            <div className="flex items-center">
              <Mail size={16} className="mr-1" />
              <span>john@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span>+1 234 567 890</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}