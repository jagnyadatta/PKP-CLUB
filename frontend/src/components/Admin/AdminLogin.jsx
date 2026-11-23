import React, { useState } from "react";
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft, AlertCircle, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { StickerBadge, DiyaIcon } from "../Cartoon/CartoonDoodles";
import MarigoldGarland from "../Cartoon/MarigoldGarland";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setError("ଦୟାକରି ଇମେଲ/ୟୁଜରନେମ୍ ଏବଂ ପାସୱାର୍ଡ ପ୍ରବେଶ କରନ୍ତୁ (Please enter your credentials).");
      return;
    }

    setLoading(true);
    setError("");

    const result = await login(identifier, password);
    setLoading(false);

    if (result.success) {
      navigate("/admin");
    } else {
      setError(result.message || "ପ୍ରବେଶ ବିଫଳ ହେଲା: ପ୍ରମାଣପତ୍ର ଯାଞ୍ଚ କରନ୍ତୁ (Authentication failed).");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-12 pb-16 px-4 flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Top Traditional Garland */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <MarigoldGarland />
      </div>

      {/* Back to Home Button */}
      <div className="w-full max-w-md mb-4 flex justify-between items-center z-20">
        <Link
          to="/"
          className="btn-cartoon-white text-xs sm:text-sm py-2 px-3.5 inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ (Home)</span>
        </Link>
        <span className="font-cartoon text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg border border-[#2B231D]">
          🔒 ସୁରକ୍ଷିତ ପ୍ରବେଶ
        </span>
      </div>

      {/* Main Login Card in 2D Cartoon Style */}
      <div className="w-full max-w-md card-cartoon bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#2B231D] relative z-20">
        
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-300 border-2.5 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center mx-auto mb-3 p-1">
            <img src="/gd-logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>

          <div className="inline-block mb-1">
            <StickerBadge text="ପ୍ରଶାସନିକ ଲଗଇନ୍" color="amber" rotate="-rotate-1" />
          </div>

          <h1 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D]">
            ଗୋପବନ୍ଧୁ ପଠାଗାର
          </h1>
          <p className="font-cartoon text-xs sm:text-sm font-bold text-amber-800 mt-1">
            ଆଡମିନ୍ ଡ୍ୟାସବୋର୍ଡ୍ ପ୍ରବେଶ (Admin Portal Login)
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl border-2 border-rose-600 bg-rose-50 text-rose-900 text-xs sm:text-sm font-cartoon font-bold flex items-start gap-2 animate-wiggle">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-cartoon">
          
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              Username or Email (ୟୁଜରନେମ୍ କିମ୍ବା ଇମେଲ୍) *
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="e.g. jagnyadatta or admin@gopabandhuclub.com"
                className="w-full pl-9 pr-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              Password (ପାସୱାର୍ଡ) *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-10 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-900"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-amber-50 p-3 rounded-xl border border-[#2B231D]/30 text-[11px] text-stone-700 font-semibold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>କେବଳ ଅଧିକୃତ ଆଡମିନିଷ୍ଟ୍ରେଟର ହିଁ ଏହି ଡ୍ୟାସବୋର୍ଡ୍ ବ୍ୟବହାର କରିପାରିବେ।</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-cartoon-amber text-sm sm:text-base font-bold py-3 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span>ଯାଞ୍ଚ ଚାଲିଛି... (Verifying)</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>ପ୍ରବେଶ କରନ୍ତୁ (Admin Sign In)</span>
              </>
            )}
          </button>
        </form>

      </div>

      {/* Footer Info */}
      <p className="mt-6 text-xs text-stone-600 font-cartoon font-semibold text-center z-20">
        ଗୋପବନ୍ଧୁ ପଠାଗାର, ପାଇକରାପୁର, ପୁରୀ • ସ୍ଥାପିତ ୧୯୫୫
      </p>

    </div>
  );
};

export default AdminLogin;
