import React from "react";
import { MapPin, Heart } from "lucide-react";

const ServiceWork = () => {
  const projects = [
    {
      id: 1,
      name: "Community Clean-up Drive",
      location: "Central Park",
      image:
        "https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Youth Sports Training",
      location: "Local Schools",
      image:
        "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Senior Care Program",
      location: "Retirement Homes",
      image:
        "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Food Distribution",
      location: "Community Centers",
      image:
        "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Educational Support",
      location: "Underserved Areas",
      image:
        "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Environmental Initiative",
      location: "City Parks",
      image:
        "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6">
            Our Service Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making a positive impact in our community through dedicated service
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl
             shadow-[0_25px_50px_rgba(14,165,233,0.25)]
             transition-all duration-300 overflow-hidden group
             [transform-style:preserve-3d] perspective-[1000px]
             hover:[transform:rotateY(8deg)_rotateX(6deg)_scale(1.02)]"
            >
              <div className="flex">
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300
                               [transform-style:preserve-3d]
                               group-hover:[transform:rotateY(8deg)_rotateX(6deg)_scale(1.05)]"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-sky-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Heart className="w-4 h-4 mr-2 text-red-400" />
                    <span className="text-sm">Active community project</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 px-4 -mx-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl
             shadow-[0_25px_50px_rgba(14,165,233,0.25)]
             transition-all duration-300 overflow-hidden group
             [transform-style:preserve-3d] perspective-[1000px]
             hover:[transform:rotateY(8deg)_rotateX(6deg)_scale(1.02)]"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300
                               [transform-style:preserve-3d]
                               group-hover:[transform:rotateY(8deg)_rotateX(6deg)_scale(1.05)]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-sky-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-semibold text-sm">
                      {project.location}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Heart className="w-4 h-4 mr-2 text-red-400" />
                    <span className="text-sm">Active project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWork;
