import React, { useState } from "react";
import "./TabbedInterface.css";

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      content:
        "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more.",
    },
    {
      label: "Tab 2",
      content:
        "Content for Tab 2: You can add CSS to style your HTML elements and JavaScript to add interactivity to your web pages.",
    },
    {
      label: "Tab 3",
      content:
        "Content for Tab 3: React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive, and dynamic UI.",
    },
  ];
  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            classname={`tab ${activeTab === index ? "active" : ""} `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabbedInterface;
