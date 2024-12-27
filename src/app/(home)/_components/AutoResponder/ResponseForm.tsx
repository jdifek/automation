import React from "react";
import { Plus } from "lucide-react";
import type { Platform } from "../../../../types";

interface ResponseFormProps {
  newResponse: {
    trigger: string;
    response: string;
    platform: Platform;
  };
  setNewResponse: React.Dispatch<
    React.SetStateAction<{
      trigger: string;
      response: string;
      platform: Platform;
    }>
  >;
  onAdd: () => void;
}

const ResponseForm = ({
  newResponse,
  setNewResponse,
  onAdd,
}: ResponseFormProps) => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          value={newResponse.trigger}
          onChange={(e) =>
            setNewResponse({ ...newResponse, trigger: e.target.value })
          }
          placeholder="Trigger keyword"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          value={newResponse.response}
          onChange={(e) =>
            setNewResponse({ ...newResponse, response: e.target.value })
          }
          placeholder="Auto response"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <select
          value={newResponse.platform}
          onChange={(e) =>
            setNewResponse({
              ...newResponse,
              platform: e.target.value as Platform,
            })
          }
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="instagram">Instagram</option>
          <option value="telegram">Telegram</option>
          <option value="vk">VKontakte</option>
        </select>
      </div>
      <button
        onClick={onAdd}
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Response
      </button>
    </div>
  );
};

export default ResponseForm;
