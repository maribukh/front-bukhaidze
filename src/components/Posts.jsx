import { useEffect, useState } from "react";
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

  const openPost = (post) => setSelectedPost(post);
  const closePopup = () => setSelectedPost(null);

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
        {filteredPosts.length > 0 ? (
          filteredPosts
            .slice(0, 9)
            .map((post, index) => (
              <PostCard key={index} post={post} onClick={openPost} />
            ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>

      {selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
    </section>
  );
}
