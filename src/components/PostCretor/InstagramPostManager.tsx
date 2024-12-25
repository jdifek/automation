import { Instagram } from "lucide-react";
import PostManager from "./PostManager";


const InstagramPostManager = () => {
  return (
    <PostManager
      platformName="Instagram"
      PublishIcon={Instagram}
    />
  );
};

export default InstagramPostManager