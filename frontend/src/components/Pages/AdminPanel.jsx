// components/Pages/AdminPanel.jsx
import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Calendar, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Search,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { StickerBadge, DiyaIcon } from '../Cartoon/CartoonDoodles';

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF7F0] p-4 sm:p-8 font-cartoon">
      <div className="max-w-4xl mx-auto pt-8">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <Link to="/" className="btn-cartoon-white text-xs sm:text-sm py-2 px-4 inline-flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            <span>ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ (Home)</span>
          </Link>

          <div className="text-center">
            <div className="inline-block mb-1">
              <StickerBadge text="କ୍ଲବ୍ ପରିଚାଳନା" color="amber" rotate="-rotate-1" />
            </div>
            <h1 className="heading-font text-3xl sm:text-4xl font-black text-[#2B231D]">
              Admin Dashboard (ଆଡମିନ୍ ପ୍ୟାନେଲ୍)
            </h1>
          </div>

          <Link to="/admin" className="btn-cartoon-amber text-xs sm:text-sm py-2 px-4">
            <span>ପ୍ରବେଶ କରନ୍ତୁ →</span>
          </Link>
        </div>

        {/* Informative Card */}
        <div className="card-cartoon bg-white p-8 sm:p-10 shadow-[8px_8px_0px_#2B231D] text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-amber-300 border-2.5 border-[#2B231D] flex items-center justify-center mx-auto mb-4 shadow-cartoon-sm">
            <ShieldCheck className="w-8 h-8 text-stone-900" />
          </div>

          <h2 className="heading-font text-2xl sm:text-3xl font-black text-stone-900 mb-2">
            ସୁରକ୍ଷିତ ଆଡମିନ୍ ପ୍ୟାନେଲ୍ (Secure Administrator Dashboard)
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-semibold max-w-xl mx-auto mb-6 leading-relaxed">
            ଏହି ପ୍ୟାନେଲ୍ ମାଧ୍ୟମରେ କ୍ଲବ୍‌ର ସଦସ୍ୟ (Members), ସାଂସ୍କୃତିକ ଉତ୍ସବ (Culture & Festivals), ଏବଂ କ୍ରୀଡ଼ା ଟୁର୍ଣ୍ଣାମେଣ୍ଟ (Sports) ପରିଚାଳନା କରାଯାଇପାରିବ। ପ୍ରବେଶ କରିବା ପାଇଁ ଅଧିକୃତ ପ୍ରଶାସକ କ୍ରେଡେନ୍ସିଆଲ୍ ଆବଶ୍ୟକ।
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/admin" className="btn-cartoon-amber text-sm font-bold py-3 px-6 inline-flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>ମୁଖ୍ୟ ଆଡମିନ୍ ଡ୍ୟାସବୋର୍ଡ୍ ଖୋଲନ୍ତୁ (Open Admin Portal)</span>
            </Link>
            <Link to="/" className="btn-cartoon-white text-sm font-bold py-3 px-6 inline-flex items-center justify-center gap-2">
              <span>ମୁଖ୍ୟ ୱେବସାଇଟ୍ (Website)</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
