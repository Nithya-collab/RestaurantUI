import React, { useEffect, useState } from "react";

const Gallery = ({ title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Failed to load gallery:", error));
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
