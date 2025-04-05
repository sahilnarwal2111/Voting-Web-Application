import React from 'react';
import './PollCard.css'; // Assuming you have a CSS file for styling the poll card

const PollCard = ({ poll, onClick }) => {
  // Example poll object:
  // const poll = {
  //   id: 1,
  //   title: 'What is your favorite programming language?',
  //   description: 'Vote for your favorite programming language.',
  //   totalVotes: 120,
  // };

  return (
    <div className="poll-card" onClick={() => onClick(poll.id)}>
      <h3 className="poll-title">{poll.title}</h3>
      <p className="poll-description">{poll.description}</p>
      <p className="poll-votes">Total Votes: {poll.totalVotes}</p>
    </div>
  );
};

export default PollCard;