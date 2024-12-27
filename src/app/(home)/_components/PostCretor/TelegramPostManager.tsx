"use client";
import { Send } from "lucide-react";
import PostManager from "./PostManager";
// import CheckboxWithImage from "../checkbox";

const TelegramPostManager = () => {
  return (
    <>
      <PostManager platformName="Telegram" PublishIcon={Send} />
      {/* <CheckboxWithImage
        label="Subscribe to channel"
        imageUrl="/path/to/image.jpg"
      // checked={checked}
        // onChange={handleCheckboxChange}
      />
      <div className="telegram-messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg.message.text}</div>
        ))}
      </div> */}
    </>
  );
};

export default TelegramPostManager;
