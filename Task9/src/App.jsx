import React, { useReducer, useState } from "react";
import "./App.css";
import { formReducer, initialState } from "./reducer";

function App() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    else if (formData.firstName.length < 3)
      newErrors.firstName = "Minimum 3 characters required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required";
    else if (formData.lastName.length < 3)
      newErrors.lastName = "Minimum 3 characters required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim())
      newErrors.phone = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit number";

    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.dob)
      newErrors.dob = "Date of Birth is required";

        if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 10) {
      newErrors.address = "Minimum 10 characters required";
    } else if (formData.address.length > 100) {
      newErrors.address = "Maximum 100 characters allowed";
    }

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.country.trim())
      newErrors.country = "Country is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully");

      dispatch({
        type: "RESET_FORM",
      });

      setErrors({});
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <span>{errors.firstName}</span>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span>{errors.lastName}</span>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>{errors.email}</span>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <span>{errors.phone}</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>{errors.password}</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span>{errors.confirmPassword}</span>
        </div>

        <div className="input-group">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <span>{errors.dob}</span>
        </div>

        <div className="input-group">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <span>{errors.address}</span>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <span>{errors.city}</span>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          <span>{errors.country}</span>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>

          <button
            type="button"
            onClick={() => {
              dispatch({ type: "RESET_FORM" });
              setErrors({});
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;