import { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "../assets/images/Logotype.svg";
import menuIcon from "../assets/images/icons/menu-burger.svg";
import closeIcon from "../assets/images/icons/close.svg";
import AutoWidthSelect from "./AutoWidthSelect";
import Search from "./Search";

export default function Header({ searchQuery, setSearchQuery }) {
  const headerRef = useRef(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`header ${hideHeader ? "header--hidden" : ""} ${
          isMobileMenuOpen ? "menu-open" : ""
        }`}
      >
        <div
          className={`top-header container ${
            isMobileMenuOpen ? "hide-logo" : ""
          }`}
        >
          <div
            className="burger-menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <img src={menuIcon} alt="menu" />
          </div>
          <div className="logo">
            <a href="#">
              <img src={logo} alt="site logo" />
            </a>
          </div>
          <Search
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            isMenuOpen={isMobileMenuOpen}
          />
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

      <div
        className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header pdng-bottom">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="site logo" />
            </a>
          </div>
          <img
            src={closeIcon}
            alt="close"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
        <ul className="mobile-nav-links">
          <li className="pdng-bottom">
            <AutoWidthSelect options={["Demos"]} defaultValue="Demos" />
          </li>
          <li className="pdng">
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
          <li className="pdng">
            <AutoWidthSelect options={["Features"]} defaultValue="Features" />
          </li>
          <li className="pdng">
            <AutoWidthSelect options={["Category"]} defaultValue="Category" />
          </li>
          <li className="pdng">
            <AutoWidthSelect options={["Shop"]} defaultValue="Shop" />
          </li>
          <li className="pdng brd-none">
            <button className="btn btn-header">Buy Now</button>
          </li>
        </ul>
      </div>
    </>
  );
}
