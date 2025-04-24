import { useState } from "react";
import closeIcon from "../assets/images/icons/close.svg";
import logo from "../assets/images/Logotype.svg";
import arrowDown from "../assets/images/icons/arrow-down.svg";
import "./MobileMenu.css";

const MENU_ITEMS = [
  {
    title: "Demos",
    submenu: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"],
  },
  {
    title: "Post",
    submenu: [
      "Post Header",
      "Post Layout",
      "Share Buttons",
      "Gallery Post",
      "Video Post",
    ],
  },
  { title: "Features", submenu: ["Dark Mode", "Sticky Sidebar"] },
  { title: "Category", submenu: ["Technology", "Lifestyle"] },
  { title: "Shop", submenu: ["Templates", "Plugins"] },
];

export default function MobileMenu({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header pdng-bottom">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="site logo" />
            </a>
          </div>
          <img src={closeIcon} alt="close" onClick={onClose} />
        </div>

        <ul className="mobile-nav-links">
          {MENU_ITEMS.map((item, index) => (
            <li key={index} className="pdng mobile-menu-item">
              <div
                className="mobile-menu-title"
                onClick={() => toggleSubmenu(index)}
              >
                <span>{item.title}</span>
                <img
                  src={arrowDown}
                  alt="arrow"
                  className={`submenu-arrow ${
                    openIndex === index ? "rotate" : ""
                  }`}
                />
              </div>

              <ul
                className={`mobile-submenu ${
                  openIndex === index ? "open" : ""
                }`}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="mobile-submenu-item">
                    {subItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="pdng brd-none">
            <button className="btn btn-header">Buy Now</button>
          </li>
        </ul>
      </div>
    </>
  );
}
