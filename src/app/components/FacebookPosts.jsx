"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const FacebookPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/facebook");
        console.log("response", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching Facebook posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Facebook Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.message}</p>
          <p>{new Date(post.created_time).toLocaleDateString()}</p>
          {post.attachments &&
            post.attachments.data.map((attachment, index) => <img key={index} src={attachment.media.image.src} alt="Facebook Post Image" />)}
        </div>
      ))}
    </div>
  );
};

export default FacebookPosts;
