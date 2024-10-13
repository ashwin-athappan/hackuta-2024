"use client";

import React, {useState, useEffect} from "react";
import Navbardb from "../_components/Navbardb";

export default function Dashboard() {
    const [userCount, setUserCount] = useState(0); // For live user coun
    const [user, setUser] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        sevisId: "123456789",
        address: "1234 University St, Apartment 1B",
    });

    const [tasks, setTasks] = useState({
        passport: null,
        leaseAgreement: null,
        i94: null,
        dateOfEntry: "",
        apartmentNumber: "",
        roommates: "",
        distanceFromCampus: "",
        busySchedule: "",
    });

    // Simulate fetching user count from backend
    useEffect(() => {
        const fetchUserCount = () => {
            // Assume backend API that provides the count
            const count = 120; // Example count
            setUserCount(count);
        };
        fetchUserCount();
    }, []);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setTasks((prevTasks) => ({
            ...prevTasks,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const email = localStorage.getItem("email");
        console.log({...tasks, email});
        // Handle backend submission logic here
        fetch("http://localhost:8080/api/student/update/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...tasks, email}),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            });
    };

    return (
        <>
            <Navbardb/>
            <div className="bg-gray-100 min-h-screen flex">
                {/* Main Dashboard Content */}
                <div className="flex-1">
                    {/* Dashboard Header */}
                    <section className="bg-white py-10">
                        <div className="container mx-auto px-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Welcome, {user.firstName} {user.lastName}
                            </h1>
                            <p className="text-gray-600">SEVIS ID: {user.sevisId}</p>
                            <p className="text-gray-600">Email: {user.email}</p>
                        </div>
                    </section>

                    {/* Negative Impact of Subletting Section */}
                    <section className="py-10 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                The Negative Impact of Subletting
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Subletting can lead to various problems for landlords, tenants, and communities,
                                including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Disruption of trust between landlords and tenants.</li>
                                <li>Increased risk of property damage.</li>
                                <li>Violation of lease agreements, leading to legal issues.</li>
                                <li>Increased competition for limited housing resources.</li>
                                <li>Potential safety and security risks for all residents.</li>
                            </ul>
                            <p className="text-gray-600 mb-4">
                                Statistics show that unauthorized subletting affects numerous communities:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Approximately 1 in 5 renters have sublet their apartment without permission.</li>
                                <li>In 2022, the estimated losses due to unauthorized subletting exceeded $15 billion in
                                    the U.S.
                                </li>
                                <li>Over 70% of landlords reported incidents of unauthorized subletting.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Statistics Counter Section */}
                    <section className="py-10 bg-white">
                        <div className="container mx-auto px-6 flex justify-around items-center">
                            <div className="border p-4 rounded-lg shadow-md text-center">
                                <h3 className="text-3xl font-bold text-blue-500">{userCount}</h3>
                                <p className="text-gray-600">Live Users</p>
                            </div>
                            <div className="border p-4 rounded-lg shadow-md text-center">
                                <h3 className="text-3xl font-bold text-blue-500">20%</h3>
                                <p className="text-gray-600">Unauthorized Subletting</p>
                            </div>
                            <div className="border p-4 rounded-lg shadow-md text-center">
                                <h3 className="text-3xl font-bold text-blue-500">15B</h3>
                                <p className="text-gray-600">Estimated Losses ($)</p>
                            </div>
                        </div>
                    </section>

                    {/* To-Do List Section */}
                    <section className="py-20">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Complete Your Profile</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                    {tasks.passport && (
                                        <p className="text-green-600 mt-2">
                                            {tasks.passport} uploaded successfully!
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
                                    {tasks.leaseAgreement && (
                                        <p className="text-green-600 mt-2">
                                            {tasks.leaseAgreement} uploaded successfully!
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
                                    {tasks.i94 && (
                                        <p className="text-green-600 mt-2">
                                            {tasks.i94} uploaded successfully!
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
                                        value={tasks.dateOfEntry}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded bg-gray-100 text-black"
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
                                        value={tasks.apartmentNumber}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded bg-gray-100 text-black"
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
                                        value={tasks.roommates}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded bg-gray-100 text-black"
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
                                        value={tasks.distanceFromCampus}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded bg-gray-100 text-black"
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

                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                                    >
                                        Submit Your Info
                                    </button>
                                </div>
                            </form>
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
