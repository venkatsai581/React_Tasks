import React from "react";

function Home() {
  const employees = [
    {
      name: "Venkat",
      age: 22,
      role: "Frontend Developer",
      location: "Hyderabad",
      skills: "HTML, CSS, JavaScript",
    },
    {
      name: "Rahul",
      age: 24,
      role: "Backend Developer",
      location: "Bangalore",
      skills: "Java, Spring Boot, MySQL",
    },
    {
      name: "Sneha",
      age: 23,
      role: "UI/UX Designer",
      location: "Chennai",
      skills: "Figma, Photoshop, Canva",
    },
    {
      name: "Aman",
      age: 25,
      role: "Cloud Engineer",
      location: "Pune",
      skills: "AWS, Docker, Kubernetes",
    },
    {
      name: "Priya",
      age: 21,
      role: "Full Stack Developer",
      location: "Delhi",
      skills: "React, Node.js, MongoDB",
    },
  ];

  return (
    <div className="container">
      <h1>🏠 Employee Dashboard</h1>

      <div className="card-container">
        {employees.map((employee, index) => (
          <div className="card" key={index}>
            <h2>{employee.name}</h2>

            <p>
              <strong>Age:</strong> {employee.age}
            </p>

            <p>
              <strong>Role:</strong> {employee.role}
            </p>

            <p>
              <strong>Location:</strong> {employee.location}
            </p>

            <p>
              <strong>Skills:</strong> {employee.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;