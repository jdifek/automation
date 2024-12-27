"use client";
import { Facebook } from "lucide-react";
import PostManager from "./PostManager";

const FacebookPostManager = () => {
  return <PostManager platformName="Facebook" PublishIcon={Facebook} />;
};

export default FacebookPostManager;
