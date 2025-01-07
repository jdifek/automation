import React, { useState } from "react";
import { Hammer, LucideIcon } from "lucide-react";
import { useSendMessage } from "@/hooks/useTelegram";
import { useSavedPosts } from "@/hooks/useSavedPosts";
import { usePostGeneration } from "@/hooks/usePostGeneration";
import { useAutoPost } from "@/hooks/useAutoPost";
import { utilFunction } from "@/utils/utilFunction";

interface PostManagerProps {
  platformName: string;
  PublishIcon: LucideIcon;
}

const PostManager: React.FC<PostManagerProps> = ({ platformName, PublishIcon }) => {
  const [request, setRequest] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [interval, setInterval] = useState(0.01);

  const [posts, setPosts] = useSavedPosts();
  const { receivedAnswer, loading, handleAdd } = usePostGeneration(posts, isChecked, request);
  const { mutate: sendMessage } = useSendMessage();

  const handleSendMessage = async () => {
    if (!receivedAnswer.trim()) {
      console.error("No answer received. Cannot send an empty message.");
      return;
    }

    if (isChecked) {
      handleAdd();
    }

    const parsedAnswer = utilFunction(receivedAnswer);

    if (parsedAnswer.confidence >= 80) {
      try {
        sendMessage(parsedAnswer.text);
        setPosts((prevPosts) => [...prevPosts, parsedAnswer.text]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      console.warn(`Confidence too low (${parsedAnswer.confidence}%). Message not sent.`);
    }
  };

  useAutoPost(isChecked, interval, receivedAnswer, handleSendMessage);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i + 1);

  const handleIntervalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInterval(Number(event.target.value));
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
              onClick={() => {
                handleAdd(), setRequest("");
              }}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Hammer className="w-5 h-5 mr-2" />
              Create
            </button>
            <button
              onClick={handleSendMessage}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <PublishIcon className="w-5 h-5 mr-2" />
              Public on {platformName}
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center my-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}

      {receivedAnswer && !loading && (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
          <div className="space-y-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            {utilFunction(receivedAnswer).text}
          </div>
        </div>
      )}

      <div className="flex justify-between w-full bg-gray-100 mt-6">
        <div className="w-1/2 bg-white rounded-lg shadow p-6">
          <label className="flex items-center space-x-3 mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="text-gray-700">Auto posts</span>
          </label>

          <div className="flex flex-col space-y-2">
            <label htmlFor="time-interval" className="text-gray-700">
              Select Time Interval (hours):
            </label>
            <select
              id="time-interval"
              className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={interval}
              onChange={handleIntervalChange}
            >
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour} {hour === 1 ? "hour" : "hours"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostManager;
