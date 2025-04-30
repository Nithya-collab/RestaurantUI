import React, { useEffect, useState } from "react";

const ViewMenuTable = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   fetch("/data/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => setMenuItems(data))
  //     .catch((err) => console.error("Menu load error:", err));
  // }, []);
  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setTimeout(() => {
          setIsVisible(true); // delay for smooth effect
        }, 100); // adjust time if needed
      })
      .catch((err) => console.error("Menu load error:", err));
  }, []);
 
  return (
    <div 
      // className="overflow-x-auto mt-6 pl-3 pr-3  transition-all duration-1000 ease-in-out transform"
      className={`overflow-x-auto mt-6 pl-3 pr-3 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <table className="min-w-full border shadow-lg bg-white">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="px-3 py-2 text-left">Dish</th>
            <th className="px-3 py-2 text-left">Description</th>
            <th className="px-3 py-2 text-left">Category</th>
            <th className="px-3 py-2 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr
              key={index}
              className="border-t hover:bg-orange-50 transition duration-150"
            >
              <td className="px-3 py-2 font-semibold">{item.name}</td>
              <td className="px-3 py-2">{item.description}</td>
              <td className="px-3 py-2">{item.category}</td>
              <td className="px-3 py-2 text-right text-orange-600 font-bold">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMenuTable;
