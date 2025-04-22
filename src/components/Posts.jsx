import { useEffect, useState } from "react";
import "./Posts.css";

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
          <article
            key={index}
            className="post-card"
            onClick={() => openPost(post)}
          >
            <img
              src={post.img}
              srcSet={`${post.img_2x} 2x`}
              alt={post.title}
              className="post-image"
            />
            <div className="post-meta">
              <span className="tags">{post.tags}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <div className="post-timeline">
              <span className="post-author">{post.autor}</span>
              <span className="circle">●</span>
              <span className="date">{post.date}</span>
              <span className="circle">●</span>
              <span className="views">{post.views} Views</span>
            </div>
            <p className="post-text">{post.text}</p>
          </article>
        ))}
      </div>

      {selectedPost && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ✕
            </button>
            <h2>{selectedPost.title}</h2>
            {/* <img src={post.img_2x} alt="" /> */}
            <p>{selectedPost.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
