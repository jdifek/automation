import { useState } from "react";
import { Send, Hammer } from "lucide-react";
import formatText from "../../utils/convertText";
import { fetchData } from "../../services/apiServise";

export const TelegramPostManager = () => {
  const [receivedAnswer, setReceivedAnswer] = useState("");
  const [request, setRequest] = useState("");

  const handleAdd = async () => {
    try {
      const data = await fetchData<{ answer: string }>("/api/get-answer", "POST", { question: request });
      setReceivedAnswer(data.answer);
    } catch (error) {
      setReceivedAnswer("Error getting answer. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Create</h2>

        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Trigger keyword"
              className="p-2 border border-gray-300 rounded-lg md:col-span-2"
            />
            <button
              onClick={handleAdd}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Hammer className="w-5 h-5 mr-2" />
              Create
            </button>
            <button
              // onClick={}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Send className="w-5 h-5 mr-2" />
              Public on Tellegam
            </button>
          </div>
        </div>
      </div>
      {receivedAnswer && (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
          <div className="space-y-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            {formatText(receivedAnswer)}
          </div>
        </div>
      )}
    </>
  );
};
