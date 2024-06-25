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
  const [currentStep, setCurrentStep] = useState(0); // 0: Select Attribute, 1: Select Operation, 2: Enter Value

  const handleAttributeChange = (attribute) => {
    setCurrentAttribute(attribute);
    setCurrentStep(1); // Move to selecting operation
  };

  const handleOperationChange = (operation) => {
    setCurrentOperation(operation);
    setCurrentStep(2); // Move to entering value
  };

  const handleValueChange = (value) => {
    setCurrentValue(value);
  };

  const addFilter = () => {
    if (currentAttribute && currentOperation && currentValue) {
      const newFilter = { attribute: currentAttribute, operation: currentOperation, value: currentValue };
      setFilters([...filters, newFilter]);
      setCurrentAttribute(null);
      setCurrentOperation(null);
      setCurrentValue('');
      setCurrentStep(0); // Reset to selecting attribute for next filter
    }
  };

  const deleteFilter = (index) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(index, 1);
    setFilters(updatedFilters);
  };

  return (
    <div className="App">
      <div className="search-bar">
        <div className="filters flex">
          {filters.map((filter, index) => (
            <div key={index} className="filter ">
              {filter.attribute} {filter.operation} {filter.value}
              <span className="delete-icon" onClick={() => deleteFilter(index)}>×</span>
            </div>
          ))}
        </div>
        <div className="dropdowns">
          {currentStep === 0 && (
            <select onChange={(e) => handleAttributeChange(e.target.value)} value={currentAttribute || ''}>
              <option value="" disabled>Select attribute</option>
              {attributes.map(attr => <option key={attr} value={attr}>{attr}</option>)}
            </select>
          )}

          {currentStep === 1 && (
            <select onChange={(e) => handleOperationChange(e.target.value)} value={currentOperation || ''}>
              <option value="" disabled>Select operation</option>
              {operations.map(op => <option key={op} value={op}>{op}</option>)}
            </select>
          )}

          {currentStep === 2 && (
            <input 
              type="text" 
              placeholder="Enter value" 
              value={currentValue}
              onChange={(e) => handleValueChange(e.target.value)} 
              onBlur={addFilter}
            />
          )}

          {/* Display selected values in the search bar */}
          <div className="search-input">
            {currentAttribute && (
              <span className="selected-item">{currentAttribute}</span>
            )}
            {currentOperation && (
              <span className="selected-item">{currentOperation}</span>
            )}
            {currentValue && (
              <span className="selected-item">{currentValue}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
