import { useState, useEffect } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import closeIcon from "../assets/images/icons/close.svg";
import "./Search.css";

export default function Search({ searchQuery, onSearchChange, isMenuOpen }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSearchInput = () => {
    if (!isMenuOpen) {
      setIsInputVisible((prev) => !prev);
    }
  };

  const closeSearch = () => setIsInputVisible(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);

      if (!isNowMobile) {
        setIsInputVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsInputVisible(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className={`search-container ${isMenuOpen ? "disabled" : ""}`}>
        <img
          src={searchIcon}
          alt="search"
          className="search-icon"
          onClick={toggleSearchInput}
        />
        {!isMobile && isInputVisible && (
          <input
            type="text"
            className="search-input"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            autoFocus
          />
        )}
      </div>

      {isMobile && isInputVisible && (
        <div className="mobile-search-modal">
          <div className="mobile-search-box">
            <input
              type="text"
              className="mobile-search-input"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              autoFocus
            />
            <button
              className="mobile-search-close"
              onClick={closeSearch}
              aria-label="Close search"
            >
              <img src={closeIcon} alt="close" width="20" height="20" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
