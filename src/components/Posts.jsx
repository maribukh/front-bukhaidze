import "./Posts.css";
import postImg1 from "../assets/images/posts/postPhoto1.svg";
import postImg2 from "../assets/images/posts/postPhoto2.svg";
import postImg3 from "../assets/images/posts/postPhoto3.svg";
import postImg4 from "../assets/images/posts/postPhoto4.svg";
import postImg5 from "../assets/images/posts/postPhoto5.svg";
import postImg6 from "../assets/images/posts/postPhoto6.svg";
import postImg7 from "../assets/images/posts/postPhoto7.svg";
import postImg8 from "../assets/images/posts/postPhoto8.svg";
import postImg9 from "../assets/images/posts/postPhoto9.svg";

const posts = [
  {
    id: 1,
    image: postImg1,
    category: "Lifestyle",
    title: "Eat Right For Your Exercise Regime",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 2,
    image: postImg2,
    category: "Lifestyle",
    title: "The Look: Perfect Balance",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 3,
    image: postImg3,
    category: "Style",
    title: "Fun Things to Do in Rome",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 4,
    image: postImg4,
    category: "Style",
    title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 5,
    image: postImg5,
    category: "Lifestyle",
    title: "9 New Songs to Heat Up Your Fall Playlist",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 6,
    image: postImg6,
    category: "Events",
    title: "What You Need on Your Bedside Table",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 7,
    image: postImg7,
    category: "Travel",
    title: "When Two Wheels Are Better Than Four",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 8,
    image: postImg8,
    category: "Travel",
    title: "26 Living Room Ideas from the Homes of Top Designers",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
  {
    id: 9,
    image: postImg9,
    category: "Music",
    title: "What Makes Your City’s Style Unique",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    description:
      "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
  },
];

export default function Posts() {
  return (
    <section className="posts container">
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-meta">
              <span className="category">{post.category}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <div className="post-timeline">
              <p className="post-author">{post.author}</p>
              <span className="circle">●</span>
              <span className="date">{post.date}</span>
              <span className="circle">●</span>
              <span className="views">{post.views}</span>
            </div>

            <p className="post-description">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
