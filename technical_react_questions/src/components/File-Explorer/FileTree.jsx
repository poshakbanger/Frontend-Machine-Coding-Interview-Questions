import React, { useState } from "react";
import { fileData } from "./fileData";

const FileTree = () => {
  const [expanded, setExpanded] = useState([]);

  // Toggle the expanded state of a directory
  const toggleExpanded = (id) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(id)) {
        return prevExpanded.filter((expandedId) => expandedId !== id);
      } else {
        return [...prevExpanded, id];
      }
    });
  };

  const renderTree = (items) => {
    return items
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item) => (
        <div key={item.id}>
          {/* Render directory or file */}
          {item.type === "directory" ? (
            <div>
              <button onClick={() => toggleExpanded(item.id)}>
                {expanded.includes(item.id) ? "-" : "+"}
              </button>
              {item.name}
              {expanded.includes(item.id) && (
                <div style={{ marginLeft: 20 }}>
                  {renderTree(item.children)}
                </div>
              )}
            </div>
          ) : (
            <div>{item.name}</div>
          )}
        </div>
      ));
  };

  return <div>{renderTree(fileData)}</div>;
};

export default FileTree;
