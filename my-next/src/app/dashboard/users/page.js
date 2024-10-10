"use client";

import { useState } from 'react';
export default function Page(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission, e.g., send data to an API
        console.log('Name:', name);
        console.log('Email:', email);
        // Clear the form fields
        setName('');
        setEmail('');
    };

    return(
        <div className="mr-4 ml-4 mt-2">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit} className="mt-2">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                    />
                </div>
                <button type="submit" className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
            </form>
        </div>
    );
}