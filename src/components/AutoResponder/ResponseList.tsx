// import React from 'react';
import { Trash2 } from 'lucide-react';
import type { AutoResponse } from '../../types';

interface ResponseListProps {
  responses: AutoResponse[];
  onDelete: (id: string) => void;
}

const ResponseList = ({ responses, onDelete }: ResponseListProps) => {
  return (
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
            onClick={() => onDelete(response.id)}
            className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResponseList;