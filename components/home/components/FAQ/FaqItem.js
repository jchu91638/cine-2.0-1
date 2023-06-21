import React, { useState, useEffect, useRef } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="border-4 border-solid bg-black border-light rounded-2xl"
      ref={accordionRef}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="text-lg font-medium text-wah">{question}</div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-gray-300">
          <p className="text-wah font-thin font-primary text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
