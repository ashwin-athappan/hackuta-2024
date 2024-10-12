"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    fullName: string;
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
        fullName: '',
        email: '',
        phone: '',
        sevisId: '',
        physicalAddress: '',
        apartmentNumber: '',
        passport: null,
        leaseAgreement: null,
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

    const handleFileChange = (
        e: ChangeEvent<HTMLInputElement>,
        fieldName: keyof Omit<FormData, 'fullName' | 'email' | 'phone' | 'sevisId' | 'physicalAddress' | 'apartmentNumber'>
    ) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                [fieldName]: e.target.files[0],
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here, you can send formData to your server or perform other actions
        console.log(formData);
    };

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
            
            <div className="flex justify-center container mx-auto my-auto w-screen items-center flex-col">
                <div className="text-slate-100 items-center">
                    <div className="text-3xl text-center pb-3">Registration</div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 shadow-md"
                >
                    <div className="w-3/4 mb-6">
                        <label htmlFor="fullName" className="text-black sr-only">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="email" className="text-black sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="phone" className="text-black sr-only">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="sevisId" className="text-black sr-only">
                            SEVIS ID
                        </label>
                        <input
                            type="text"
                            name="sevisId"
                            id="sevisId"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="SEVIS ID"
                            value={formData.sevisId}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="physicalAddress" className="text-black sr-only">
                            Physical Address
                        </label>
                        <input
                            type="text"
                            name="physicalAddress"
                            id="physicalAddress"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Physical Address"
                            value={formData.physicalAddress}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="apartmentNumber" className="text-black sr-only">
                            Apartment Number
                        </label>
                        <input
                            type="text"
                            name="apartmentNumber"
                            id="apartmentNumber"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Apartment Number"
                            value={formData.apartmentNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="passport" className="text-black">
                            Upload Passport:
                        </label>
                        <input
                            type="file"
                            name="passport"
                            id="passport"
                            accept=".pdf,.jpg,.png"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            onChange={(e) => handleFileChange(e, 'passport')}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="leaseAgreement" className="text-black">
                            Upload Lease Agreement:
                        </label>
                        <input
                            type="file"
                            name="leaseAgreement"
                            id="leaseAgreement"
                            accept=".pdf,.jpg,.png"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            onChange={(e) => handleFileChange(e, 'leaseAgreement')}
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-12">
                        <button
                            type="submit"
                            className="py-4 bg-blue-900 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
