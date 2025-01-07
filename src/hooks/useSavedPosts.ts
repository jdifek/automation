import { useState, useEffect } from "react";

export const useSavedPosts = () => {
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return [posts, setPosts] as const;
};
