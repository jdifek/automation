import { useState } from "react";
// import { Plus, Trash2 } from 'lucide-react';
import type { AutoResponse, Platform } from "../../../../types";
import ResponseForm from "./ResponseForm";
import ResponseList from "./ResponseList";

export const AutoResponder = () => {
  const [responses, setResponses] = useState<AutoResponse[]>([]);
  const [newResponse, setNewResponse] = useState({
    trigger: "",
    response: "",
    platform: "instagram" as Platform,
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
      setNewResponse({ trigger: "", response: "", platform: "instagram" });
    }
  };

  const handleDelete = (id: string) => {
    setResponses(responses.filter((response) => response.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Auto-Responses</h2>
      <ResponseForm
        newResponse={newResponse}
        setNewResponse={setNewResponse}
        onAdd={handleAdd}
      />
      <ResponseList responses={responses} onDelete={handleDelete} />
    </div>
  );
};
