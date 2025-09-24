import React from "react";
import { ChevronRight } from "lucide-react";

const Sports = () => {
  const sports = [
    {
      id: 1,
      name: "Football",
      image:
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Basketball",
      image:
        "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Tennis",
      image:
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Swimming",
      image:
        "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Cricket",
      image:
        "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Volleyball",
      image:
        "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6">
            Our Sports
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Excellence in athletics through diverse sporting disciplines
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-2xl
             shadow-[0_25px_50px_rgba(14,165,233,0.25)]
             transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden perspective-[1000px]">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-500
                             group-hover:[transform:scale(1.05)_rotateY(4deg)_rotateX(4deg)]
                             [transform-style:preserve-3d]"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {sport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 px-4 -mx-4">
            {sports.map((sport) => (
              <div
                key={sport.id}
                className="flex-shrink-0 w-64 bg-white rounded-2xl
             shadow-[0_25px_50px_rgba(14,165,233,0.25)]
             overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden perspective-[1000px]">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover transition-transform duration-500
                               group-hover:[transform:scale(1.05)_rotateY(4deg)_rotateX(4deg)]
                               [transform-style:preserve-3d]"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {sport.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full transition-colors duration-200 inline-flex items-center space-x-2 text-lg">
            <span>View All Sports</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sports;
