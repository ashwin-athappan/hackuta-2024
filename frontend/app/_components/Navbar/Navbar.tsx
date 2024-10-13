"use client";

import React from "react";

export default function Navbar() {

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
                                <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                </svg>
                                <span className="font-bold text-4xl">Sublet Surfers</span>
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-5 px-3 text-white hover:text-gray-900">Features</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-gray-900">Pricing</a>
                        </div>
                        <a href="/login"
                           className="py-2 px-3 bg-white hover:bg-black text-black hover:text-white rounded transition duration-300">Login</a>
                        <a href="/signup"
                           className="py-2 px-3 bg-white hover:bg-black text-black hover:text-white rounded transition duration-300">Signup</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={handleMobileMenu} className="mobile-menu-button">
                            <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                <a href="/login" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
                <a href="/signup" className="text-black block py-2 px-4 text-sm hover:bg-gray-200">Signup</a>
            </div>
        </nav>
    );
}