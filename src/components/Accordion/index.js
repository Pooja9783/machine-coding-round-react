import "./styles.css";
import React, { useState } from "react";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const accordionContent = [
    {
      id: 1,
      header: "one",
      content: "lorem one",
    },
    {
      id: 2,
      header: "two",
      content: "lorem two",
    },
    {
      id: 3,
      header: "three",
      content: "lorem three",
    },
    {
      id: 4,
      header: "four",
      content: "lorem four",
    },
  ];

  const handleAccordion = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-content">
        <b>Accordion</b>
        <div className="accordion">
          {accordionContent.map((e) => {
            return (
              <>
                <div className="accordion-contents">
                  <p>{e.header}</p>
                  <button onClick={() => handleAccordion(e.id)}>
                    {isOpen === e.id ? "-" : "+"}
                  </button>
                </div>
                <div className="content-div">
                  {isOpen === e.id && <p>{e.content}</p>}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
