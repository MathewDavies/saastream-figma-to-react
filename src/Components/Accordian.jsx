import React from 'react';
import { useState, useEffect, useRef } from 'react';



const Accordion = ({ items }) => {
  return (
    <div className="max-w-[900px] w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }, []);
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="card w-full mb-8"  onClick={toggleAccordion}>
        <button

          className="w-full text-left text-3xl text-white px-4  text-lg font-medium focus:outline-none flex justify-between"
        >
            <span>{title}</span>
        <img 
          src={"/icons/arrow-up-diagonal.png"} 
          alt="toggle icon"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0' }}
      >
       <div ref={contentRef}  className="px-4 py-2 text-white base-text">
            {content}
          </div>        
      </div>
    </div>
    );
  };