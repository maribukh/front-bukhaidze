import { useEffect } from "react";
import "./Popup.css";

export default function Popup({ post, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ✕
        </button>
        <img
          src={post.img_2x || post.img}
          alt={post.title}
          className="popup-image"
        />
        <div className="popup-meta">
          <span className="popup-category">{post.tags}</span>
          <span> ● </span>
          <span className="popup-author">{post.autor}</span>
          <span> ● </span>
          <span className="popup-date">{post.date}</span>
          <span> ● </span>
          <span className="popup-views">{post.views} Views</span>
        </div>
        <h2 className="popup-title">{post.title}</h2>
        <p className="popup-text">{post.text}</p>
      </div>
    </div>
  );
}
