import { useState } from "react";
import "./App.css";

function FormValidation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    city: "",
    country: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    // First Name
  if (!formData.firstName.trim()) {
  newErrors.firstName = "First Name is required";
} else if (formData.firstName.length < 3) {
  newErrors.firstName = "Minimum 3 characters required";
} else if (formData.firstName.length > 20) {
  newErrors.firstName = "Maximum 20 characters allowed";
}

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (formData.lastName.length < 3) {
      newErrors.lastName = "Minimum 3 characters required";
    } else if (formData.lastName.length > 20) {
      newErrors.lastName = "Maximum 20 characters allowed";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Phone
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (formData.password.length > 15) {
      newErrors.password = "Password cannot exceed 15 characters";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Date of Birth
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 10) {
      newErrors.address = "Minimum 10 characters required";
    } else if (formData.address.length > 100) {
      newErrors.address = "Maximum 100 characters allowed";
    }

    // City
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (formData.city.length < 3) {
      newErrors.city = "Minimum 3 characters required";
    } else if (formData.city.length > 30) {
      newErrors.city = "Maximum 30 characters allowed";
    }

    // Country
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    } else if (formData.country.length < 3) {
      newErrors.country = "Minimum 3 characters required";
    } else if (formData.country.length > 30) {
      newErrors.country = "Maximum 30 characters allowed";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setSubmitted(false);
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
       <input
  type="text"
  name="firstName"
  placeholder="First Name"
  onChange={handleChange}
/>
        <span>{errors.firstName}</span>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <span>{errors.lastName}</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <span>{errors.phone}</span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span>

        {formData.confirmPassword &&
          formData.password === formData.confirmPassword && (
            <span className="matched">Passwords matched</span>
          )}

        <input
          type="date"
          name="dob"
          onChange={handleChange}
        />
        <span>{errors.dob}</span>

        <textarea
          name="address"
          placeholder="Address"
         
          onChange={handleChange}
        />
        <span>{errors.address}</span>

        <input
          type="text"
          name="city"
          placeholder="City"
          maxLength="30"
          onChange={handleChange}
        />
        <span>{errors.city}</span>

        <input
          type="text"
          name="country"
          placeholder="Country"
          maxLength="30"
          onChange={handleChange}
        />
        <span>{errors.country}</span>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p className="success">
          Form Submitted Successfully!
        </p>
      )}
    </div>
  );
}

export default FormValidation;