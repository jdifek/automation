"use client";

import { useState, useEffect } from "react";
import { fetchData } from "@/services/apiServise";
import { Hammer, LucideIcon } from "lucide-react";
import { useSendMessage } from "@/hooks/useTelegram";
import { useGetChatInfo } from "@/hooks/useTelegram";

interface PostManagerProps {
  platformName: string;
  PublishIcon: LucideIcon;
}

const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "-1002453211834";

const basicQuery =
  "You will be creating posts for Telegram channels. Help me with this. Here is a description of what the post should be like:{message}. Also add the confidence in how well the request is put so that it could be used to create a post in TG, in percentage terms by type [80%]";

const PostManager: React.FC<PostManagerProps> = ({
  platformName,
  PublishIcon,
}) => {
  const [receivedAnswer, setReceivedAnswer] = useState("");
  const [request, setRequest] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [interval, setInterval] = useState(0.01);
  const [allPosts, setAllPosts] = useState<string[]>([]);

 
  const {data} = useGetChatInfo(chatId);


  useEffect(() => {
    if (data && data.posts) {
      setAllPosts(data.posts.map((post: { text: string }) => post.text));
    }
  }, [data]);

  const { mutate: sendMessage } = useSendMessage();

  const handleAdd = async () => {
    const fullRequest = `${basicQuery} ${request}`;

    try {
      const data = await fetchData<{ answer: string }>(
        "/api/get-answer",
        "POST",
        { question: fullRequest }
      );

      setReceivedAnswer(data.answer);
    } catch (error) {
      setReceivedAnswer("Error getting answer. Please try again.");
      console.log(error);
    }
  };

  const handleSendMessage = () => {
    const confidenceMatch = receivedAnswer.match(
      /Confidence in request-\[(\d+)%\]/
    );
    if (confidenceMatch) {
      const confidence = parseInt(confidenceMatch[1], 10);
      if (confidence >= 80) {
        sendMessage(receivedAnswer);
        console.log("Message sent successfully.");
      } else {
        sendMessage("Confidence is below 80%, message not sent.");
      }
    } else {
      sendMessage("Confidence information not found in the answer.");
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i + 1);

  const handleIntervalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInterval(Number(event.target.value));
  };

  useEffect(() => {
    if (isChecked) {
      const id = window.setInterval(handleSendMessage, interval * 3600000);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isChecked, interval]);

  return (
    <>
      <div className="bg-white rounded-lg shadow p-6">
        <button onClick={() => console.log(allPosts)}>Вивести пости</button>
        <h2 className="text-xl font-semibold mb-4">
          Create
          {allPosts.length > 0 ? allPosts.join(", ") : "Немає постів"}
        </h2>

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
              onClick={handleSendMessage}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <PublishIcon className="w-5 h-5 mr-2" />
              Public on {platformName}
            </button>
          </div>
        </div>
      </div>
      {receivedAnswer && (
        <div className="bg-white rounded-lg shadow p-6 mt-3">
          <div className="space-y-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            {receivedAnswer}
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
