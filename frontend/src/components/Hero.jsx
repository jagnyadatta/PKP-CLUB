import React, { useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import "../font.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Floating elements animation
    const floatingElements = [];
    const numElements = 12;

    // Create floating sports elements
    for (let i = 0; i < numElements; i++) {
      floatingElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.floor(Math.random() * 4), // Different sports icons
      });
    }

    // Draw sports icons
    const drawSportsIcon = (ctx, x, y, size, rotation, type) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = `rgba(14, 165, 233, 0.3)`;
      ctx.lineWidth = 3;

      switch (type) {
        case 0: // Football
          ctx.beginPath();
          ctx.ellipse(0, 0, size / 2, size / 2.5, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-size / 3, -size / 4);
          ctx.lineTo(size / 3, size / 4);
          ctx.moveTo(-size / 3, size / 4);
          ctx.lineTo(size / 3, -size / 4);
          ctx.stroke();
          break;
        case 1: // Basketball
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-size / 2, 0);
          ctx.lineTo(size / 2, 0);
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(0, size / 2);
          ctx.stroke();
          break;
        case 2: // Tennis racket
          ctx.beginPath();
          ctx.ellipse(0, -size / 4, size / 3, size / 2.5, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, size / 4);
          ctx.lineTo(0, size / 2);
          ctx.stroke();
          break;
        case 3: // Trophy
          ctx.beginPath();
          ctx.moveTo(-size / 3, -size / 3);
          ctx.lineTo(-size / 3, -size / 6);
          ctx.lineTo(size / 3, -size / 6);
          ctx.lineTo(size / 3, -size / 3);
          ctx.lineTo(-size / 3, -size / 3);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-size / 4, -size / 6);
          ctx.lineTo(size / 4, -size / 6);
          ctx.lineTo(size / 6, size / 3);
          ctx.lineTo(-size / 6, size / 3);
          ctx.closePath();
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background overlay
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(240, 249, 255, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update floating elements
      floatingElements.forEach((element) => {
        // Update position
        element.x += element.speedX;
        element.y += element.speedY;
        element.rotation += element.rotationSpeed;

        // Wrap around screen
        if (element.x > canvas.width + 50) element.x = -50;
        if (element.x < -50) element.x = canvas.width + 50;
        if (element.y > canvas.height + 50) element.y = -50;
        if (element.y < -50) element.y = canvas.height + 50;

        // Draw sports icon
        ctx.globalAlpha = element.opacity;
        drawSportsIcon(
          ctx,
          element.x,
          element.y,
          element.size,
          element.rotation,
          element.type
        );
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative pt-20 pb-16 min-h-screen flex items-center overflow-hidden">
      {/* Animated 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* 3D Geometric Shapes Background */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left Content - Headings and Paragraphs */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <div className="mb-4 lg:mb-8 relative">
              <h1 className="heading-font text-xl sm:text-5xl md:text-6xl lg:text-6xl font-black bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4 lg:mb-6 drop-shadow-2xl leading-tight tracking-tight p-3">
                ଗୋପବନ୍ଧୁ ପଠାଗାର <span className="sm:hidden">ପାଇକରାପୁର</span>
                <p className="hidden sm:block w-full text-right lg:text-2xl mr-6 mt-2 text-gray-500">
                  ପାଇକରାପୁର
                </p>
              </h1>
              <div className="flex items-center justify-center lg:justify-start text-sky-600 mb-2 lg:mb-8">
                <div className="bg-sky-100/50 rounded-full p-2 lg:p-3 mr-3 lg:mr-4 shadow-lg">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 drop-shadow-md" />
                </div>
                <span className="text-lg lg:text-xl font-bold">
                  Established 1985
                </span>
              </div>
              <p className="text-sm text-justify sm:text-2xl text-gray-700 leading-relaxed max-w-3xl font-semibold tracking-wide">
                ଗୋପବନ୍ଧୁ ପଠାଗାର, ପାଇକରାପୁର 1955 ମସିହାରେ ସ୍ଥାପିତ ହୋଇଥିଲା। ଏହି
                ସଂସ୍ଥାର ପ୍ରଧାନ ଲକ୍ଷ୍ୟ ହେଉଛି ଗ୍ରାମବାସୀଙ୍କୁ ସହଯୋଗ, ସଚେତନତା ଓ
                ଶିକ୍ଷାରେ ଅଗ୍ରଗତି ପ୍ରଦାନ କରିବା। ପାଇକରାପୁର ଗାଁର ପୂର୍ବତନ ସଦସ୍ୟମାନେ
                ଏହାକୁ ଗଠନ କରିଥିଲେ ଏବଂ ସମସ୍ତ ସଦସ୍ୟଙ୍କର ଏକତା, ସମର୍ପଣ ଓ ସହଯୋଗରେ ଏହି
                ପଠାଗାର ଆଜି ପର୍ଯ୍ୟନ୍ତ ସୁନିୟୋଜିତ ଭାବେ ଚାଲିଆସୁଛି।
              </p>
            </div>
          </div>

          {/* Right Content - Executive Cards */}
          <div className="space-y-3 lg:space-y-8 perspective-[1000px] relative order-2 lg:order-2">
            {/* Floating glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse"></div>

            {/* President Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-sky-50/95 backdrop-blur-lg rounded-2xl lg:rounded-3xl border border-white/80 shadow-[0_20px_40px_rgba(14,165,233,0.2)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.3)] transform hover:-translate-y-1 hover:scale-101 transition-all duration-500 p-4 lg:p-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-500/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-center space-x-4 lg:space-x-6">
                {/* Square Image on Left */}
                <div className="relative flex-shrink-0 w-24 lg:w-40">
                  <div className="absolute inset-0 bg-sky-400 rounded-xl lg:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="President"
                    className="relative w-full h-28 lg:h-40 rounded-xl lg:rounded-2xl object-cover border-3 lg:border-4 border-sky-200 shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details on Right */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-md lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent truncate">
                    ଶ୍ରୀ. କାଳିଆ ନାୟକ
                  </h3>
                  <p className="text-sky-600 font-bold text-sm lg:text-lg">
                    President
                  </p>
                  <div className="flex items-center text-gray-600 text-xs lg:text-sm mt-1 lg:mt-2">
                    <PiSuitcaseSimpleBold className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 text-sky-500" />
                    <span className="font-semibold">5+ years leadership</span>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex items-center space-x-3 lg:space-x-4 mt-3 lg:mt-4">
                    {/* Phone */}
                    <a
                      href="tel:+919876543210"
                      className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors duration-200 group/social"
                      title="Call"
                    >
                      <FaPhone className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors duration-200 group/social"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com/kalia.nayak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200 group/social"
                      title="Facebook"
                    >
                      <FaFacebook className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:kalia.nayak@example.com"
                      className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200 group/social"
                      title="Email"
                    >
                      <FaEnvelope className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Vice President Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-sky-50/95 backdrop-blur-lg rounded-2xl lg:rounded-3xl border border-white/80 shadow-[0_20px_40px_rgba(14,165,233,0.2)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.3)] transform hover:-translate-y-1 hover:scale-101 transition-all duration-500 p-4 lg:p-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-500/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-center space-x-4 lg:space-x-6">
                {/* Square Image on Left */}
                <div className="relative flex-shrink-0 w-24 lg:w-40">
                  <div className="absolute inset-0 bg-sky-400 rounded-xl lg:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="President"
                    className="relative w-full h-28 lg:h-40 rounded-xl lg:rounded-2xl object-cover border-3 lg:border-4 border-sky-200 shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details on Right */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-md lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent truncate">
                    ଶ୍ରୀ. ଜୋଗେନ୍ଦ୍ର ସାହୁ
                  </h3>
                  <p className="text-sky-600 font-bold text-sm lg:text-lg">
                    Secretary
                  </p>
                  <div className="flex items-center text-gray-600 text-xs lg:text-sm mt-1 lg:mt-2">
                    <PiSuitcaseSimpleBold className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 text-sky-500" />
                    <span className="font-semibold">5+ years leadership</span>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex items-center space-x-3 lg:space-x-4 mt-3 lg:mt-4">
                    {/* Phone */}
                    <a
                      href="tel:+919876543210"
                      className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors duration-200 group/social"
                      title="Call"
                    >
                      <FaPhone className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors duration-200 group/social"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com/kalia.nayak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200 group/social"
                      title="Facebook"
                    >
                      <FaFacebook className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:kalia.nayak@example.com"
                      className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200 group/social"
                      title="Email"
                    >
                      <FaEnvelope className="w-3 h-3 lg:w-4 lg:h-4 group-hover/social:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"
        style={{ zIndex: 3 }}
      ></div>
    </section>
  );
};

export default Hero;
