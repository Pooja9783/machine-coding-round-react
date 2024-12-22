import "./styles.css";
import React, { useState } from "react";

const accordionContent = [
  {
    id: 1,
    header: "Introduction to JavaScript",
    content:
      "JavaScript is a versatile programming language used for web development, enabling dynamic and interactive user interfaces.",
  },
  {
    id: 2,
    header: "Understanding HTML",
    content:
      "HTML (HyperText Markup Language) is the standard language for creating web pages, providing structure to content with elements like headings, paragraphs, and links.",
  },
  {
    id: 3,
    header: "CSS Basics",
    content:
      "CSS (Cascading Style Sheets) is used to style HTML content, including layouts, colors, fonts, and responsiveness.",
  },
  {
    id: 4,
    header: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable components and manage application state efficiently.",
  },
  {
    id: 5,
    header: "Node.js Overview",
    content:
      "Node.js is a runtime environment that allows you to run JavaScript on the server, enabling full-stack development with a single programming language.",
  },
  {
    id: 6,
    header: "Version Control with Git",
    content:
      "Git is a version control system that tracks changes in source code, facilitating collaboration and version management in development projects.",
  },
  {
    id: 7,
    header: "Frontend vs Backend",
    content:
      "Frontend development focuses on building user interfaces, while backend development deals with server-side logic, databases, and APIs.",
  },
  {
    id: 8,
    header: "Deploying Applications",
    content:
      "Deployment involves making a web application available to users. This includes hosting, domain setup, and server configuration.",
  },
];



const accordionNestedContent = [
  {
    id: 1,
    header: "Introduction to JavaScript",
    content:
      "JavaScript is a versatile programming language used for web development, enabling dynamic and interactive user interfaces.",
  },
  {
    id: 2,
    header: "Understanding HTML",
    content:
      "HTML (HyperText Markup Language) is the standard language for creating web pages, providing structure to content with elements like headings, paragraphs, and links.",
  },
  

  
];

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenNestedAccordion, setIsOpenNestedAccordion] = useState(null);
  const [forNestedAccordion, setForNestedAccordion] = useState(null);

  const handleAccordion = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const handleNestedAccordion = (id) => {
    setIsOpenNestedAccordion(isOpenNestedAccordion === id ? null : id);
  };

  const handleNestedAccordionInside = (id) => {
    setForNestedAccordion(forNestedAccordion === id ? null : id);
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
      <div className="accordion-content">
        <b>Nested Accordion</b>
        <div className="accordion">
          {accordionContent.map((e) => {
            return (
              <>
                <div className="accordion-contents">
                  <p>{e.header}</p>
                  <button onClick={() => handleNestedAccordion(e.id)}>
                    {isOpenNestedAccordion === e.id ? "-" : "+"}
                  </button>
                </div>
                <>
                  {isOpenNestedAccordion === e.id && (
                    <div className="nested-content-div">
                      {accordionNestedContent.map((e) => {
                        return (
                          <>
                            <div className="accordion-contents">
                              <p>{e.header}</p>
                              <button
                                onClick={() =>
                                  handleNestedAccordionInside(e.id)
                                }
                              >
                                {forNestedAccordion === e.id ? "-" : "+"}
                              </button>
                            </div>
                            <div className="content-div">
                              {forNestedAccordion === e.id && (
                                <p>{e.content}</p>
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  )}
                </>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
