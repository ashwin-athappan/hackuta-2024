// pages/index.js

import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Intro Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              AI-Powered Subletting Detection for Fair Housing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Unauthorized subletting disrupts the integrity of housing systems
              and penalizes those who follow the rules. Our platform uses
              AI-driven risk analysis to help landlords and universities detect
              and prevent subletting violations, ensuring compliance and
              fairness for all. Whether you're managing properties or renting,
              our solution ensures everyone plays by the same rules.
            </p>
            <div className="flex justify-start">
              <a
                href="#features"
                className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/intro-image.png" // Replace with your image path
              alt="AI Housing Detection"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">AI Risk Assessment</h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze tenant behaviors to identify
                potential risks and unauthorized subletting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Real-Time Alerts</h3>
              <p className="text-gray-600">
                Get instant notifications about lease violations and risk
                assessments to take prompt action.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">User-Friendly Dashboard</h3>
              <p className="text-gray-600">
                Manage your properties and view risk reports through an intuitive
                dashboard designed for ease of use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>Ensures fairness in housing practices.</li>
            <li>Protects your investment with reliable monitoring.</li>
            <li>Promotes a compliant and trustworthy community.</li>
            <li>Empowers landlords and students with valuable insights.</li>
          </ul>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Developer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/dev1.png" // Replace with developer 1's image path
                alt="Alice Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Alice Johnson</h3>
              <p className="text-gray-600">Frontend Developer</p>
              <p className="text-gray-500">Passionate about creating seamless user experiences.</p>
            </div>
            {/* Developer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/dev2.png" // Replace with developer 2's image path
                alt="Brian Smith"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Brian Smith</h3>
              <p className="text-gray-600">Backend Developer</p>
              <p className="text-gray-500">Expert in database management and server-side logic.</p>
            </div>
            {/* Developer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/dev3.png" // Replace with developer 3's image path
                alt="Catherine Lee"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Catherine Lee</h3>
              <p className="text-gray-600">Machine Learning Engineer</p>
              <p className="text-gray-500">Focused on AI algorithms to enhance platform performance.</p>
            </div>
            {/* Developer 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/dev4.png" // Replace with developer 4's image path
                alt="David Kim"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">David Kim</h3>
              <p className="text-gray-600">UI/UX Designer</p>
              <p className="text-gray-500">Committed to delivering engaging and user-friendly designs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-blue-500 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/logo.png" // Replace with your logo path
            alt="FairHousing Logo"
            className="mb-8 w-32 mx-auto"
          />
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">We’d love to hear from you! Whether you have a question, feedback, or want to learn more about our platform, reach out to us.</p>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 w-full p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 w-full p-3 rounded"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="mb-4 w-full p-3 rounded"
            />
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-white">
        <p className="text-sm">© 2024 FairHousing. All rights reserved.</p>
        <p className="text-sm">Contact us: support@fairhousing.com | (123) 456-7890</p>
      </footer>
    </div>
  );
}
