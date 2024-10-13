"use client";

import React from "react";

export default function Navbardb() {

    const handleMobileMenu = () => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        // @ts-ignore
        menu.classList.toggle("hidden");
    }

    return (
        <nav className="bg-blue-900">
            <div className="px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-white hover:text-gray-900">
                            <img src="logo.png" alt="Logo" className="w-16" />
                                <span className="font-bold text-4xl">Sublet Suffers</span>
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-5 px-3 text-white hover:text-gray-900">Contact us</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-gray-900">My Profile</a>
                        </div>
                        <a href="/login"
                           className="py-2 px-3 bg-white hover:bg-black text-black hover:text-white rounded transition duration-300">Logout</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={handleMobileMenu} className="mobile-menu-button">
                            <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">Contact us</a>
                <a href="#" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">My Profile</a>
                <a href="/login" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">Logout</a>
            </div>
        </nav>
    );
}