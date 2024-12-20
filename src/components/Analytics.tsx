import React from 'react';
import { BarChart2, TrendingUp, Users, MessageCircle } from 'lucide-react';
import type { Analytics as AnalyticsType } from '../types';

const Analytics = () => {
  const stats: AnalyticsType = {
    likes: 1234,
    comments: 456,
    shares: 789,
    reach: 5000,
    engagement: 3.2,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Likes</p>
              <p className="text-2xl font-semibold">{stats.likes}</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Comments</p>
              <p className="text-2xl font-semibold">{stats.comments}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Reach</p>
              <p className="text-2xl font-semibold">{stats.reach}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Engagement Rate</p>
              <p className="text-2xl font-semibold">{stats.engagement}%</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <BarChart2 className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Add charts and detailed analytics here */}
    </div>
  );
};