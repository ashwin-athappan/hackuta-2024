
"use client";
import React, { useState } from "react";
import Navbardb from "../_components/Navbar/Navbar";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can replace this with actual API integration)
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbardb />
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/p3.jpg')", // Replace with your image path
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have a question or feedback? Feel free to reach out to us using the
            form below, and we'll get back to you as soon as possible!
          </p>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <strong>Thank you!</strong> Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                className="w-full p-3 border border-gray-300 rounded h-32"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="py-6 bg-gray-800 text-center text-white">
        <p className="text-sm">© 2024 SubletSuffers. All rights reserved.</p>
        <p className="text-sm">Contact us: support@SubletSuffers.com | (123) 456-7890</p>
      </footer>
    </>
  );
}
