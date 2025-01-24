import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
            <span className={`chevron ${index === activeIndex ? "open" : ""}`}>
              &#9660;
            </span>
          </div>
          <div
            className={`accordion-content ${
              index === activeIndex ? "expanded" : "collapsed"
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
