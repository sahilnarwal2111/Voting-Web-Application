import React from 'react';
import usePoll from '../hooks/usePoll';
import PollCard from '../components/polls/PollCard';
import Loader from '../components/common/Loader';
import { useNavigate } from 'react-router-dom';

const PollsList = () => {
  const { polls, loading, error } = usePoll();
  const navigate = useNavigate();

  const handlePollClick = (pollId) => {
    navigate(`/polls/${pollId}`); // Navigate to the poll details or voting page
  };

  return (
    <div className="polls-list-container">
      <h1>All Polls</h1>

      {loading && <Loader />}
      {error && <p className="error-message">{error}</p>}

      <div className="polls-list">
        {polls.length > 0 ? (
          polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} onClick={handlePollClick} />
          ))
        ) : (
          <p>No polls available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PollsList;