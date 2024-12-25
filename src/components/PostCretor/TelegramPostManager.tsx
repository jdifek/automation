import { Send } from "lucide-react";
import PostManager from "./PostManager";


const TelegramPostManager = () => {
  return (
    <PostManager
      platformName="Telegram"
      PublishIcon={Send}
    />
  );
};

export default TelegramPostManager