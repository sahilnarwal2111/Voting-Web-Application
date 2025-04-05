import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePoll from '../hooks/usePoll';
import VoteForm from '../components/polls/VoteForm';
import Loader from '../components/common/Loader';

const PollDetail = () => {
  const { polls, loading, error, fetchPolls, voteOnPoll } = usePoll();
  const { pollId } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    if (!polls.length) {
      fetchPolls();
    } else {
      const selectedPoll = polls.find((p) => p.id === parseInt(pollId, 10));
      setPoll(selectedPoll);
    }
  }, [polls, pollId, fetchPolls]);

  const handleVote = async (option) => {
    await voteOnPoll(pollId, option);
    const updatedPoll = polls.find((p) => p.id === parseInt(pollId, 10));
    setPoll(updatedPoll);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!poll) {
    return <p>Poll not found.</p>;
  }

  return (
    <div className="poll-detail-container">
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>
      <h3>Total Votes: {poll.totalVotes}</h3>
      <VoteForm poll={poll} onSubmit={handleVote} />
    </div>
  );
};

export default PollDetail;