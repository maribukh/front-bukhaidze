import { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  const headerRef = useRef(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      className={`header ${hideHeader ? "header--hidden" : ""}`}
    >
      <div className="logo">LOGO</div>
      <nav className="nav">
        <ul>
          <li>
            <select name="" id="">
              <option value="">Demos</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="post">Post</option>
              <option value="">Post Header</option>
              <option value="">Post Layout</option>
              <option value="">Share Button</option>
              <option value="">Gallery Post</option>
              <option value="">Video Post</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">Features</option>
            </select>
          </li>
          <li>
            <select name="category" id="">
              <option value="">Category</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">Shop</option>
            </select>
          </li>
          <li>
            <button className="btn btn-header">Buy Now</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
