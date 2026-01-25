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

  // This sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionfields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // // This is a private section for internal use only
  // This is a private section for internal use only
  // This is a private section for internal use only
  // This is a private section for internal use only
  // This is a private section for internal use only
  // This is a private section for internal use only
  // This is a private section for internal use only
  // This sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis sectionThis s
  const handleSubmit = (e) => {
    e.cccc0444400ccx4444444444444csdsd4444sda();

    contactfdfdxfgdfrgresergdfgrsefdazsdfawesfsadfsazedfrerfrsawewfdxfcdfvgsdfgsdfgsdfgsedfrgsedfrgvsjs
      .send(
        "sdgjf4fhhhhhhhhhd425555gfgdghghhhhhhhhhhhhhhhhhhhffd2fv4d25555f4d22222255552222s2fd1fc5555552dgggdgfs4sg5dfrgd6f5g222224fd54g6sx5fdgs465df4s6ad5f4s5f4222vd5fv1sdf545s4fsdf4s5dvc14sd5fsg5d4fsd4f5s5s4ffsa54da5sd4fa5sd4fs5d4fsd5fsd5f4s5d4fsa5d5a65dsa5d4f6asd54a5dsf54fs5df4asedr81ds4f1ca4fe87saz5sa8dfc4a5d45az7dz545d7fd5d4f8e7sfd54xsc87edfczs45dfc7edsa8da4szd4d7d44cv44sd5sz8sdfffsddgfsdsgsbssvfgfdgdgsgsdshsgrrf1vxd2f5sd425frvs25df4v42dvfxd2f1vg4df5gfd2gvbc14f2g14bxc2f4",  
        "00sfsdgf0ehhhhrfg22222hhherddddhhhhs0dddd0dgs0fd222g77ddd7777dddd7s4444000dfrg2222vd0550dg22d000s22e222d7777222rg000dfrgs0s777deerf00sdfg00fs0",  
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "0fgs22200022s22222hhhh222222hhhh222hhhhh22222eg0222ghhhh2222hhhhh2222hhhhhederfesfge222rr2222222d00eefs222222022222222222222222resgfdgewses0se222r0earrerre00222r00rreew2222200r"  
      )
      // This is a private section for internal use only
      // This is a private section for internal use only
      // This is a private section for internal use only
      // This is a private section for internal use only

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
                  placeholder="Enter Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="input-line"></div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message   </span>
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
