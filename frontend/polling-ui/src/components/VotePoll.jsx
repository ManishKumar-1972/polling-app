import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const VotePoll = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/polls`)
      .then(res => {
        const found = res.data.find(p => p.id === parseInt(id));
        setPoll(found);
      })
      .catch(err => console.error('Error fetching poll:', err));
  }, [id]);

  const vote = (option) => {
    axios.post(`http://localhost:8080/api/polls/${id}/vote/${option}`)
      .then(() => navigate(`/results/${id}`))
      .catch(err => console.error('Error voting:', err));
  };

  if (!poll) return <p>Loading poll...</p>;

  return (
    <div className="mt-4">
      <h2>{poll.question}</h2>
      <div className="d-grid gap-2 col-6 mx-auto">
        {[1, 2, 3, 4].map(num => (
          <button
            key={num}
            className="btn btn-outline-primary"
            onClick={() => vote(num)}
          >
            {poll[`option${num}`]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VotePoll;
