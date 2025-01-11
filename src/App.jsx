import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleAddToList = () => {
    setList([...list, inputValue]);
    setInputValue(''); // Clear the input field
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Item List </h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <br/>
      <button onClick={handleAddToList} style={{ marginTop: '10px', backgroundColor: 'green'  , padding: '5px 10px' }}>
        Add item
      </button>
      <ul style={{ marginTop: '20px' }}>
        {list.map((item, index) => (
          <li key={index}>{item || '(empty)'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
