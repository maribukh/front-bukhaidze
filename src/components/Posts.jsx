import { useEffect, useState } from "react";
import "./Posts.css";
import PostCard from "./PostCard";
import Popup from "./Popup";

export default function Posts() {
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

  return (
    <section className="posts container">
      <div className="posts-grid">
        {posts.slice(0, 9).map((post, index) => (
          <PostCard key={index} post={post} onClick={openPost} />
        ))}
      </div>

      {selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
    </section>
  );
}
