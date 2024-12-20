import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { AutoResponse, Platform } from '../types';

const AutoResponder = () => {
  const [responses, setResponses] = useState<AutoResponse[]>([]);
  const [newResponse, setNewResponse] = useState({
    trigger: '',
    response: '',
    platform: 'instagram' as Platform,
  });

  const handleAdd = () => {
    if (newResponse.trigger && newResponse.response) {
      setResponses([
        ...responses,
        {
          id: Date.now().toString(),
          ...newResponse,
          isActive: true,
        },
      ]);
      setNewResponse({ trigger: '', response: '', platform: 'instagram' });
    }
  };

  const handleDelete = (id: string) => {
    setResponses(responses.filter((response) => response.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Auto-Responses</h2>
      
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            value={newResponse.trigger}
            onChange={(e) => setNewResponse({ ...newResponse, trigger: e.target.value })}
            placeholder="Trigger keyword"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={newResponse.response}
            onChange={(e) => setNewResponse({ ...newResponse, response: e.target.value })}
            placeholder="Auto response"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <select
            value={newResponse.platform}
            onChange={(e) => setNewResponse({ ...newResponse, platform: e.target.value as Platform })}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="instagram">Instagram</option>
            <option value="telegram">Telegram</option>
            <option value="vk">VKontakte</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Response
        </button>
      </div>

      <div className="space-y-4">
        {responses.map((response) => (
          <div
            key={response.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Trigger</p>
                <p className="font-medium">{response.trigger}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Response</p>
                <p className="font-medium">{response.response}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Platform</p>
                <p className="font-medium capitalize">{response.platform}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(response.id)}
              className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};