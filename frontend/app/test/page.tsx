"use client";
import { useEffect } from "react";

export default function Home() {
    // Function to handle mouse movement
    const handleMouseMove = (e) => {
        const x = e.clientX; // Get the X position of the cursor
        const y = e.clientY; // Get the Y position of the cursor
        const background = document.querySelector('.bg-change'); // Select the background div
        
        // Calculate the new background position based on the cursor position
        const moveX = (x / window.innerWidth) * 100; // Convert to percentage for horizontal movement
        const moveY = (y / window.innerHeight) * 100; // Convert to percentage for vertical movement
        
        // Update the background position
        background.style.backgroundPosition = `${moveX}% ${moveY}%`;
    };

    useEffect(() => {
        // Add event listener for mouse movement
        window.addEventListener('mousemove', handleMouseMove);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-govt_bg min-h-screen bg-cover bg-center bg-change flex flex-col justify-center items-center text-white p-4">
            <div className="bg-black bg-opacity-60 rounded-lg p-8 shadow-lg text-center max-w-md">
                <h1 className="text-4xl font-bold mb-4">Welcome to FairHousing</h1>
                <p className="text-lg mb-6">
                    Our platform helps prevent unauthorized subletting by providing AI-driven risk assessments for landlords and students.
                </p>
                <a href="/signup" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    Get Started
                </a>
            </div>
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
                        <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
                        <p>Leverage machine learning to analyze tenant behavior and detect potential risks.</p>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
                        <h3 className="text-xl font-bold mb-2">Fair Housing Practices</h3>
                        <p>Promote transparency and fairness in student housing, ensuring everyone follows the rules.</p>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
                        <h3 className="text-xl font-bold mb-2">Community Support</h3>
                        <p>Join a community that values integrity and compliance in housing agreements.</p>
                    </div>
                </div>
            </div>
            <footer className="mt-12 text-center">
                <p className="text-sm">© 2024 FairHousing. All rights reserved.</p>
            </footer>
        </div>
    );
}
