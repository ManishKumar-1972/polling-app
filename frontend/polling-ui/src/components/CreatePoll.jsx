import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
  const navigate = useNavigate();

  const [poll, setPoll] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const handleChange = (e) => {
    setPoll({ ...poll, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/polls", poll)
      .then(() => navigate("/"))
      .catch((err) => console.error("Error creating poll:", err));
  };

  return (
    <div className="mt-4">
      <h2>Create a Poll</h2>
      <form onSubmit={handleSubmit}>
        {["question", "option1", "option2", "option3", "option4"].map(
          (field) => (
            <div className="mb-3" key={field}>
              <label className="form-label text-capitalize">{field}</label>
              <input
                type="text"
                className="form-control"
                name={field}
                value={poll[field]}
                onChange={handleChange}
                required
              />
            </div>
          )
        )}
        <button type="submit" className="btn btn-success">
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
