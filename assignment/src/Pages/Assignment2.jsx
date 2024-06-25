import React, { useState } from 'react';


const attributes = [
  "container_id", "container_name", "severity_number", "body", 
  "trace_id", "span_id", "trace_flags", "severity_text"
];

const operations = [
  "#", "!", "IN", "NOT IN", "LIKE", "NOT LIKE", "CONTAINS"
];

function App() {
  const [filters, setFilters] = useState([]);
  const [currentAttribute, setCurrentAttribute] = useState(null);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState('');

  const addFilter = () => {
    if (currentAttribute && currentOperation && currentValue) {
      setFilters([...filters, { attribute: currentAttribute, operation: currentOperation, value: currentValue }]);
      setCurrentAttribute(null);
      setCurrentOperation(null);
      setCurrentValue('');
    }
  };

  return (
    <div className="App">
      <div className="search-bar">
        <div className="filters">
          {filters.map((filter, index) => (
            <div key={index} className="filter">
              {filter.attribute} {filter.operation} {filter.value}
            </div>
          ))}
        </div>
        <div className="dropdowns">
          <select onChange={(e) => setCurrentAttribute(e.target.value)} value={currentAttribute || ''}>
            <option value="" disabled>Select attribute</option>
            {attributes.map(attr => <option key={attr} value={attr}>{attr}</option>)}
          </select>

          {currentAttribute && (
            <select onChange={(e) => setCurrentOperation(e.target.value)} value={currentOperation || ''}>
              <option value="" disabled>Select operation</option>
              {operations.map(op => <option key={op} value={op}>{op}</option>)}
            </select>
          )}

          {currentOperation && (
            <input 
              type="text" 
              placeholder="Enter value" 
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)} 
              onBlur={addFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
