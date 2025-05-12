import React, { useState } from 'react';
import '../assets/Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.message);
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        <a href="https://leetcode.com/yourusername" target="_blank">LeetCode</a>
      </div>
    </section>
  );
};

export default Contact;
