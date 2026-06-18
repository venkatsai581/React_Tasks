import { useState } from "react";
import "../styles/Form.css";
function Contact() {
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [errors, setErrors] =
    useState({});

  const handleSubmit = e => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Name is required";
    }

    if (
      !form.email.includes("@")
    ) {
      newErrors.email =
        "Valid email required";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Message required";
    }

    setErrors(newErrors);

    if (
      Object.keys(newErrors)
        .length === 0
    ) {
      alert(
        "Message Sent Successfully"
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <span>{errors.name}</span>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e =>
            setForm({
              ...form,
              email:
                e.target.value,
            })
          }
        />

        <span>{errors.email}</span>

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={e =>
            setForm({
              ...form,
              message:
                e.target.value,
            })
          }
        />

        <span>
          {errors.message}
        </span>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;