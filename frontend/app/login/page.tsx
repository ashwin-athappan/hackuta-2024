"use client";

import Link from "next/link";

export default function Login() {
    return (
        <div className="bg-govt_bg min-h-screen bg-cover bg-center">
            {/* Title Bar */}
            <div className="bg-blue-900 text-white py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="text-2xl font-semibold">
                        Name of Government Website
                    </div>
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
        </div>
    );
}
