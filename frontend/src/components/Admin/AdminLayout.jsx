// components/Admin/AdminLayout.jsx
import React, { useState } from 'react';
import { Users, Settings, LogOut, Menu, X, Home, UserPlus, Calendar, ShieldCheck, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AddMemberForm from './AddMemberForm';
import ManageMembers from './ManageMembers';
import ManagePrograms from './ManagePrograms';
import { useAuth } from '../../context/AuthContext';
import { DiyaIcon, StickerBadge } from '../Cartoon/CartoonDoodles';
import { REGISTRATION_ENABLED } from '../../utils/constant';

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('manage-members');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'manage-members', label: 'Manage Members (ସଦସ୍ୟ ପରିଚାଳନା)', icon: Users },
    { id: 'add-member', label: 'Add Member (ସଦସ୍ୟ ଯୋଗ କରନ୍ତୁ)', icon: UserPlus },
    { id: 'manage-programs', label: 'Programs & Activities (କାର୍ଯ୍ୟକ୍ରମ)', icon: Calendar },
    { id: 'settings', label: 'Admin Settings (ସେଟିଂସ୍)', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'add-member':
        return <AddMemberForm />;
      case 'manage-members':
        return <ManageMembers />;
      case 'manage-programs':
        return <ManagePrograms />;
      case 'settings':
        return (
          <div className="card-cartoon bg-white p-6 sm:p-8 max-w-xl mx-auto shadow-cartoon my-8 font-cartoon">
            <div className="w-16 h-16 rounded-2xl bg-amber-300 border-2.5 border-[#2B231D] flex items-center justify-center mx-auto mb-4 shadow-cartoon-sm">
              <ShieldCheck className="w-8 h-8 text-stone-900" />
            </div>
            
            <h3 className="heading-font text-2xl sm:text-3xl font-black text-stone-900 text-center mb-1">
              Admin Profile & Settings
            </h3>
            <p className="text-stone-600 text-xs text-center mb-6 font-semibold">
              ଗୋପବନ୍ଧୁ ପଠାଗାର ପ୍ରଶାସନିକ ସୂଚନା (Administrator Credentials & Status)
            </p>

            <div className="space-y-3 bg-[#FAF7F0] p-4 rounded-2xl border-2 border-[#2B231D] text-xs sm:text-sm font-bold text-stone-800 mb-6">
              <div className="flex justify-between items-center py-1 border-b border-stone-200">
                <span>Administrator Name:</span>
                <span className="text-amber-800">{user?.name || "Jagnyadatta Dalai"}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-stone-200">
                <span>Username:</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-stone-300">{user?.username}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-stone-200">
                <span>Email Address:</span>
                <span>{user?.email}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-stone-200">
                <span>Admin Privileges:</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-400">
                  {user?.isAdmin ? "Active (ପ୍ରମୁଖ ଆଡମିନ୍)" : "Inactive"}
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Public Registration Status:</span>
                <span className={REGISTRATION_ENABLED ? "text-emerald-700" : "text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-300"}>
                  {REGISTRATION_ENABLED ? "Enabled (ସକ୍ରିୟ)" : "Temporarily Closed (ସ୍ଥଗିତ)"}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>ଲଗଆଉଟ୍ କରନ୍ତୁ (Sign Out of Admin)</span>
            </button>
          </div>
        );
      default:
        return <ManageMembers />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      
      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative flex w-full max-w-xs flex-col bg-white border-r-3 border-[#2B231D] h-full shadow-2xl p-4">
            <div className="flex items-center justify-between pb-4 border-b-2 border-stone-200">
              <div className="flex items-center gap-2">
                <DiyaIcon className="w-6 h-6" />
                <h2 className="heading-font text-xl font-bold text-stone-900">Admin Panel</h2>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)} 
                className="p-1 rounded-lg border border-[#2B231D] hover:bg-amber-100"
              >
                <X className="w-5 h-5 text-stone-900" />
              </button>
            </div>

            <nav className="flex-1 space-y-2 mt-4 font-cartoon">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-3.5 py-2.5 text-sm font-bold rounded-xl border-2 transition-all cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm'
                        : 'bg-white text-stone-700 border-transparent hover:border-[#2B231D] hover:bg-amber-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2.5 text-stone-900" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-4 border-t border-stone-200 space-y-2">
                <Link
                  to="/"
                  className="w-full flex items-center px-3.5 py-2.5 text-sm font-bold rounded-xl border-2 border-[#2B231D] bg-emerald-300 text-stone-900 shadow-cartoon-sm"
                >
                  <Home className="w-4 h-4 mr-2.5" />
                  <span>କ୍ଲବ୍ ମୁଖ୍ୟ ପୃଷ୍ଠା (Website)</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-3.5 py-2.5 text-sm font-bold rounded-xl border-2 border-[#2B231D] bg-rose-200 text-rose-900 shadow-cartoon-sm cursor-pointer"
                >
                  <LogOut className="w-4 h-4 mr-2.5" />
                  <span>ଲଗଆଉଟ୍ (Log Out)</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col border-r-3 border-[#2B231D] bg-white">
        <div className="flex flex-col flex-grow pt-6 pb-4 overflow-y-auto px-5">
          
          {/* Header */}
          <div className="flex items-center space-x-3 pb-5 border-b-2 border-stone-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-300 border-2 border-[#2B231D] shadow-cartoon-sm p-1 flex items-center justify-center">
              <img src="/gd-logo.png" alt="logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="heading-font text-xl font-black text-stone-900 leading-tight">
                ଗୋପବନ୍ଧୁ ପଠାଗାର
              </h1>
              <p className="font-cartoon text-xs font-bold text-amber-800">
                ଆଡମିନ୍ ପ୍ୟାନେଲ୍ (Admin)
              </p>
            </div>
          </div>

          {/* Admin User Badge */}
          <div className="my-4 bg-amber-50 p-3 rounded-2xl border-2 border-[#2B231D] font-cartoon text-xs">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#2B231D] inline-block animate-pulse"></span>
              <span>{user?.name || "Admin"}</span>
            </div>
            <p className="text-[11px] text-amber-900 font-semibold mt-0.5 truncate">
              {user?.email}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2 font-cartoon">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-2.5 text-xs xl:text-sm font-bold rounded-xl border-2 transition-all cursor-pointer text-left ${
                    activeTab === item.id
                      ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm -translate-y-0.5'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#2B231D] hover:bg-amber-50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2.5 text-stone-900 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="border-t-2 border-stone-200 pt-4 space-y-2">
            <Link
              to="/"
              className="w-full btn-cartoon-white text-xs font-bold py-2.5 flex items-center justify-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>ୱେବସାଇଟ୍ କୁ ଫେରନ୍ତୁ</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full bg-rose-100 hover:bg-rose-200 text-rose-900 font-bold text-xs py-2.5 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>ଲଗଆଉଟ୍ (Log Out)</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-72">
        
        {/* Top Mobile Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF7F0] border-b-2 border-[#2B231D] px-4 py-3 flex items-center justify-between lg:hidden shadow-xs">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-xl border-2 border-[#2B231D] bg-white shadow-cartoon-sm"
          >
            <Menu className="w-5 h-5 text-stone-900" />
          </button>
          
          <h1 className="heading-font text-base sm:text-lg font-black text-stone-900">
            ଗୋପବନ୍ଧୁ ପଠାଗାର Admin
          </h1>

          <div className="flex items-center gap-1.5">
            <Link
              to="/"
              className="p-1.5 rounded-xl border-2 border-[#2B231D] bg-amber-300 shadow-cartoon-sm"
              title="Website"
            >
              <Home className="w-4 h-4 text-stone-900" />
            </Link>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-xl border-2 border-[#2B231D] bg-rose-200 shadow-cartoon-sm"
              title="Log Out"
            >
              <LogOut className="w-4 h-4 text-rose-900" />
            </button>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
