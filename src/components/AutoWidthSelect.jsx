import { useEffect, useRef, useState } from "react";

export default function AutoWidthSelect({ options, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const spanRef = useRef(null);
  const selectRef = useRef(null);

  const updateWidth = () => {
    if (spanRef.current && selectRef.current) {
      const textWidth = spanRef.current.offsetWidth;
      const arrowOffset = 20;
      selectRef.current.style.width = `${textWidth + arrowOffset}px`;
    }
  };

  useEffect(() => {
    updateWidth();
  }, [value]);

  useEffect(() => {
    const timeout = setTimeout(updateWidth, 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="select-wrapper">
      <span ref={spanRef} className="select-hidden-width">
        {value}
      </span>
      <div className="select-container">
        <select
          ref={selectRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="select-dynamic"
        >
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}
