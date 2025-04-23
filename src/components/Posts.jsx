import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Posts.css";
import PostCard from "./PostCard";
import Popup from "./Popup";

export default function Posts({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter((post) => {
    const search = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(search) ||
      post.description?.toLowerCase().includes(search)
    );
  });

  return (
    <section className="posts container">
      <div className="posts-grid">
        {filteredPosts.slice(0, 9).map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <PostCard post={post} onClick={openPost} />
          </motion.div>
        ))}
      </div>

      {selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
    </section>
  );
}
