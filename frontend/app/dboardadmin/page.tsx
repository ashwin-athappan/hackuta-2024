"use client";

import React, { useState, useEffect } from "react";
import Navbardb from "../_components/Navbardb";

const initialTenantsData = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    sevisId: "SEVIS123",
    uploaded: true,
    paymentPunctuality: "On Time",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    sevisId: "SEVIS456",
    uploaded: false,
    paymentPunctuality: "Late",
  },
  // Add more tenants as needed
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTenants, setFilteredTenants] = useState(initialTenantsData);
  const [newTenant, setNewTenant] = useState({
    firstName: "",
    lastName: "",
    email: "",
    sevisId: "",
    paymentPunctuality: "",
    passport: null,
    leaseAgreement: null,
    i94: null,
    dateOfEntry: "",
    apartmentNumber: "",
    roommates: "",
    distanceFromCampus: "",
    busySchedule: "",
  });

  useEffect(() => {
    const results = initialTenantsData.filter(tenant =>
      `${tenant.firstName} ${tenant.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTenants(results);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTenant((prevTenant) => ({
      ...prevTenant,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setNewTenant((prevTenant) => ({
        ...prevTenant,
        [name]: files[0],
      }));
    }
  };

  const handleAddTenant = (e) => {
    e.preventDefault();
    const newId = filteredTenants.length + 1; // Simple ID assignment for demonstration
    setFilteredTenants([...filteredTenants, { ...newTenant, id: newId, uploaded: false }]);
    setNewTenant({
      firstName: "",
      lastName: "",
      email: "",
      sevisId: "",
      paymentPunctuality: "",
      passport: null,
      leaseAgreement: null,
      i94: null,
      dateOfEntry: "",
      apartmentNumber: "",
      roommates: "",
      distanceFromCampus: "",
      busySchedule: "",
    }); // Reset form
  };

  // Statistics Calculation
  const totalTenants = filteredTenants.length;
  const uploadedTenants = filteredTenants.filter(tenant => tenant.uploaded).length;
  const paymentStats = {
    late: filteredTenants.filter(tenant => tenant.paymentPunctuality === "Late").length,
    onTime: filteredTenants.filter(tenant => tenant.paymentPunctuality === "On Time").length,
    early: filteredTenants.filter(tenant => tenant.paymentPunctuality === "Early").length,
  };

  return (
    <>
      <Navbardb />
      <div className="bg-gray-100 min-h-screen flex">
        <div className="flex-1">
          <section className="bg-white py-10">
            <div className="container mx-auto px-6">
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Search for tenants..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Statistics Dashboard</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Total Tenants</h3>
                  <p className="text-3xl">{totalTenants}</p>
                </div>
                <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Uploaded Info</h3>
                  <p className="text-3xl">{uploadedTenants}</p>
                </div>
                <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Payment Punctuality</h3>
                  <p className="text-3xl">Late: {paymentStats.late}, On Time: {paymentStats.onTime}, Early: {paymentStats.early}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tenants List Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tenants List</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="w-full bg-gray-200 text-gray-600">
                    <th className="py-2 text-blue-500 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">SEVIS ID</th>
                    <th className="py-2 px-4 border-b">Uploaded Info</th>
                    <th className="py-2 px-4 border-b">Payment Punctuality</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTenants.length > 0 ? (
                    filteredTenants.map(tenant => (
                      <tr key={tenant.id} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border-b">
                          {tenant.firstName} {tenant.lastName}
                        </td>
                        <td className="py-2 px-4 border-b">{tenant.email}</td>
                        <td className="py-2 px-4 border-b">{tenant.sevisId}</td>
                        <td className="py-2 px-4 border-b">
                          {tenant.uploaded ? "Yes" : "No"}
                        </td>
                        <td className="py-2 px-4 border-b">{tenant.paymentPunctuality}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-2 px-4 text-center">
                        No tenants found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add Tenant Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Tenant</h2>
              <form onSubmit={handleAddTenant} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={newTenant.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="p-3 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={newTenant.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="p-3 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={newTenant.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="p-3 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    name="sevisId"
                    value={newTenant.sevisId}
                    onChange={handleInputChange}
                    placeholder="SEVIS ID"
                    className="p-3 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Upload Passport */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Upload Passport
                  </h3>
                  <input
                    type="file"
                    name="passport"
                    accept=".pdf"
                    className="w-full p-3 rounded bg-gray-100"
                    onChange={handleFileUpload}
                  />
                  {newTenant.passport && (
                    <p className="text-green-600 mt-2">
                      {newTenant.passport.name} uploaded successfully!
                    </p>
                  )}
                </div>

                {/* Upload Lease Agreement */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Upload Lease Agreement
                  </h3>
                  <input
                    type="file"
                    name="leaseAgreement"
                    accept=".pdf"
                    className="w-full p-3 rounded bg-gray-100"
                    onChange={handleFileUpload}
                  />
                  {newTenant.leaseAgreement && (
                    <p className="text-green-600 mt-2">
                      {newTenant.leaseAgreement.name} uploaded successfully!
                    </p>
                  )}
                </div>

                {/* Upload I-94 PDF */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Upload I-94 PDF
                  </h3>
                  <input
                    type="file"
                    name="i94"
                    accept=".pdf"
                    className="w-full p-3 rounded bg-gray-100"
                    onChange={handleFileUpload}
                  />
                  {newTenant.i94 && (
                    <p className="text-green-600 mt-2">
                      {newTenant.i94.name} uploaded successfully!
                    </p>
                  )}
                </div>

                {/* Date of Entry */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Date of Entry
                  </h3>
                  <input
                    type="date"
                    name="dateOfEntry"
                    value={newTenant.dateOfEntry}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded bg-gray-100"
                  />
                </div>

                {/* Apartment Number */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Apartment Number
                  </h3>
                  <input
                    type="text"
                    name="apartmentNumber"
                    value={newTenant.apartmentNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded bg-gray-100"
                    placeholder="Apartment Number"
                  />
                </div>

                {/* Number of Roommates */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Number of Roommates
                  </h3>
                  <input
                    type="number"
                    name="roommates"
                    value={newTenant.roommates}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded bg-gray-100"
                    placeholder="Number of Roommates"
                  />
                </div>

                {/* Distance from Campus */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Distance from Campus
                  </h3>
                  <input
                    type="number"
                    name="distanceFromCampus"
                    value={newTenant.distanceFromCampus}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded bg-gray-100"
                    placeholder="Distance in Miles"
                  />
                </div>

                {/* Busy Schedule */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    How busy is your schedule?
                  </h3>
                  <div className="flex flex-col">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="busySchedule"
                        value="Busy"
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500 border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-blue-500">Busy</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="busySchedule"
                        value="Moderate"
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500 border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-blue-500">Moderate</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="busySchedule"
                        value="Loads of Free Time"
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500 border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-blue-500">Loads of Free Time</span>
                    </label>
                  </div>
                </div>

                {/* Payment Punctuality */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Payment Punctuality
                  </h3>
                  <div className="flex flex-col">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentPunctuality"
                        value="Late"
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500 border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-blue-500">Late</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentPunctuality"
                        value="On Time"
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500 border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-blue-500">On Time</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentPunctuality"
                        value="Early"
                        onChange={handleInputChange}
                        className="mr-2 text-blue-500 border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-blue-500">Early</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    Add Tenant
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h2>
              <ul className="list-disc pl-6">
                {filteredTenants.map(tenant => (
                  tenant.uploaded ? (
                    <li key={tenant.id} className="text-blue-500">
                      {tenant.firstName} {tenant.lastName} has uploaded their information.
                    </li>
                  ) : null
                ))}
                {filteredTenants.every(tenant => !tenant.uploaded) && (
                  <li className="text-gray-600">No tenants have uploaded their information yet.</li>
                )}
              </ul>
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
