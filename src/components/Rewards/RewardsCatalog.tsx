import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Card } from '../ui/Card';
import RewardCard from './RewardCard';

const categories = ['All', 'Grocery', 'Electronics', 'Fashion', 'Food & Beverage'];

const rewards = [
  {
    id: 1,
    store: 'Whole Foods',
    title: '$20 Gift Card',
    points: 2000,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    store: 'Amazon',
    title: '$10 Voucher',
    points: 1000,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    store: 'Starbucks',
    title: 'Free Coffee',
    points: 500,
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800'
  },
  {
    id: 4,
    store: 'H&M',
    title: '25% Off Coupon',
    points: 750,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800'
  }
];

export default function RewardsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRewards = rewards.filter(reward => {
    const matchesCategory = selectedCategory === 'All' || reward.category === selectedCategory;
    const matchesSearch = reward.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         reward.store.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search rewards..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="text-gray-400" size={20} />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map(reward => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
}