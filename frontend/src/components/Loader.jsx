// components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin } from "lucide-react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Canvas */}
      <div className="absolute inset-0">
        {/* 3D Geometric Shapes Background - Same as Hero */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-3xl transform rotate-12 animate-pulse shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-200/40 to-sky-300/30 rounded-full transform -rotate-6 animate-bounce shadow-xl"></div>
        <div
          className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-blue-200/35 to-indigo-300/25 transform rotate-45 animate-spin shadow-lg"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-sky-300/25 to-cyan-400/20 rounded-2xl transform -rotate-12 animate-pulse shadow-xl"></div>
        <div
          className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-blue-300/30 to-sky-400/25 rounded-full transform rotate-6 animate-bounce shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Photo Container */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full blur-lg animate-spin-slow"></div>
            
            {/* Profile Photo */}
            <div className="relative bg-white p-2 rounded-full">
              <img
                src="/Gopabndhu-Das.png"
                alt="Gopabandhu Pathagara"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>

            {/* Animated Ring */}
            <div className="absolute -inset-4 border-4 border-transparent border-t-sky-400 border-r-blue-500 border-b-indigo-600 border-l-cyan-400 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Welcome Text - Using same font and gradient as Hero */}
        <div className="space-y-4 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-2xl leading-tight tracking-tight">
            Welcome to
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:p-3 font-black bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-2xl leading-tight tracking-tight">
            ଗୋପବନ୍ଧୁ ପଠାଗାର
          </h2>

          {/* Location - Same style as Hero */}
          <div className="flex items-center justify-center text-sky-600 mt-4">
            <div className="bg-sky-100/50 rounded-full p-2 mr-3 shadow-lg">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 drop-shadow-md" />
            </div>
            <span className="text-lg lg:text-xl font-bold">
              ପାଇକରାପୁର
            </span>
          </div>

          {/* Established - Same style as Hero */}
          <div className="flex items-center justify-center text-sky-600">
            <div className="bg-sky-100/50 rounded-full p-2 mr-3 shadow-lg">
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6 drop-shadow-md" />
            </div>
            <span className="text-lg lg:text-xl font-bold">
              Established 1985
            </span>
          </div>
        </div>

        {/* Description - Same style as Hero */}
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-semibold tracking-wide mb-8">
          ସମୁଦାୟର ସେବା ଓ ସଂଗଠନ - ଏକତା, ସମର୍ପଣ ଓ ସହଯୋଗରେ ଉନ୍ନତିର ପଥରେ
        </p>

        {/* Loading Animation - Enhanced with Hero theme */}
        <div className="flex justify-center items-center space-x-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce shadow-lg"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0.2s" }}></div>
          </div>
          {/* <span className="text-sky-600 font-semibold text-sm sm:text-base animate-pulse">
            Loading...
          </span> */}
        </div>

        {/* Additional decorative elements matching Hero */}
        <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-gradient-to-br from-sky-200/20 to-blue-300/10 rounded-full animate-pulse"></div>
        <div className="absolute -top-8 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-200/15 to-sky-300/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Bottom gradient overlay - Same as Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
  );
};

export default Loader;