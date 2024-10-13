"use client";

import React, { useState } from "react";
import Navbardb from "../_components/Navbardb";

export default function TenantProfile() {
  // Simulated data for the user's profile
  const [profileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    sevisId: "SEV123456789",
    apartmentNumber: "A-23",
    roommates: 3,
    distanceFromCampus: 2,
  });

  return (
    <>
      <Navbardb />
      <div className="bg-gray-100 min-h-screen flex">
        {/* Main Profile Content */}
        <div className="flex-1">
          {/* Profile Header */}
          <section className="bg-white py-10">
            <div className="container mx-auto px-6">
              <h1 className="text-3xl font-bold text-gray-800">
                My Profile
              </h1>
              <p className="text-gray-600">SEVIS ID: {profileData.sevisId}</p>
              <p className="text-gray-600">Email: {profileData.email}</p>
            </div>
          </section>

          {/* Profile Details Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h2>
              
              {/* Profile Details */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">Name</h3>
                <p className="text-gray-900">{profileData.firstName} {profileData.lastName}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">Apartment Number</h3>
                <p className="text-gray-900">{profileData.apartmentNumber}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">Number of Roommates</h3>
                <p className="text-gray-900">{profileData.roommates}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">Distance from Campus</h3>
                <p className="text-gray-900">{profileData.distanceFromCampus} miles</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="py-6 bg-gray-800 text-center text-white">
        <p className="text-sm">© 2024 SubletSuffers. All rights reserved.</p>
        <p className="text-sm">Contact us: support@SubletSuffers.com | (123) 456-7890</p>
      </footer>
    </>
  );
}
