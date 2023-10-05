import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsletter: false,
    profileImage: null,
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const updatedValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add the logic to submit the form data to the server or perform further actions here
  
    alert("Form data submitted successfully");
  
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      newsletter: false,
      profileImage: null,
      showPassword: false,
    });
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="input-field"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="input-field"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input-field"
            type={formData.showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="showPassword"
              checked={formData.showPassword}
              onChange={handleChange}
            />
            Show Password
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            <input
              className="file-input"
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
            />
            <span className="file-label">Upload Profile Image</span>
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            <input
              className="checkbox-input"
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Subscribe to Newsletter
          </label>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
