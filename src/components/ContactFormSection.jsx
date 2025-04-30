import React from "react";
import Button from "./Button";
import ContactForm from "../ContactForm";

const ContactFormSection = () => (
    <div className="p-6 bg-white">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">For reservations or inquiries, please complete the form below.</p>
        <form className="mb-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
                ></textarea>
            </div>
            <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105"
            >
                Submit
            </Button>
        </form>
        {/* <ContactForm /> */}
    </div>
);

export default ContactFormSection;
