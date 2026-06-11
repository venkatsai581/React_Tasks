import { useParams, Link } from "react-router-dom";

function UserDetails() {

  // useParams reads ID from URL
  const { id } = useParams();

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

  // Find Selected User
  const selectedUser = users.find(
    (user) => user.id === Number(id)
  );

  return (
    <div className="container">
      <div className="card">

        <h1>User Details</h1>

        {selectedUser ? (
          <>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>

            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>

            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>

            <p>
              <strong>Address:</strong> {selectedUser.address}
            </p>

            <p>
              <strong>City:</strong> {selectedUser.city}
            </p>
          </>
        ) : (
          <h3>User Not Found</h3>
        )}

        <Link to="/" className="back-btn">
          Back to User List
        </Link>

      </div>
    </div>
  );
}

export default UserDetails;