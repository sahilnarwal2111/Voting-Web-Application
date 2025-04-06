import React from 'react';
import { useNavigate } from 'react-router-dom';
import PollForm from '../components/polls/PollForm';
import usePoll from '../hooks/usePoll';

const CreatePoll = () => {
  console.log("Hello inside Create Poll")
  const { createPoll } = usePoll();
  const navigate = useNavigate();

  const handleCreatePoll = async (pollData) => {
    await createPoll(pollData);
    navigate('/admin-dashboard'); // Redirect to the admin dashboard or another page after poll creation
  };

  return (
    <div className="create-poll-container">
      <h1>Create a New Poll</h1>
      <PollForm onSubmit={handleCreatePoll} />
    </div>
  );
};

export default CreatePoll;