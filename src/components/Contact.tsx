"use client";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-form">
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              className="contact-input"
              placeholder="Your Name"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              id="email"
              className="contact-input"
              placeholder="Your Email"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              className="contact-textarea"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="contact-button"
            onClick={() => alert('Form submission is a demo. Contact Kelvin via email!')}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}