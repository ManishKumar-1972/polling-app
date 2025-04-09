import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ResultsPoll = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/polls`)
      .then(res => {
        const found = res.data.find(p => p.id === parseInt(id));
        setPoll(found);
      })
      .catch(err => console.error('Error fetching poll:', err));
  }, [id]);

  if (!poll) return <p>Loading results...</p>;

  return (
    <div className="mt-4">
      <h2>{poll.question}</h2>
      <ul className="list-group col-6 mx-auto mb-3">
        {[1, 2, 3, 4].map(num => (
          <li key={num} className="list-group-item">
            {poll[`option${num}`]} — Votes: {poll[`votes${num}`]}
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn-secondary">Back to All Polls</Link>
    </div>
  );
};

export default ResultsPoll;
