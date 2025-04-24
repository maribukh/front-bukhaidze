import { useRef, useState } from "react";
import arrowDown from "../assets/images/icons/arrow-down.svg";
import arrowRight from "../assets/images/icons/arrow-right.svg";

export default function NavItemWithSubmenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <li
      className={`nav-item with-submenu`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="nav-link">
        {title}
        <img src={arrowDown} alt="arrow" className="submenu-arrow" />
      </span>

      <ul className="submenu" style={{ display: isOpen ? "flex" : "none" }}>
        {items.map((item, index) => (
          <li
            key={index}
            className={index === items.length - 1 ? "brd-none" : ""}
          >
            <span>{item}</span>
            <img src={arrowRight} alt="arrow" />
          </li>
        ))}
      </ul>
    </li>
  );
}
