"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

interface SignupData {
    username: string;
    email: string;
    password: string;
}

export default function SignupPage() {
    const [formData, setFormData] = useState<SignupData>({
        username: "",
        email: "",
        password: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Submit signup data (formData) to the server
        console.log(formData);
    };

    return (
        <div className="bg-govt_bg min-h-screen bg-cover bg-center">
            {/* Title Bar */}
            <div className="bg-blue-900 text-white py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="text-2xl font-semibold">Name of Government Website</div>
                    <div>
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex justify-center container mx-auto my-auto w-screen items-center flex-col">
                <div className="text-slate-700 items-center">
                    <div className="text-3xl text-center pb-3">Signup!</div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 shadow-md"
                >
                    <div className="w-3/4 mb-6">
                        <label htmlFor="username" className="text-black">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="email" className="text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="password" className="text-black">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-12">
                        <button
                            type="submit"
                            className="py-4 bg-blue-900 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="flex justify-center container mx-auto mt-6 text-slate-700 text-sm">
                    <div className="flex flex-col sm:flex-row justify-between md:w-1/2 items-center">
                        <Link href="/login">
                            <div className="flex hover:underline">Already have an account? Login</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
