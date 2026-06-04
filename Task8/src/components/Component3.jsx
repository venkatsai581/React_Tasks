import { useContext } from "react";
import { AppContext } from "../App";

function Component3() {
  const {
    formData,
    setFormData,
    errors,
    validate,
    theme,
    successMsg,
  } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="card">
      <h2>Component 3 (Form)</h2>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <span>{errors.firstName}</span>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <span>{errors.lastName}</span>

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <span>{errors.phone}</span>

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        {successMsg && (
          <p className="success-message">
            {successMsg}
          </p>
        )}

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Component3;