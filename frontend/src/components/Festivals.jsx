// import React from 'react';
// import { ChevronRight, Calendar } from 'lucide-react';

// const Festivals = () => {
//   const festivals = [
//     {
//       id: 1,
//       name: "Annual Sports Day",
//       image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       name: "Summer Festival",
//       image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
//       date: "June 2024"
//     },
//     {
//       id: 3,
//       name: "Cultural Night",
//       image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
//       date: "September 2024"
//     },
//     {
//       id: 4,
//       name: "Awards Ceremony",
//       image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
//       date: "December 2024"
//     },
//     {
//       id: 5,
//       name: "New Year Celebration",
//       image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
//       date: "January 2025"
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from-sky-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Festivals
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Celebrating community spirit through memorable events and festivals
//           </p>
//         </div>

//         {/* Horizontal Auto-Scroll 3D Cards */}
//         <div className="mb-8 overflow-hidden">
//           <div
//             className="flex space-x-6 animate-scroll-slow"
//             style={{ perspective: '1000px' }}
//           >
//             {festivals.concat(festivals).map((festival, i) => (
//               <div 
//                 key={i}
//                 className="flex-shrink-0 w-72 sm:w-80 md:w-96
//                            bg-gradient-to-br from-white to-sky-50
//                            rounded-2xl border border-gray-100
//                            shadow-[0_25px_50px_rgba(14,165,233,0.25)]
//                            hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)]
//                            transform hover:-translate-y-2
//                            hover:rotate-x-3 hover:rotate-y-1
//                            transition-all duration-500 overflow-hidden group"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={festival.image}
//                     alt={festival.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                     <div className="flex items-center text-sky-600 text-sm font-semibold">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {festival.date}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900">{festival.name}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* View All Button */}
//         <div className="text-center">
//           <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full transition-colors duration-200 inline-flex items-center space-x-2 text-lg">
//             <span>View All Festivals</span>
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Keyframes for auto-scroll */}
//       <style>{`
//         @keyframes scroll-slow {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll-slow {
//           display: flex;
//           animation: scroll-slow 40s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Festivals;





import React from 'react';
import { ChevronRight, Calendar, Star, Sparkles } from 'lucide-react';

const Festivals = () => {
  const festivals = [
    {
      id: 1,
      name: "Annual Sports Day",
      image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "March 2024",
      description: "Celebrating athletic excellence and team spirit"
    },
    {
      id: 2,
      name: "Summer Festival",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "June 2024",
      description: "Fun-filled summer activities and performances"
    },
    {
      id: 3,
      name: "Cultural Night",
      image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "September 2024",
      description: "Showcasing diverse cultural traditions"
    },
    {
      id: 4,
      name: "Awards Ceremony",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "December 2024",
      description: "Recognizing outstanding achievements"
    },
    {
      id: 5,
      name: "New Year Celebration",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      date: "January 2025",
      description: "Welcoming new beginnings with joy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sky-200/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-400/25 rounded-full blur-lg animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6">
            Our Festivals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating community spirit through memorable events and festivals that bring us all together
          </p>
        </div>

        {/* Enhanced Horizontal Auto-Scroll 3D Cards */}
        <div className="mb-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sky-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sky-50 to-transparent z-10 pointer-events-none"></div>
          
          <div
            className="flex space-x-8 animate-scroll-slow hover:pause-animation"
            style={{ perspective: '1200px' }}
          >
            {festivals.concat(festivals).map((festival, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-80 sm:w-96 md:w-[420px]
                           bg-gradient-to-br from-white via-sky-25 to-sky-50
                           rounded-3xl border border-sky-100
                           shadow-[0_20px_60px_rgba(14,165,233,0.15)]
                           hover:shadow-[0_30px_80px_rgba(14,165,233,0.25)]
                           transform hover:-translate-y-3 hover:scale-105
                           hover:rotate-x-2 hover:rotate-y-1
                           transition-all duration-700 ease-out overflow-hidden group
                           backdrop-blur-sm relative"
              >
                {/* Gradient overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img 
                    src={festival.image}
                    alt={festival.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Enhanced date badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/20">
                    <div className="flex items-center text-sky-600 text-sm font-bold">
                      <Calendar className="w-4 h-4 mr-2" />
                      {festival.date}
                    </div>
                  </div>
                  
                  {/* Star decoration */}
                  <div className="absolute top-4 left-4 text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {festival.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center">
          <button className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 
                           text-white px-10 py-5 rounded-2xl transition-all duration-300 
                           inline-flex items-center space-x-3 text-lg font-semibold
                           shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.4)]
                           transform hover:-translate-y-1 hover:scale-105
                           border border-sky-400/20">
            <span>View All Festivals</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced animations and styles */}
      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(-1deg); }
          75% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-1deg); }
          50% { transform: translateY(-30px) rotate(1deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 50s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -2s;
        }
        
        .pause-animation:hover {
          animation-play-state: paused;
        }
        
        /* Custom sky colors */
        .sky-25 {
          background-color: rgb(248 250 252);
        }
      `}</style>
    </section>
  );
};

export default Festivals;