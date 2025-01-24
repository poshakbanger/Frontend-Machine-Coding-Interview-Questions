import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Tab 1", content: "This is the content for Tab 1." },
    { id: 1, label: "Tab 2", content: "This is the content for Tab 2." },
    { id: 2, label: "Tab 3", content: "This is the content for Tab 3." },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {tabs.map((tab) => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        border: "1px solid #ccc",
                        background: activeTab === tab.id ? "#007bff" : "#fff",
                        color: activeTab === tab.id ? "#fff" : "#000",
                        borderRadius: "5px",
                    }}>
                        {tab.label}
                </button>
            ))}
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
            <p>{tabs[activeTab].content}</p>
        </div>
    </div>
  );
};

export default Tabs;