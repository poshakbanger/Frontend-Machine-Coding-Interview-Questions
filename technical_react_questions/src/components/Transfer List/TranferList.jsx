import React, { useState } from 'react'

const TranferList = () => {
    // Initial items in each list
  const [leftList, setLeftList] = useState([
    { id: 1, name: "HTML", selected: false },
    { id: 2, name: "JavaScript", selected: false },
    { id: 3, name: "CSS", selected: false },
    { id: 4, name: "TypeScript", selected: false },
  ]);

  const [rightList, setRightList] = useState([
    { id: 5, name: "React", selected: false },
    { id: 6, name: "Angular", selected: false },
    { id: 7, name: "Vue", selected: false },
    { id: 8, name: "Svelte", selected: false },
  ]);

  // toggle selection of an item
  const toggleSelection = (id, list, setList) => {
    setList(list.map(item => item.id === id ? { ...item, selected: !item.selected } : item ));
  };

  // Move selected items from one list to another
  const moveSelected = (fromList, setFromList, toList, setToList) => {
    const selectedItems = fromList.filter(item => item.selected);
    const remainingItems = fromList.filter(item => !item.selected);

    setFromList(remainingItems);
    setToList([ ...toList, ...selectedItems.map(item => ({ ...item, selected: false }))]); // Reset selection
  }

  const moveAll = (fromList, setFromList, toList, setToList) => {
    setToList([...toList, ...fromList.map(item => ({ ...item, selected: false }))]) // reset selection
    setFromList([]);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", padding: "20px" }}>

      {/*Left List*/}
      <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
        {leftList.map(item => (
          <div key={item.id}>
            <input type="checkbox" checked={item.selected} onChange={() => toggleSelection(item.id, leftList, setLeftList)}/>
            {item.name}
          </div>
        ))}
      </div>

      {/*Buttons*/}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <button onClick={() => moveAll(rightList, setRightList, leftList, setLeftList)} disabled={rightList.length === 0}>&lt;&lt;</button>
        <button onClick={() => moveSelected(rightList, setRightList, leftList, setLeftList)} disabled={!rightList.some(item => item.selected)}>&lt;</button>
        <button onClick={() => moveSelected(leftList, setLeftList, rightList, setRightList)} disabled={!leftList.some(item => item.selected)}>&gt;</button>
        <button onClick={() => moveAll(leftList, setLeftList, rightList, setRightList)} disabled={leftList.length === 0}>&gt;&gt;</button>
      </div>

      {/* Right List */}
      <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
        {rightList.map(item => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => toggleSelection(item.id, rightList, setRightList)}
            /> {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TranferList