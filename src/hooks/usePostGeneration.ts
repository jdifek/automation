import { useState } from "react";
import { fetchData } from "@/services/apiServise";

export const usePostGeneration = (posts: string[], isChecked: boolean, request: string) => {
  const [receivedAnswer, setReceivedAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    const fullRequest = `You will be creating posts for Telegram channels. Help me with this. Here is a description of what the post should be like:
                          Here are the previous posts:
                          ${posts}.
                          ${isChecked ? "Based on the content above, generate something new and unique that is related, yet fresh and engaging." : `Now, here's the description for the new post: ${request}.`}
                          Also add the confidence in how well the request is put so that it could be used to create a post in TG, in percentage terms by type [80%];
                          **Response format:**  
                          Generated post (the content itself).
                          [10%] - for instance`;

    try {
      setLoading(true);
      const data = await fetchData<{ answer: string }>("/api/get-answer", "POST", { question: fullRequest });
      setReceivedAnswer(data.answer);
    } catch (error) {
      setReceivedAnswer("Error getting answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { receivedAnswer, loading, handleAdd };
};
