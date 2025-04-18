import { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "../assets/images/Logotype.svg";
import search from "../assets/images/icons/search.svg";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
  >
    <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
  </svg>
);

function AutoWidthSelect({ options, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const spanRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (spanRef.current && selectRef.current) {
      const width = spanRef.current.offsetWidth + 25; 
      selectRef.current.style.width = `${width}px`;
    }
  }, [value]);

  return (
    <div className="select-wrapper">
      <span ref={spanRef} className="select-hidden-width">
        {value}
      </span>
      <select
        ref={selectRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="select-dynamic"
        style={{
          paddingRight: "24px", // пространство для стрелки
        }}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="arrow-icon">
        <ArrowIcon />
      </div>
    </div>
  );
}

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
      <div className="top-header container">
        <div className="logo">
          <img src={logo} alt="site logo" />
        </div>
        <div className="search">
          <img src={search} alt="search-icon" />
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <AutoWidthSelect options={["Demos"]} defaultValue="Demos" />
          </li>
          <li>
            <AutoWidthSelect
              options={[
                "Post",
                "Post Header",
                "Post Layout",
                "Share Button",
                "Gallery Post",
                "Video Post",
              ]}
              defaultValue="Post"
            />
          </li>
          <li>
            <AutoWidthSelect options={["Features"]} defaultValue="Features" />
          </li>
          <li>
            <AutoWidthSelect options={["Category"]} defaultValue="Category" />
          </li>
          <li>
            <AutoWidthSelect options={["Shop"]} defaultValue="Shop" />
          </li>
          <li>
            <button className="btn btn-header">Buy Now</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
