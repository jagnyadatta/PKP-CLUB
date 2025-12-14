// components/Pages/MemberRegistrationPage.jsx
import React from 'react';
import MemberRegistrationForm from '../MemberRegistration/RegistrationForm';

const MemberRegistrationPage = () => {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white">
      {/* Optional: Add a back button or navigation */}
      <div className="container mx-auto px-4 pt-6 pb-2">
        <div className="max-w-2xl mx-auto">
          <a 
            href="/"
            className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
      
      <MemberRegistrationForm />
    </div>
  );
};

export default MemberRegistrationPage;
