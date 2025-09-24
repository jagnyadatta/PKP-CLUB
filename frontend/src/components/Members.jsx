import React from 'react';
import { ChevronRight } from 'lucide-react';

const Members = () => {
  const members = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Secretary",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Emma Davis",
      role: "Treasurer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Sports Captain",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Lisa Chen",
      role: "Event Coordinator",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "David Brown",
      role: "PR Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Sophie Miller",
      role: "Social Media",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6">
            Our Members
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who make our club a thriving community
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8 perspective-[1000px]">
          {members.map((member) => (
            <div 
              key={member.id}
              className="bg-gradient-to-br from-white to-sky-50 rounded-2xl border border-gray-100 shadow-[0_25px_50px_rgba(14,165,233,0.25)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:rotate-x-3 hover:rotate-y-1 transition-all duration-500 p-6 group"
            >
              <div className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-sky-100 group-hover:border-sky-200 transition-colors duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sky-600 font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 px-4 -mx-4 perspective-[1000px]">
            {members.map((member) => (
              <div 
                key={member.id}
                className="flex-shrink-0 w-48 bg-gradient-to-br from-white to-sky-50 rounded-2xl border border-gray-100 shadow-[0_25px_50px_rgba(14,165,233,0.25)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:rotate-x-3 hover:rotate-y-1 transition-all duration-500 p-6"
              >
                <div className="text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-sky-100"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sky-600 font-semibold text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full transition-colors duration-200 inline-flex items-center space-x-2 text-lg">
            <span>View All Members</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Members;
