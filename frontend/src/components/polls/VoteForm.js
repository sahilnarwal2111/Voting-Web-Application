import React, { useState } from 'react';
import './VoteForm.css'; // Assuming you have a CSS file for styling the vote form

const VoteForm = ({ poll, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!selectedOption) {
      setError('Please select an option to vote.');
      return;
    }

    onSubmit(selectedOption);
    setSelectedOption('');
  };

  return (
    <div className="vote-form-container">
      <h2>{poll.title}</h2>
      <p>{poll.description}</p>
      <form onSubmit={handleSubmit}>
        <div className="options-group">
          {poll.options.map((option, index) => (
            <div key={index} className="option-item">
              <input
                type="radio"
                id={`option-${index}`}
                name="vote-option"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Vote</button>
      </form>
    </div>
  );
};

export default VoteForm;