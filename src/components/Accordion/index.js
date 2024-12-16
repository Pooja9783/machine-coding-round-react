import "./styles.css";
import React, { useState } from "react";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen(true);
  };

  const handleAccordion= () => {
    setIsOpen(false);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-content">
        <div>Accordion</div>
        <div className="accordion">
          <p>One</p>
          {isOpen ? (
            <button onClick={handleAccordion}>-</button>
          ) : (
            <button onClick={handleAccordionClick}>+</button>
          )}
        </div>
        <div>{isOpen && <p>dsfghhhhhhhhhhhhhhhhhhhhhh</p>}</div>
      </div>
    </div>
  );
}
