// components/MemberRegistration/RegistrationForm.jsx
import React, { useState } from 'react';
import { 
  Upload, 
  X, 
  UserPlus, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Smartphone,
  Mail,
  Globe,
  Award,
  User,
  Sparkles,
  Phone
} from 'lucide-react';
import { BASE_URL } from "../../utils/constant.js";
import { StickerBadge, DiyaIcon } from '../Cartoon/CartoonDoodles';

const MemberRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    experience: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    email: '',
    category: 'member'
  });
  
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [success, setSuccess] = useState(false);

  const categories = [
    { value: 'president', label: 'President (ସଭାପତି)' },
    { value: 'secretary', label: 'Secretary (ସମ୍ପାଦକ)' },
    { value: 'committee', label: 'Committee Member (କମିଟି ସଦସ୍ୟ)' },
    { value: 'member', label: 'General Member (ସାଧାରଣ ସଦସ୍ୟ)' }
  ];

  const roles = [
    'President',
    'Vice-President',
    'Secretary',
    'Treasurer',
    'Puja Secretary',
    'Assistant Secretary',
    'Sport Secretary',
    'Cultural Secretary',
    'Member'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setMessage({ 
          type: 'error', 
          text: 'Please select a valid image (JPEG, PNG, WebP, GIF)' 
        });
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setMessage({ 
          type: 'error', 
          text: 'Image size should be less than 10MB' 
        });
        return;
      }

      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setMessage({ type: '', text: '' });
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return { valid: false, message: 'Full name is required (ପୂରା ନାମ ଆବଶ୍ୟକ)' };
    }
    if (!formData.role) {
      return { valid: false, message: 'Role is required (ଦାୟିତ୍ୱ/ପଦବୀ ଚୟନ କରନ୍ତୁ)' };
    }
    if (!formData.phone.trim()) {
      return { valid: false, message: 'Phone number is required (ଫୋନ୍ ନମ୍ବର ଆବଶ୍ୟକ)' };
    }
    
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      return { valid: false, message: 'Phone number must be 10-15 digits' };
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }

    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateForm();
    if (!validation.valid) {
      setMessage({ type: 'error', text: validation.message });
      return;
    }

    if (!image) {
      setMessage({ type: 'error', text: 'Please upload a profile photo (ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ)' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      submitData.append('image', image);

      const response = await fetch(`${BASE_URL}/api/register/register`, {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setMessage({ 
          type: 'success', 
          text: 'Registration successful! Your membership will be reviewed by admin.' 
        });
        
        setTimeout(() => {
          setFormData({
            name: '',
            role: '',
            experience: '',
            phone: '',
            whatsapp: '',
            facebook: '',
            email: '',
            category: 'member'
          });
          setImage(null);
          setImagePreview('');
        }, 3000);
      } else {
        setMessage({ 
          type: 'error', 
          text: result.message || 'Registration failed. Please try again.' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  // 2D Cartoon Success Modal
  if (success) {
    return (
      <div className="max-w-lg mx-auto p-4 animate-fadeIn">
        <div className="card-cartoon bg-white p-8 sm:p-10 text-center shadow-[8px_8px_0px_#2B231D]">
          <div className="w-20 h-20 bg-emerald-200 rounded-full border-3 border-[#2B231D] shadow-cartoon flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
            <CheckCircle className="w-10 h-10 text-emerald-800" />
          </div>
          
          <h2 className="heading-font text-3xl font-black text-stone-900 mb-3">
            Registration Successful! 🎉
          </h2>
          
          <p className="font-cartoon text-stone-700 mb-6 leading-relaxed">
            Thank you for registering. Your application has been received and will be reviewed by our admin team.
          </p>
          
          <div className="bg-amber-100 rounded-2xl border-2 border-[#2B231D] p-4 mb-6 shadow-cartoon-sm">
            <p className="font-cartoon text-sm font-bold text-amber-900">
              A confirmation message with your membership ID will be sent to your phone.
            </p>
          </div>
          
          <button
            onClick={() => setSuccess(false)}
            className="w-full btn-cartoon-amber text-base font-bold"
          >
            Register Another Member
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block mb-3">
          <StickerBadge text="ସଦସ୍ୟତା ଆବେଦନ" color="amber" rotate="-rotate-2" />
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <DiyaIcon className="w-7 h-7" />
          <h1 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D]">
            Join Our Club
          </h1>
        </div>

        <p className="font-cartoon text-stone-700 text-sm sm:text-base font-bold">
          Fill in your details to become a member (ଗୋପବନ୍ଧୁ ପଠାଗାର ସଦସ୍ୟ ହୁଅନ୍ତୁ)
        </p>
      </div>

      {/* Form Card in 2D Cartoon Style */}
      <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#2B231D] mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Image Upload Box with 2D Cartoon Dotted Frame */}
          <div className="border-3 border-dashed border-[#2B231D] rounded-3xl p-5 sm:p-6 text-center bg-[#FAF7F0] hover:bg-amber-50/50 transition-colors">
            {imagePreview ? (
              <div className="relative inline-block">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-3 border-[#2B231D] overflow-hidden shadow-cartoon mx-auto">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1.5 border-2 border-[#2B231D] hover:bg-rose-600 transition-all shadow-cartoon-sm cursor-pointer"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label htmlFor="image-upload" className="cursor-pointer block">
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-amber-300 rounded-2xl border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center mx-auto">
                    <Upload className="w-7 h-7 text-stone-900" />
                  </div>
                  <div>
                    <p className="font-odia text-base sm:text-lg font-bold text-stone-900">
                      ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ (Tap to upload photo)
                    </p>
                    <p className="font-cartoon text-xs text-stone-600 font-semibold mt-1">
                      Max size: 10MB • JPG, PNG, WebP
                    </p>
                  </div>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-cartoon">
            
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <User className="w-4 h-4 mr-1.5 text-amber-700" />
                Full Name (ପୂରା ନାମ) *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Award className="w-4 h-4 mr-1.5 text-amber-700" />
                Role (ପଦବୀ) *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                required
              >
                <option value="">Select your role</option>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Globe className="w-4 h-4 mr-1.5 text-amber-700" />
                Category (ଶ୍ରେଣୀ)
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Smartphone className="w-4 h-4 mr-1.5 text-amber-700" />
                Phone Number (ଫୋନ୍) *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="9876543210"
                required
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Smartphone className="w-4 h-4 mr-1.5 text-emerald-700" />
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="If same as phone, leave empty"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Mail className="w-4 h-4 mr-1.5 text-amber-700" />
                Email Address (ଇମେଲ୍)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="you@example.com"
              />
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Award className="w-4 h-4 mr-1.5 text-amber-700" />
                Experience (ଅଭିଜ୍ଞତା)
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="e.g., 5 years in community service"
              />
            </div>

            {/* Facebook */}
            <div className="md:col-span-2">
              <label className="flex items-center text-sm font-bold text-[#2B231D] mb-1.5">
                <Globe className="w-4 h-4 mr-1.5 text-amber-700" />
                Facebook Profile
              </label>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="facebook.com/username"
              />
            </div>

          </div>

          {/* Feedback Alert */}
          {message.text && (
            <div
              className={`p-3.5 rounded-xl border-2 border-[#2B231D] flex items-start text-xs sm:text-sm font-bold shadow-cartoon-sm ${
                message.type === 'success'
                  ? 'bg-emerald-100 text-emerald-900'
                  : 'bg-rose-100 text-rose-900'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-cartoon-amber text-base font-bold py-3.5 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Registering...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  <span>Register Now (ପଞ୍ଜୀକରଣ କରନ୍ତୁ)</span>
                </>
              )}
            </button>
            
            <p className="text-center font-cartoon text-xs text-stone-600 font-bold mt-3">
              By registering, you agree to our club terms and conditions
            </p>
          </div>

        </form>
      </div>

      {/* Guidelines Card with 2D Cartoon Style */}
      <div className="space-y-4 font-cartoon">
        
        <div className="card-cartoon bg-amber-50 p-5 shadow-cartoon-sm">
          <h3 className="text-sm sm:text-base font-bold text-amber-900 mb-2.5 flex items-center gap-1.5">
            📋 Registration Guidelines
          </h3>
          <ul className="text-xs sm:text-sm text-stone-800 space-y-1.5 font-semibold">
            <li className="flex items-start">
              <span className="mr-2 text-amber-700">★</span>
              <span>Fields marked with * are mandatory</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-amber-700">★</span>
              <span>Use a clear, recent photo for identification</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-amber-700">★</span>
              <span>Phone number will be your unique ID</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-amber-700">★</span>
              <span>Admin approval is required for activation</span>
            </li>
          </ul>
        </div>

        {/* Contact Secretary */}
        <div className="card-cartoon bg-white p-4 shadow-cartoon-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-emerald-600" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">Need Help?</h4>
              <p className="text-xs text-stone-600 font-semibold">Contact club secretary</p>
            </div>
          </div>
          <a
            href="tel:+917606976736"
            className="btn-cartoon-amber text-xs py-1.5 px-3"
          >
            +91 7606976736
          </a>
        </div>

      </div>

    </div>
  );
};

export default MemberRegistrationForm;
