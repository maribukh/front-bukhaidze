import { useEffect, useState } from "react";
import "./Posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="posts container">
      <div className="posts-grid">
        {posts.slice(0, 9).map((post, index) => (
          <article key={index} className="post-card">
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
    </section>
  );
}
