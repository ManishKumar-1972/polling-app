import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls();
  }, []);

  const fetchPolls = () => {
    axios
      .get("http://localhost:8080/api/polls")
      .then((response) => setPolls(response.data))
      .catch((error) => console.error("Error fetching polls:", error));
  };

  const deletePoll = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this poll?");
    if (!confirmDelete) return;

    axios
      .delete(`http://localhost:8080/api/polls/${id}`)
      .then(() => setPolls(polls.filter((poll) => poll.id !== id)))
      .catch((error) => console.error("Error deleting poll:", error));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🗳️ All Polls</h2>
        <Link to="/create" className="btn btn-primary">
          + Create New Poll
        </Link>
      </div>

      <ul className="list-group">
        {polls.map((poll) => (
          <li
            key={poll.id}
            className="list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded"
          >
            <h5 className="mb-0">{poll.question}</h5>
            <div>
              <Link to={`/vote/${poll.id}`} className="btn btn-outline-success me-2">
                Vote
              </Link>
              <button
                onClick={() => deletePoll(poll.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollList;
