import "../styles/Contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const socialLinks = [
    { id: 1, name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/yasirawan4831/" },
    { id: 2, name: "GitHub", icon: "fab fa-github", url: "https://github.com/yasirawan4831" },
    { id: 3, name: "Email", icon: "fas fa-envelope", url: "mailto:my3154831409@gmail.com" },
    { id: 4, name: "All Links", icon: "fas fa-link", url: "https://yasirawan4831.github.io/futuristic-links-dashboard/" },
    { id: 5, name: "Dev.to", icon: "fab fa-dev", url: "https://forem.com/yasirawan4831" },
    { id: 6, name: "CoderLegion", icon: "fas fa-copyright", url: "https://coderlegion.com/user/YasirAwan4831" },
    { id: 7, name: "Medium", icon: "fab fa-medium", url: "https://medium.com/@YasirAwan4831" },
    { id: 8, name: "Discord", icon: "fab fa-discord", url: "https://discord.com/users/1298290889373913149" },
    { id: 9, name: "YouTube", icon: "fab fa-youtube", url: "https://www.youtube.com/@YasirTech-t1d" },
  ];

  // Input handler for form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EmailJS form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j7wdhbe",   // 🔴  SERVICE ID 
        "template_63rkhzp",  // 🔴  TEMPLATE ID 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "JE2aT-H2O8d8g4Cc7"  // 🔴PUBLIC KEY 
      )
      .then(
        () => {
          setFormStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setFormStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Contact Header */}
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Get in touch and let’s create something amazing together!
          </p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE - Contact Info + Social Links */}
          <div className="contact-left">

            <h3>Get in touch</h3>
            <p>Have a brilliant idea? Let’s build it together.</p>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>my3154831409@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-globe"></i></div>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <p>https://github.com/yasirawan4831</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h2 className="social-title">Connect With Me</h2>
              <div className="social-grid">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="social-icon">
                      <i className={social.icon}></i>
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Send me a message</h3>
              <p className="form-subtitle">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="input-line"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="input-line"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="input-line"></div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>

              {formStatus && (
                <div className={`form-status ${formStatus}`}>
                  {formStatus === "success"
                    ? "Message sent successfully! I will get back to you soon."
                    : "Please fill in all fields or try again."}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
