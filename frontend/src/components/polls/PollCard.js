// import React from 'react';
// import './PollCard.css'; // Assuming you have a CSS file for styling the poll card

// const PollCard = ({ poll, onClick }) => {
//   // Example poll object:
//   // const poll = {
//   //   id: 1,
//   //   title: 'What is your favorite programming language?',
//   //   description: 'Vote for your favorite programming language.',
//   //   totalVotes: 120,
//   // };

//   return (
//     <div className="poll-card" onClick={() => onClick(poll._id)}>
//       <h3 className="poll-title">{poll.title}</h3>
//       <p className="poll-description">{poll.description}</p>
//       <p className="poll-votes">Total Votes: {poll.totalVotes}</p>
//     </div>
//   );
// };

// export default PollCard;
import React from 'react';
import './PollCard.css'; // Assuming you have a CSS file for styling the poll card

const PollCard = ({ poll, onClick }) => {
  // Calculate total votes
  const totalVotes = poll.options?.reduce((sum, option) => sum + (option.count || 0), 0);

  return (
    <div className="poll-card" onClick={() => onClick(poll._id)}>
      <h3 className="poll-title">{poll.title}</h3>
      <p className="poll-description">{poll.description}</p>

      <div className="poll-options">
        {poll.options?.map((option) => (
          <div key={option._id} className="poll-option">
            <span className="option-text">{option.text}</span>
            <span className="option-count">({option.count} votes)</span>
          </div>
        ))}
      </div>

      <p className="poll-votes">Total Votes: {totalVotes}</p>
    </div>
  );
};

export default PollCard;
