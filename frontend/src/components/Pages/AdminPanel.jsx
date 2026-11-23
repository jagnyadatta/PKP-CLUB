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
  ArrowLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { StickerBadge, DiyaIcon } from '../Cartoon/CartoonDoodles';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('members');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Sample data
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "ଶ୍ରୀ. ଅଜୟ ଦଳେଇ",
      role: "President",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "10+ years leadership",
      phone: "+919876543200",
      email: "ajay.dalei@example.com",
      category: "president"
    }
  ]);

  const [festivals, setFestivals] = useState([
    {
      id: 1,
      name: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
      image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "ମାର୍ଚ୍ଚ ୧୫-୨୦, ୨୦୨୪",
      description: "ପାରମ୍ପାରିକ ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ଉତ୍ସବ",
      location: "ମୁଖ୍ୟ ମନ୍ଦିର ପ୍ରାଙ୍ଗଣ",
      duration: "୬ ଦିନ",
      participants: "୫୦୦+",
      category: "religious"
    }
  ]);

  const [sports, setSports] = useState([
    {
      id: 1,
      name: "Annual Cricket Tournament 2024",
      image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      year: "2024",
      sport: "cricket",
      teams: "ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ",
      venue: "ମା ବରୁଣାଇ ମୈଦାନ",
      date: "ମାର୍ଚ୍ଚ ୧୫, ୨୦୨୪",
      result: "ପାଇକରାପୁର ବିଜୟୀ"
    }
  ]);

  return (
    <div className="min-h-screen bg-[#FAF7F0] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <Link to="/" className="btn-cartoon-white text-xs sm:text-sm py-2 px-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
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
            <span>ମୁଖ୍ୟ ଆଡମିନ୍ ପ୍ୟାନେଲ୍ →</span>
          </Link>
        </div>

        {/* Dashboard Tabs */}
        <div className="card-cartoon bg-white p-6 shadow-cartoon mb-8">
          <div className="flex flex-wrap gap-3 pb-4 border-b-2 border-stone-200">
            {[
              { id: 'members', label: 'Members (ସଦସ୍ୟ)', count: members.length, icon: Users },
              { id: 'festivals', label: 'Festivals (ପର୍ବପର୍ବାଣି)', count: festivals.length, icon: Calendar },
              { id: 'sports', label: 'Sports (କ୍ରୀଡ଼ା)', count: sports.length, icon: Trophy }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm'
                    : 'bg-[#FAF7F0] text-stone-700 border-[#2B231D]/20 hover:border-[#2B231D]'
                }`}
              >
                <tab.icon className="w-4 h-4 text-stone-900" />
                <span>{tab.label}</span>
                <span className="bg-white px-2 py-0.5 rounded-full text-xs border border-[#2B231D]">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-6 font-cartoon text-center py-8">
            <p className="text-stone-700 font-bold text-base mb-4">
              ମୁଖ୍ୟ ସଦସ୍ୟ ପରିଚାଳନା ପାଇଁ ପୂର୍ଣ୍ଣାଙ୍ଗ ଆଡମିନ୍ ପ୍ୟାନେଲ୍ ବ୍ୟବହାର କରନ୍ତୁ।
            </p>
            <Link to="/admin" className="btn-cartoon-amber inline-flex">
              ପୂର୍ଣ୍ଣ ଆଡମିନ୍ ପ୍ୟାନେଲ୍ କୁ ଯାଆନ୍ତୁ (Open Full Admin)
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
