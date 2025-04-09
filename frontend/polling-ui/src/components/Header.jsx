import React from "react";

const Header = () => {
  return (
    <header
      className="mb-4 py-3 px-4 rounded shadow-sm"
      style={{ backgroundColor: "#B0C4DE", color: "#343a40" }}
    >
      <h1 className="fw-bold m-0 d-flex align-items-center">
        🗳️ <span className="ms-2">Polling App</span>
      </h1>
    </header>
  );
};

export default Header;
