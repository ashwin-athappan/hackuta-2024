"use client";

import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    sevisId: string;
    physicalAddress: string;
    apartmentNumber: string;
    passport: File | null;
    leaseAgreement: File | null;
}

export default function HomePage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        sevisId: '',
        physicalAddress: '',
        apartmentNumber: '',
        passport: null,
        leaseAgreement: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? (files ? files[0] : null) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., form data validation and sending data to the backend)
        console.log(formData); // For demonstration purposes
    };

    return (
        <div className="bg-govt_bg min-h-screen bg-cover bg-center">
            <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 shadow-md"
                >
                    <div className="text-blue-900 items-center">
                        <div className="text-3xl text-center pb-3">Registration</div>
                    </div>
                    <div className="w-3/4 mb-6">
                        <label htmlFor="firstName" className="text-black sr-only">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="First Name"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="lastName" className="text-black sr-only">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Last Name"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="email" className="text-black sr-only">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Email Address"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="phone" className="text-black sr-only">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Phone Number"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-12 flex justify-between">
                        <button
                            type="submit"
                            className="py-4 bg-blue-900 w-full rounded text-blue-50 font-bold hover:bg-blue-700 mr-2"
                        >
                            User-Sign up
                        </button>
                        
                        <button
                            type="submit"
                            className="py-4 bg-blue-900 w-full rounded text-blue-50 font-bold hover:bg-blue-700 ml-2"
                        >
                            Admin-Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
