import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import users from "./data";
import "./App.css";

function UserTable() {

  // useSearchParams Hook
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL
  const currentPage = Number(searchParams.get("page")) || 1;

  const recordsPerPage = 5;

  // Total pages calculation
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // Calculate start and end index
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  // Display only current page records
  const currentUsers = users.slice(startIndex, endIndex);

  // Previous Page Function
  const handlePrevious = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  // Next Page Function
  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  return (
    <div className="container">
      <h1> Pagination Using useSearchParams</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;