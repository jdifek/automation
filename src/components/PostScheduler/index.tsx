import React, { useState } from 'react';
import { Calendar, Image, Send } from 'lucide-react';
import type { Platform } from '../../types';

export const PostScheduler = () => {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [scheduledDate, setScheduledDate] = useState('');

  const platforms: { id: Platform; label: string }[] = [
    { id: 'instagram', label: 'Instagram' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'vk', label: 'VKontakte' },
    { id: 'telegram', label: 'Telegram' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post scheduling
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Schedule New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows={4}
            placeholder="What would you like to share?"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Platforms
          </label>
          <div className="flex gap-2">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                type="button"
                onClick={() => {
                  setSelectedPlatforms((prev) =>
                    prev.includes(platform.id)
                      ? prev.filter((p) => p !== platform.id)
                      : [...prev, platform.id]
                  );
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedPlatforms.includes(platform.id)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {platform.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Schedule Date & Time
          </label>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="datetime-local"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <Image className="w-5 h-5 mr-2" />
            Add Media
          </button>
          <button
            type="submit"
            className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Send className="w-5 h-5 mr-2" />
            Schedule Post
          </button>
        </div>
      </form>
    </div>
  );
};