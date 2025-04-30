import React from "react";
import Button from "./components/Button";

const ReservationFormSection = () => {
    const handleReservationSubmit = (e) => {
        e.preventDefault();
        // TODO: handle reservation submission
    };

    return (
        <div className="p-8 bg-white rounded-2xl shadow-xl max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Reserve a Table</h2>
            <p className="text-gray-500 mb-6">Please fill in the form below to make a reservation.</p>

            <form onSubmit={handleReservationSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <input
                    type="time"
                    name="time"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    min="1"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <textarea
                    name="specialRequests"
                    placeholder="Special Requests (optional)"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105 w-full"
                >
                    Book Now
                </Button>
            </form>
        </div>
    );
};

export default ReservationFormSection;
