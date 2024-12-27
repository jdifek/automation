"use client";
import { Video } from "lucide-react";
import PostManager from "./PostManager";


const TikTokPostManager = () => {
  return (
    <PostManager
      platformName="TikTok"
      PublishIcon={Video}
    />
  );
};

export default TikTokPostManager