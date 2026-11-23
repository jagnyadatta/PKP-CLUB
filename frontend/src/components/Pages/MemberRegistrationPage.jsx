// components/Pages/MemberRegistrationPage.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MemberRegistrationForm from '../MemberRegistration/RegistrationForm';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

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
      
      <MemberRegistrationForm />
    </div>
  );
};

export default MemberRegistrationPage;
