import { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "../assets/images/Logotype.svg";
import menuIcon from "../assets/images/icons/menu-burger.svg";
import Search from "./Search";
import NavItemWithSubmenu from "./NavItemWithSubmenu";
import MobileMenu from "./MobileMenu";

export default function Header({ searchQuery, setSearchQuery }) {
  const headerRef = useRef(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    }

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
          <ul className="main-ul">
            <NavItemWithSubmenu
              title="Demos"
              items={["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"]}
            />
            <NavItemWithSubmenu
              title="Post"
              items={[
                "Post Header",
                "Post Layout",
                "Share Buttons",
                "Gallery Post",
                "Video Post",
              ]}
            />
            <NavItemWithSubmenu
              title="Features"
              items={["Dark Mode", "Sticky Sidebar"]}
            />
            <NavItemWithSubmenu
              title="Category"
              items={["Technology", "Lifestyle"]}
            />
            <NavItemWithSubmenu title="Shop" items={["Templates", "Plugins"]} />
            <li>
              <button className="btn btn-header">Buy Now</button>
            </li>
          </ul>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
