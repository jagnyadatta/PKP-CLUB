// components/Admin/AdminLayout.jsx
import React, { useState } from 'react';
import { Users, Settings, LogOut, Menu, X, Home, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddMemberForm from './AddMemberForm';
import ManageMembers from './ManageMembers';
import { DiyaIcon } from '../Cartoon/CartoonDoodles';

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState('add-member');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'add-member', label: 'Add Member (ସଦସ୍ୟ ଯୋଗ କରନ୍ତୁ)', icon: UserPlus },
    { id: 'manage-members', label: 'Manage Members (ପରିଚାଳନା)', icon: Users },
    { id: 'settings', label: 'Settings (ସେଟିଂସ)', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'add-member':
        return <AddMemberForm />;
      case 'manage-members':
        return <ManageMembers />;
      case 'settings':
        return (
          <div className="card-cartoon bg-white p-8 text-center max-w-md mx-auto shadow-cartoon my-12">
            <Settings className="w-12 h-12 text-amber-500 mx-auto mb-3 animate-spin-slow" />
            <h3 className="heading-font text-2xl font-bold text-stone-900 mb-2">Settings</h3>
            <p className="font-cartoon text-stone-600 text-sm">ପ୍ରଶାସନିକ ସେଟିଂସ୍ ଖୁବ୍ ଶୀଘ୍ର ଉପଲବ୍ଧ ହେବ (Coming Soon)</p>
          </div>
        );
      default:
        return <AddMemberForm />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      
      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-[#2B231D]/60" onClick={() => setSidebarOpen(false)}></div>
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

              <div className="pt-4 border-t border-stone-200">
                <Link
                  to="/"
                  className="w-full flex items-center px-3.5 py-2.5 text-sm font-bold rounded-xl border-2 border-[#2B231D] bg-emerald-300 text-stone-900 shadow-cartoon-sm"
                >
                  <Home className="w-4 h-4 mr-2.5" />
                  <span>କ୍ଲବ୍ ମୁଖ୍ୟ ପୃଷ୍ଠା (Website)</span>
                </Link>
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

          {/* Navigation Links */}
          <nav className="mt-6 flex-1 space-y-2.5 font-cartoon">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl border-2 transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm -translate-y-0.5'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#2B231D] hover:bg-amber-50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-3 text-stone-900" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Return to Public Website */}
          <div className="border-t-2 border-stone-200 pt-4 space-y-2">
            <Link
              to="/"
              className="w-full btn-cartoon-white text-xs font-bold py-2.5"
            >
              <Home className="w-4 h-4" />
              <span>ୱେବସାଇଟ୍ କୁ ଫେରନ୍ତୁ</span>
            </Link>
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
          
          <h1 className="heading-font text-lg font-black text-stone-900">
            ଗୋପବନ୍ଧୁ ପଠାଗାର Admin
          </h1>

          <Link
            to="/"
            className="p-1.5 rounded-xl border-2 border-[#2B231D] bg-amber-300 shadow-cartoon-sm"
            title="Website"
          >
            <Home className="w-4 h-4 text-stone-900" />
          </Link>
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
