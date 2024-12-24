import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from '../ui/Card';

export default function ScheduleForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ date, time, address });
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">Schedule Collection</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Calendar size={20} className="mr-2" />
            Collection Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Clock size={20} className="mr-2" />
            Preferred Time
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          >
            <option value="">Select a time slot</option>
            <option value="morning">Morning (9:00 - 11:00)</option>
            <option value="afternoon">Afternoon (14:00 - 16:00)</option>
            <option value="evening">Evening (17:00 - 19:00)</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <MapPin size={20} className="mr-2" />
            Collection Address
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={3}
            required
            placeholder="Enter your collection address"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Schedule Collection
        </button>
      </form>
    </Card>
  );
}