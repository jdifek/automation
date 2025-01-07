import { useEffect, useState } from "react";

export const useAutoPost = (isChecked: boolean, interval: number, receivedAnswer: string, handleSendMessage: () => void) => {
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    if (isChecked && interval > 0) {
      const id = window.setInterval(() => {
        if (receivedAnswer.trim()) {
          handleSendMessage();
        }
      }, interval * 3600000);
      setIntervalId(id);
    } else if (!isChecked && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isChecked, interval, receivedAnswer]);

  return intervalId;
};
