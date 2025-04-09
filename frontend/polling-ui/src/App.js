import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PollList from "./components/PollList";
import CreatePoll from "./components/CreatePoll";
import VotePoll from "./components/VotePoll";
import ResultsPoll from "./components/ResultsPoll"; // NEW import
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="container mt-4">
      <Header />
        <Routes>
          <Route path="/" element={<PollList />} />
          <Route path="/create" element={<CreatePoll />} />
          <Route path="/vote/:id" element={<VotePoll />} />
          <Route path="/results/:id" element={<ResultsPoll />} /> {/* NEW route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
