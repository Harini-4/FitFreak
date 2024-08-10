// src/components/NewsletterForm.js
import React, { useState } from 'react';
import '../Assets/css/news.css';

const NewsletterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Name:', name, 'Email:', email);
  };

  return (
    <div className="newsletter">
      <h2>Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="newsletter-input"
        />
        <input
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input"
        />
        <p className="newsletter-info">
        You can trust us. we only send promo offers, not a single spam.
        </p>
        <button type="submit" className="newsletter-button">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
