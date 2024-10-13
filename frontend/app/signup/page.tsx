"use client";

import React, {useState} from 'react';
import Navbar from '../_components/Navbar/Navbar';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

export default function HomePage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });


    const handleAdminSignUp = () => {

    };

    const handleUserSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const {firstName, lastName, email, phone, password} = formData;
        if (!firstName || !lastName || !email || !phone || !password) {
            alert('All fields are required');
            return;
        }

        if (phone.length !== 10) {
            alert('Phone number should be 10 digits');
            return;
        }
        if (password.length < 6) {
            alert('Password should be atleast 8 characters');
            return;
        }
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                password,
                role: 'student',
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert('User registered successfully');
                }
            })
            .catch((err) => {
                alert('Something went wrong');
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, files} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? (files ? files[0] : null) : value,
        });
    };

    return (
        <>
        <Navbar />
        <div className="bg-govt_bg min-h-screen bg-cover bg-center">
            <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
                <form
                    className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 shadow-md">
                    <div className="text-blue-900 items-center">
                        <div className="text-3xl text-center pb-3">Registration</div>
                    </div>
                    <div className="w-3/4 mb-6">
                        <label htmlFor="firstName" className="text-black sr-only">First Name</label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const currentFormData = {...formData};
                                currentFormData.firstName = e.target.value;
                                setFormData(currentFormData);
                            }}
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const currentFormData = {...formData};
                                currentFormData.lastName = e.target.value;
                                setFormData(currentFormData);
                            }}
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const currentFormData = {...formData};
                                currentFormData.email = e.target.value;
                                setFormData(currentFormData);
                            }}
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const currentFormData = {...formData};
                                currentFormData.phone = e.target.value;
                                setFormData(currentFormData);
                            }}
                            type="tel"
                            name="phone"
                            id="phone"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Phone Number"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="password" className="text-black sr-only">Password</label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const currentFormData = {...formData};
                                currentFormData.password = e.target.value;
                                setFormData(currentFormData);
                            }}
                            type="password"
                            name="password"
                            id="password"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-12 flex justify-between">
                        <button
                            onClick={handleUserSignup}
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
        </>
    );
}
