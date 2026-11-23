import React from "react";
import { Calendar, MapPin, Sparkles, UserPlus, Heart, Users, ChevronRight } from "lucide-react";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import "../font.css";
import MarigoldGarland from "./Cartoon/MarigoldGarland";
import { DiyaIcon, StickerBadge, JhotiCorner } from "./Cartoon/CartoonDoodles";
import { MemberPhotoPlaceholder } from "./Cartoon/EmptyPhotoPlaceholder";
import { REGISTRATION_ENABLED } from "../utils/constant";

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 bg-[#FAF7F0] overflow-hidden border-b-3 sm:border-b-4 border-[#2B231D]">

      {/* Handcrafted Marigold Garland Banner across top */}
      <div className="absolute top-16 sm:top-18 left-0 right-0 z-20">
        <MarigoldGarland />
      </div>

      {/* 2D Cartoon Background Landscape Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Comic Halftone dots overlay */}
        <div className="absolute inset-0 comic-dots"></div>

        {/* Handcrafted 2D Cartoon Sun */}
        <div className="absolute top-20 right-6 sm:right-24 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-300 border-3 border-[#2B231D] shadow-[6px_6px_0px_#2B231D] flex items-center justify-center opacity-85 animate-float-slow">
          <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-amber-400 border-2 border-[#2B231D] flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">☀️</span>
          </div>
        </div>

        {/* Floating Cartoon Clouds */}
        <div className="absolute top-36 left-8 sm:left-16 bg-white border-2.5 border-[#2B231D] rounded-full px-5 py-2.5 shadow-cartoon-sm opacity-90 animate-wiggle hidden md:flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-sky-300 border border-[#2B231D]"></span>
          <span className="font-cartoon text-xs font-bold text-stone-700">ପାଇକରାପୁର ଗ୍ରାମ୍ୟ ପରିବେଶ</span>
        </div>

        <div className="absolute bottom-28 left-6 w-14 h-14 rounded-2xl bg-emerald-200 border-2 border-[#2B231D] shadow-cartoon rotate-12 animate-float-reverse hidden lg:flex items-center justify-center">
          <DiyaIcon className="w-8 h-8" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content Column - Club Identity, History & Preserved Odia Text */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-4">
              <span className="bg-amber-400 text-stone-900 px-3.5 py-1 rounded-full font-bold text-xs sm:text-sm border-2 border-[#2B231D] shadow-cartoon-sm -rotate-1 inline-flex items-center gap-1.5">
                <DiyaIcon className="w-4 h-4" />
                <span>ସ୍ଥାପିତ ୧୯୫୫ (Established 1955)</span>
              </span>
              <span className="bg-white text-stone-800 px-3.5 py-1 rounded-full font-bold text-xs sm:text-sm border-2 border-[#2B231D] shadow-cartoon-sm rotate-1 inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>ପାଇକରାପୁର, କୃଷ୍ଣପ୍ରସାଦ, ପୁରୀ</span>
              </span>
            </div>

            {/* Preserved Main Odia Heading */}
            <div className="mb-6 relative">
              <h1 className="heading-font text-3xl sm:text-6xl lg:text-7xl font-black text-[#2B231D] drop-shadow-[2px_2px_0px_#F59E0B] leading-tight tracking-tight">
                ଗୋପବନ୍ଧୁ ପଠାଗାର <span className="sm:hidden text-amber-800">ପାଇକରାପୁର</span>
                <p className="hidden sm:block w-full text-right lg:text-3xl mr-4 sm:mr-8 mt-1 text-amber-800 font-bold">
                  ପାଇକରାପୁର
                </p>
              </h1>

              {/* Established Badge matching original element */}
              <div className="flex items-center justify-center lg:justify-start text-stone-900 mt-2 mb-4">
                <div className="bg-amber-300 rounded-xl p-2 border-2 border-[#2B231D] shadow-cartoon-sm mr-3">
                  <Calendar className="w-5 h-5 text-stone-900" />
                </div>
                <span className="font-cartoon text-lg sm:text-xl font-black text-[#2B231D]">
                  Established 1985 (ସ୍ଥାପିତ ୧୯୫୫)
                </span>
              </div>

              {/* Preserved Odia Paragraph in 2D Cartoon Speech Bubble Card */}
              <div className="card-cartoon bg-white p-5 sm:p-7 shadow-[6px_6px_0px_#2B231D] relative text-left">
                {/* Comic Quote Tag */}
                <div className="absolute -top-3.5 left-6 bg-amber-400 text-stone-900 px-3 py-0.5 rounded-md border-2 border-[#2B231D] text-xs font-bold shadow-cartoon-sm">
                  ★ ଆମର ମୂଳ ଲକ୍ଷ୍ୟ ଓ ପରିଚୟ
                </div>

                <p className="font-cartoon text-sm sm:text-lg text-stone-800 leading-relaxed font-semibold text-justify">
                  ଗୋପବନ୍ଧୁ ପଠାଗାର, ପାଇକରାପୁର 1955 ମସିହାରେ ସ୍ଥାପିତ ହୋଇଥିଲା। ଏହି
                  ସଂସ୍ଥାର ପ୍ରଧାନ ଲକ୍ଷ୍ୟ ହେଉଛି ଗ୍ରାମବାସୀଙ୍କୁ ସହଯୋଗ, ସଚେତନତା ଓ
                  ଶିକ୍ଷାରେ ଅଗ୍ରଗତି ପ୍ରଦାନ କରିବା। ପାଇକରାପୁର ଗାଁର ପୂର୍ବତନ ସଦସ୍ୟମାନେ
                  ଏହାକୁ ଗଠନ କରିଥିଲେ ଏବଂ ସମସ୍ତ ସଦସ୍ୟଙ୍କର ଏକତା, ସମର୍ପଣ ଓ ସହଯୋଗରେ ଏହି
                  ପଠାଗାର ଆଜି ପର୍ଯ୍ୟନ୍ତ ସୁନିୟୋଜିତ ଭାବେ ଚାଲିଆସୁଛି।
                </p>

                {/* Cultural Heritage Pill Tags */}
                <div className="mt-4 pt-3 border-t-2 border-stone-200 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg border border-[#2B231D]">
                    🌸 ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା
                  </span>
                  <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-lg border border-[#2B231D]">
                    🪔 ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-lg border border-[#2B231D]">
                    🥁 ଦଣ୍ଡନାଚ ପର୍ବ
                  </span>
                  <span className="bg-sky-100 text-sky-900 px-2.5 py-1 rounded-lg border border-[#2B231D]">
                    🏏 ମା ବରୁଣାଇ କ୍ରୀଡ଼ା
                  </span>
                </div>
              </div>
            </div>

            {/* Handcrafted 2D Cartoon Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              {/* Requirement 1: Only show registration button when REGISTRATION_ENABLED is true */}
              {REGISTRATION_ENABLED && (
                <Link to="/register" className="btn-cartoon-amber text-sm sm:text-base">
                  <UserPlus className="w-5 h-5" />
                  <span>ସଦସ୍ୟତା ଗ୍ରହଣ କରନ୍ତୁ</span>
                </Link>
              )}
              <Link to="/all-members" className="btn-cartoon-amber text-sm sm:text-base">
                <Users className="w-5 h-5" />
                <span>ସଦସ୍ୟ ତାଲିକା (Our Members)</span>
              </Link>
              <Link to="/all-festivals" className="btn-cartoon-white text-sm sm:text-base">
                <Heart className="w-5 h-5 text-rose-500" />
                <span>ଆମ ସଂସ୍କୃତି ଦେଖନ୍ତୁ</span>
              </Link>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl border-2 border-[#2B231D] p-3 text-center shadow-cartoon-sm">
                <div className="font-odia text-xl sm:text-2xl font-black text-amber-700">୭୦+ ବର୍ଷ</div>
                <div className="font-cartoon text-[11px] sm:text-xs font-bold text-stone-600">ଗୌରବମୟ ଐତିହ୍ୟ</div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-[#2B231D] p-3 text-center shadow-cartoon-sm">
                <div className="font-odia text-xl sm:text-2xl font-black text-emerald-700">୨୦୦+</div>
                <div className="font-cartoon text-[11px] sm:text-xs font-bold text-stone-600">ଗ୍ରାମ ସ୍ୱେଚ୍ଛାସେବୀ</div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-[#2B231D] p-3 text-center shadow-cartoon-sm">
                <div className="font-odia text-xl sm:text-2xl font-black text-sky-700">୧୦+</div>
                <div className="font-cartoon text-[11px] sm:text-xs font-bold text-stone-600">ବାର୍ଷିକ ଉତ୍ସବ</div>
              </div>
            </div>

          </div>

          {/* Right Content Column - Executive Leadership Cards in Handcrafted 2D Cartoon Frames */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">

            <div className="text-center lg:text-left mb-2">
              <span className="font-odia text-lg font-black text-[#2B231D] bg-amber-300 px-3.5 py-1 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm inline-block -rotate-1">
                ★ କ୍ଲବ୍ ପ୍ରମୁଖ ନେତୃତ୍ୱ (Executive Leaders)
              </span>
            </div>

            {/* President Card - Preserving text: ଶ୍ରୀ. ମିଥୁନ ଦଳେଇ, President, 5+ years leadership */}
            <div className="card-cartoon bg-[#FFFDF7] p-4 sm:p-5 hover:-translate-y-1 hover:shadow-cartoon-lg transition-all">
              <div className="flex items-center space-x-4 sm:space-x-5">
                {/* 2D Cartoon Photo Frame on Left - Requirement 5: Keep comments intact, show clean empty placeholder */}
                <div className="relative flex-shrink-0 w-24 h-28 sm:w-28 sm:h-32">
                  <div className="w-full h-full rounded-2xl border-2.5 border-[#2B231D] overflow-hidden bg-amber-100 shadow-cartoon-sm flex items-center justify-center">
                    {/* <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="President"
                      className="w-full h-full object-cover"
                    /> */}
                    {/* Clean 2D cartoon empty photo placeholder for President */}
                    <MemberPhotoPlaceholder role="President" />
                  </div>
                  {/* President Ribbon */}
                  <span className="absolute -bottom-2 -left-1 bg-amber-400 text-stone-900 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md border-2 border-[#2B231D] shadow-cartoon-sm rotate-2">
                    ସଭାପତି
                  </span>
                </div>

                {/* Details on Right */}
                <div className="flex-1 min-w-0">
                  <h3 className="heading-font text-lg sm:text-2xl font-black text-[#2B231D] truncate">
                    ଶ୍ରୀ. ମିଥୁନ ଦଳେଇ
                  </h3>
                  <p className="font-cartoon text-amber-700 font-extrabold text-sm sm:text-base">
                    President
                  </p>

                  <div className="flex items-center text-stone-700 text-xs sm:text-sm mt-1">
                    <PiSuitcaseSimpleBold className="w-4 h-4 mr-1.5 text-amber-700 flex-shrink-0" />
                    <span className="font-bold">5+ years leadership</span>
                  </div>

                  {/* Requirement 6: Replace email with Instagram icon */}
                  <div className="flex items-center space-x-2 mt-3">
                    <a
                      href="tel:+919876543210"
                      className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 border-2 border-[#2B231D] flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-cartoon-sm"
                      title="Call"
                    >
                      <FaPhone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 border-2 border-[#2B231D] flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-cartoon-sm"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 border-2 border-[#2B231D] flex items-center justify-center hover:bg-sky-200 transition-colors shadow-cartoon-sm"
                      title="Facebook"
                    >
                      <FaFacebook className="w-3.5 h-3.5" />
                    </a>
                    {/* Requirement 6: Instagram profile link replacing email icon */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 border-2 border-[#2B231D] flex items-center justify-center hover:bg-pink-200 transition-colors shadow-cartoon-sm"
                      title="Instagram Profile"
                    >
                      <FaInstagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Secretary Card - Preserving text: ଶ୍ରୀ. ଗୋବର୍ଦ୍ଧନ ଦଳେଇ, Secretary, 5+ years leadership */}
            <div className="card-cartoon bg-[#FFFDF7] p-4 sm:p-5 hover:-translate-y-1 hover:shadow-cartoon-lg transition-all">
              <div className="flex items-center space-x-4 sm:space-x-5">
                {/* 2D Cartoon Photo Frame on Left - Requirement 5: Keep comments intact, show clean empty placeholder */}
                <div className="relative flex-shrink-0 w-24 h-28 sm:w-28 sm:h-32">
                  <div className="w-full h-full rounded-2xl border-2.5 border-[#2B231D] overflow-hidden bg-sky-100 shadow-cartoon-sm flex items-center justify-center">
                    {/* <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="Secretary"
                      className="w-full h-full object-cover"
                    /> */}
                    {/* Clean 2D cartoon empty photo placeholder for Secretary */}
                    <MemberPhotoPlaceholder role="Secretary" />
                  </div>
                  {/* Secretary Ribbon */}
                  <span className="absolute -bottom-2 -left-1 bg-sky-400 text-stone-900 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md border-2 border-[#2B231D] shadow-cartoon-sm -rotate-2">
                    ସମ୍ପାଦକ
                  </span>
                </div>

                {/* Details on Right */}
                <div className="flex-1 min-w-0">
                  <h3 className="heading-font text-lg sm:text-2xl font-black text-[#2B231D] truncate">
                    ଶ୍ରୀ. ଗୋବର୍ଦ୍ଧନ ଦଳେଇ
                  </h3>
                  <p className="font-cartoon text-sky-700 font-extrabold text-sm sm:text-base">
                    Secretary
                  </p>

                  <div className="flex items-center text-stone-700 text-xs sm:text-sm mt-1">
                    <PiSuitcaseSimpleBold className="w-4 h-4 mr-1.5 text-sky-700 flex-shrink-0" />
                    <span className="font-bold">5+ years leadership</span>
                  </div>

                  {/* Requirement 6: Replace email with Instagram icon */}
                  <div className="flex items-center space-x-2 mt-3">
                    <a
                      href="tel:+919876543210"
                      className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 border-2 border-[#2B231D] flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-cartoon-sm"
                      title="Call"
                    >
                      <FaPhone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 border-2 border-[#2B231D] flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-cartoon-sm"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 border-2 border-[#2B231D] flex items-center justify-center hover:bg-sky-200 transition-colors shadow-cartoon-sm"
                      title="Facebook"
                    >
                      <FaFacebook className="w-3.5 h-3.5" />
                    </a>
                    {/* Requirement 6: Instagram profile link replacing email icon */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 border-2 border-[#2B231D] flex items-center justify-center hover:bg-pink-200 transition-colors shadow-cartoon-sm"
                      title="Instagram Profile"
                    >
                      <FaInstagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
