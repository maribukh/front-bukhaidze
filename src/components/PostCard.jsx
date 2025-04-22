import "./Posts.css";

export default function PostCard({ post, onClick }) {
  return (
    <article className="post-card" onClick={() => onClick(post)}>
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
  );
}
