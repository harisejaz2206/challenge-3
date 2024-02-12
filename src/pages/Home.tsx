import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // handling button click
        navigate("/login")
    }

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md">Login</button>
            </div>
        </div>
    );
};

export default Home;
