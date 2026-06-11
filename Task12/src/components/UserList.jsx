import { Link } from "react-router-dom";

function UserList() {

  // User Data Array
  const users = [
    {
      id: 1,
      name: " Sai",
      email: "sai@gmail.com",
      phone: "9886548880",
      address: "gandhi nagar",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Yash",
      email: "yashyy@gmail.com",
      phone: "9876543211",
      address: "Anna Street",
      city: "Benglore",
    },
    {
      id: 3,
      name: "Venkat",
      email: "venkat@gmail.com",
      phone: "9889998669",
      address: "Barthi nagar",
      city: "Hyderabad",
    },
    {
      id: 4,
      name: "Kamal",
      email: "Kamal@gmail.com",
      phone: "9876511213",
      address: "Madhurai Street",
      city: "Pune",
    },
    {
      id: 5,
      name: "Varun",
      email: "varun@gmail.com",
      phone: "9876543212",
      address: "Dollar Colony",
      city: "Mumbai",
    },
  ];

  return (
    <div className="container">
      <div className="card">
        <h1>User List</h1>

        {/* Display User Names */}
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              
              {/* Passing User ID Through URL */}
              <Link to={`/user/${user.id}`} className="user-link">
                {user.name}
              </Link>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;