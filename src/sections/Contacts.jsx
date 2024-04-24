import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

function Contacts() {
    return (
        <>
            <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Have a question or want to work together? Reach out and let's chat.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <IoMailOpenOutline className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <h3 className="text-gray-500 dark:text-gray-400 hover:underline">
                                        elizavetaice123@gmail.com
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhone className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <h3 className="text-gray-500 dark:text-gray-400 hover:underline">
                                        +33 (7) 89-03-43-02
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                                    Name
                                </label>
                                <input id="name" placeholder="Your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                                    Email
                                </label>
                                <input id="email" placeholder="Your email" type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="w-full min-h-[120px] px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" id="message" placeholder="Your message" />
                            </div>
                            <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-blue-600" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;
