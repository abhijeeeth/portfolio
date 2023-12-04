'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <section id='contact'>
    <div className="container mx-auto my-16 p-8 bg-black/50 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md bg-gray-600/50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md  bg-gray-600/50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-2 w-full border rounded-md  bg-gray-600/50"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
    </section>
  );
};

export default ContactMe;
