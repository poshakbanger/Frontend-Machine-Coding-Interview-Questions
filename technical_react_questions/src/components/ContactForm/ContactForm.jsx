import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required    
                style={{ width: "100%", padding: "0.5rem" }} 
            />
        </div>
        <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        ></textarea>
      </div>
      <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#007BFF", color: "#FFF", border: "none", cursor: "pointer" }}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
