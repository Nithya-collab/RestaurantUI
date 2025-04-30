import React from "react";
import Button from "./Button";

const SpecialtyCard = ({ emoji, title, description}) => (
    <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition duration-300">
        <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">{emoji}</span>
            <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const SpecialtiesSection = ({handleShowMenu}) => (
    <div className="p-6 bg-white">
        <h2 className="text-2xl font-bold mb-6">Our Specialties</h2>
        <p className="text-gray-600 mb-6">
            From classic pasta dishes to innovative creations, we offer a culinary journey you won't forget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SpecialtyCard emoji="🍝" title="Authentic Pasta" description="Our dishes are handmade with traditional techniques using fresh local ingredients." />
            <SpecialtyCard emoji="🔥" title="Wood-Fired Oven" description="Experience the rich flavors of pizza and bread baked to perfection in a wood-fired oven." />
            <SpecialtyCard emoji="🍷" title="Wine Selection" description="Enhance your dining experience with our curated selection of Italian and international wines." />
        </div>
        <Button className="mt-6 border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-50 transition duration-300"
         onClick={handleShowMenu}
        >
            View Menu
        </Button>
    </div>
);

export default SpecialtiesSection;
