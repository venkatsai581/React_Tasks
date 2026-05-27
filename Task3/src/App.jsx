import React, { useState } from "react";
import "./App.css";

// Array with 5 objects for List Rendering
const employeeList = [
  {
    id: 1,
    name: "Sai",
    age: 24,
    role: "Frontend Developer",
    location: "Hyderabad",
    skills: "React, JavaScript, CSS, Git, REST API",
  },
  {
    id: 2,
    name: "Priya",
    age: 26,
    role: "Backend Developer",
    location: "Bengaluru",
    skills: "Node.js, Express, MongoDB, JWT, API Design",
  },
  {
    id: 3,
    name: "Kumar",
    age: 23,
    role: "UI/UX Designer",
    location: "Chennai",
    skills: "Figma, Wireframing, Prototyping, Design Systems, Canva",
  },
  {
    id: 4,
    name: "Patel",
    age: 25,
    role: "Full Stack Developer",
    location: "Pune",
    skills: "React, Node.js, MongoDB, TypeScript, Docker",
  },
  {
    id: 5,
    name: "Rahul ",
    age: 27,
    role: "Project Manager",
    location: "Goa",
    skills: "Agile, Scrum, Planning",
  },
  {
    id: 6,
    name: "Krishna ",
    age: 27,
    role: "Software Intern",
    location: "Lucknow",
    skills: "HTML, CSS, JavaScript, React, Git",
  },
  {
    id: 7,
    name: "Praveen ",
    age: 27,
    role: "Data Analyst",
    location: "Delhi",
    skills: "Excel, SQL, Power BI, Python",
  },
  {
    id: 8,
    name: "Naveen ",
    age: 27,
    role: "DevOps Engineer",
    location: "Kerala",
    skills: "Linux, Docker, Kubernetes, AWS, CI/CD",
  },
];

// Login Component
function Login({ onLogin }) {
  return (
    <div className="auth-card">
      <h2>Login Component</h2>
      <p>Click the button below to enter the Home page.</p>
      <button className="primary-btn" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

// Home Component
function Home({ users, onLogout }) {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        <div>
          <h1>Home Component</h1>
          <p>Employee details rendered using map().</p>
        </div>
        <button className="secondary-btn" onClick={onLogout}>
          Logout
        </button>
      </div>

      <div className="card-grid">
        {/* LIST RENDERING START:
            map() is used here to display all objects dynamically */}
        {users.map((employee) => (
          <div className="profile-card" key={employee.id}>
            <h3>{employee.name}</h3>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Location:</strong> {employee.location}</p>
            <p><strong>Skills:</strong> {employee.skills}</p>
          </div>
        ))}
        {/* LIST RENDERING END */}
      </div>
    </div>
  );
}

export default function App() {
  // State variable for Conditional Rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {/* CONDITIONAL RENDERING START:
          If isLoggedIn is true, Home component will display
          Otherwise, Login component will display */}
      {isLoggedIn ? (
        <Home users={employeeList} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {/* CONDITIONAL RENDERING END */}
    </div>
  );
}