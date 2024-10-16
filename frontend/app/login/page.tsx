"use client";

import Link from "next/link";
import React, {useState} from "react";
import Navbar from "../_components/Navbar/Navbar";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                localStorage.setItem("role", data.role);
                localStorage.setItem("email", data.email);
                if (data.role === "admin") {
                    window.location.href = "/dboardadmin";
                } else {
                    window.location.href = "/dboarduser";
                }
            })
    };

    return (
        <>
        <Navbar />
        <div className="bg-govt_bg min-h-screen bg-cover bg-center ">
                   <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col ">

                <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 shadow-md">
                <div className="text-blue-700 items-center">
                    <div className="text-3xl text-center pb-3">Login</div>
                </div>
                    <div className="w-3/4 mb-6">
                        <label htmlFor="email" className="text-black sr-only">Email</label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Email address"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-6">
                        <label htmlFor="password" className="text-black sr-only">Password</label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className="text-gray-700 w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="w-3/4 mb-12">
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="py-4 bg-blue-900 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
                        >
                            LOGIN
                        </button>
                    </div>
                    <div className="flex justify-center container mx-auto mt-6 text-blue-700 text-sm">
                    <div className="flex flex-col sm:flex-row justify-between md:w-1/2 items-center">
                        <Link href="/forgotpassword">
                            <div className="flex">Forgot your password?</div>
                        </Link>
                        <Link href="/signup">
                            <div className="flex">Don't have an account? Get Started</div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
