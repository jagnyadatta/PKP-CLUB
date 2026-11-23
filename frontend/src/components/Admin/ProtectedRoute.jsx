import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AdminLogin from "./AdminLogin";
import { ShieldAlert, ArrowLeft, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * ProtectedRoute Component
 * Requirement 3:
 * Verifies both authentication and administrator privileges.
 * If not logged in -> displays AdminLogin.
 * If logged in but not isAdmin -> displays Access Denied screen.
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading, logout, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F0] flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-cartoon text-stone-800 font-bold">ପ୍ରାଧିକରଣ ଯାଞ୍ଚ ଚାଲିଛି... (Verifying admin authorization...)</p>
      </div>
    );
  }

  // If user is not authenticated, show Admin Login directly
  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  // If authenticated but not administrator (isAdmin is false)
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#FAF7F0] flex items-center justify-center p-4">
        <div className="card-cartoon bg-white p-8 max-w-md w-full shadow-[8px_8px_0px_#2B231D] text-center font-cartoon">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 border-2.5 border-[#2B231D] flex items-center justify-center mx-auto mb-4 text-rose-600 shadow-cartoon-sm">
            <ShieldAlert className="w-9 h-9" />
          </div>

          <h2 className="heading-font text-2xl sm:text-3xl font-black text-stone-900 mb-2">
            ଅନଧିକୃତ ପ୍ରବେଶ
          </h2>
          <p className="text-amber-800 font-bold text-sm mb-3">
            Access Denied: Administrator Privileges Required
          </p>

          <p className="text-stone-700 text-sm mb-6 font-semibold leading-relaxed">
            ଆପଣଙ୍କର ଏହି ପ୍ରଶାସନିକ ପ୍ୟାନେଲ୍ ବ୍ୟବହାର କରିବାର ଅନୁମତି ନାହିଁ। କେବଳ ମୁଖ୍ୟ ଆଡମିନିଷ୍ଟ୍ରେଟର ଏହାକୁ ପରିଚାଳନା କରିପାରିବେ।
          </p>

          <div className="space-y-2">
            <button
              onClick={logout}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 px-4 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>ଲଗଆଉଟ୍ କରନ୍ତୁ (Log Out)</span>
            </button>
            <Link
              to="/"
              className="w-full btn-cartoon-white text-xs sm:text-sm font-bold py-2.5 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ (Back to Home)</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
