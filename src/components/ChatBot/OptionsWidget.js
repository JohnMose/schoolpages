import React from 'react';

const OptionsWidget = ({ options, onOptionSelect }) => {
  return (
    <div className="options-widget">
      <p>Choose an option:</p>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onOptionSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsWidget;
