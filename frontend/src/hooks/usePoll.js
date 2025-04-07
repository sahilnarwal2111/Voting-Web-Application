import { useState, useEffect } from 'react';
import axios from 'axios';

const usePoll = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all polls
  const fetchPolls = async () => {
    console.log("Fetching Polls...")
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8080/api/polls');
      setPolls(response.data.data);
      console.log(response.data)
    } catch (err) {
      console.error('Failed to fetch polls:', err);
      setError(err.response?.data?.message || 'Failed to fetch polls.');
    } finally {
      setLoading(false);
    }
  };

  // Create a new poll
  const createPoll = async (pollData) => {
    setError(null);
    try {
      const formattedData = {
        ...pollData,
        options: pollData.options.map(option => ({ text: option }))
      };
      // const response = await axios.post('http://localhost:8080/api/polls', pollData);
      console.log('Sending Poll Data:', pollData);
      const token = localStorage.getItem('token');
      console.log('Auth Token:', token);

      const response = await axios.post(
        'http://localhost:8080/api/polls',
        formattedData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }
      );
      
      setPolls((prevPolls) => [...prevPolls, response.data]);
    } catch (err) {
      console.error('Failed to create poll:', err);
      setError(err.response?.data?.message || 'Failed to create poll.');
    }
  };

  // Vote on a poll
  const voteOnPoll = async (pollId, option) => {
    setError(null);
    try {
      const response = await axios.post(`/api/polls/${pollId}/vote`, { option });
      setPolls((prevPolls) =>
        prevPolls.map((poll) =>
          poll.id === pollId ? { ...poll, ...response.data } : poll
        )
      );
    } catch (err) {
      console.error('Failed to vote on poll:', err);
      setError(err.response?.data?.message || 'Failed to vote on poll.');
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  return { polls, loading, error, fetchPolls, createPoll, voteOnPoll };
};

export default usePoll;