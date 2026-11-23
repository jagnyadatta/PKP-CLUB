// components/Pages/MemberRegistrationPage.jsx
import React from 'react';
import { ArrowLeft, Clock, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import MemberRegistrationForm from '../MemberRegistration/RegistrationForm';
import MarigoldGarland from '../Cartoon/MarigoldGarland';
import { REGISTRATION_ENABLED } from '../../utils/constant';
import { StickerBadge, DiyaIcon } from '../Cartoon/CartoonDoodles';

const MemberRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-20 sm:pt-24 pb-16">
      {/* Top Garland */}
      <MarigoldGarland />

      {/* Back button */}
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-2">
        <Link 
          to="/"
          className="btn-cartoon-white text-xs sm:text-sm py-1.5 px-3 inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ (Back to Home)</span>
        </Link>
      </div>
      
      {/* Requirement 1: If registration is temporarily paused, display polite 2D cartoon notice */}
      {!REGISTRATION_ENABLED ? (
        <div className="max-w-xl mx-auto px-4 py-12">
          <div className="card-cartoon bg-white p-8 sm:p-10 text-center shadow-[8px_8px_0px_#2B231D] font-cartoon">
            <div className="w-16 h-16 rounded-2xl bg-amber-300 border-2.5 border-[#2B231D] flex items-center justify-center mx-auto mb-4 shadow-cartoon-sm">
              <Clock className="w-8 h-8 text-stone-900" />
            </div>

            <div className="inline-block mb-2">
              <StickerBadge text="ସୂଚନା (Notice)" color="amber" rotate="-rotate-1" />
            </div>

            <h2 className="heading-font text-2xl sm:text-3xl font-black text-stone-900 mb-3">
              ସଦସ୍ୟତା ପଞ୍ଜୀକରଣ ବର୍ତ୍ତମାନ ପାଇଁ ସ୍ଥଗିତ ରଖାଯାଇଛି
            </h2>

            <p className="text-amber-800 font-bold text-sm mb-4">
              Member Registration is Temporarily Paused
            </p>

            <p className="text-stone-700 text-sm leading-relaxed font-semibold mb-6">
              ଗୋପବନ୍ଧୁ ପଠାଗାରର ନୂତନ ସଦସ୍ୟତା ପଞ୍ଜୀକରଣ ବର୍ତ୍ତମାନ ପ୍ରଶାସନିକ କାରଣରୁ ସ୍ଥଗିତ ରହିଛି। ପୂର୍ବରୁ ସଦସ୍ୟ ଥିବା ବ୍ୟକ୍ତିମାନେ ଆଡମିନ୍ ପ୍ୟାନେଲ୍ ମାଧ୍ୟମରେ ପ୍ରବେଶ କରିପାରିବେ। ଖୁବ୍ ଶୀଘ୍ର ପଞ୍ଜୀକରଣ ପୁନର୍ବାର ଆରମ୍ଭ କରାଯିବ।
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="btn-cartoon-amber text-xs sm:text-sm py-2.5 px-5">
                ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଯାଆନ୍ତୁ (Go to Home)
              </Link>
              <Link to="/all-members" className="btn-cartoon-white text-xs sm:text-sm py-2.5 px-5">
                ସଦସ୍ୟ ତାଲିକା ଦେଖନ୍ତୁ (View Members)
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Preserved RegistrationForm rendered when REGISTRATION_ENABLED is true */
        <MemberRegistrationForm />
      )}
    </div>
  );
};

export default MemberRegistrationPage;
