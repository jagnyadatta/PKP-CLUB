// components/Admin/AddMemberForm.jsx
import React, { useState } from 'react';
import { Upload, X, UserPlus, Save, Loader } from 'lucide-react';
import { BASE_URL } from "../../utils/constant.js";
import { StickerBadge, DiyaIcon } from '../Cartoon/CartoonDoodles';

const AddMemberForm = () => {
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
      if (!file.type.startsWith('image/')) {
        setMessage({ type: 'error', text: 'Please select an image file' });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Image size should be less than 5MB' });
        return;
      }

      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.role || !formData.phone) {
      setMessage({ type: 'error', text: 'Name, role, and phone are required fields' });
      return;
    }

    if (!image) {
      setMessage({ type: 'error', text: 'Please upload a profile photo' });
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

      const response = await fetch(`${BASE_URL}/api/members/new`, {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Member added successfully! (ସଦସ୍ୟ ସଫଳତାର ସହ ଯୋଡ଼ାଗଲା)' });
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
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to add member' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add member. Please check backend connection.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block mb-2">
          <StickerBadge text="ପ୍ରଶାସନିକ ଫର୍ମ" color="amber" rotate="-rotate-1" />
        </div>
        <h1 className="heading-font text-3xl sm:text-4xl font-black text-[#2B231D] mb-2">
          Add New Member (ନୂତନ ସଦସ୍ୟ ଯୋଗ କରନ୍ତୁ)
        </h1>
        <p className="font-cartoon text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
          Fill in the details below to add a new member to the club. All fields marked with * are required.
        </p>
      </div>

      {/* Form Card in 2D Cartoon Style */}
      <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#2B231D] mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Image Upload Section */}
          <div className="border-3 border-dashed border-[#2B231D] rounded-3xl p-6 text-center bg-[#FAF7F0] hover:bg-amber-50 transition-colors">
            {imagePreview ? (
              <div className="relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 rounded-2xl border-3 border-[#2B231D] object-cover shadow-cartoon mx-auto"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 border-2 border-[#2B231D] hover:bg-rose-600 shadow-cartoon-sm cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-14 h-14 bg-amber-300 rounded-2xl border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center mx-auto">
                  <Upload className="w-7 h-7 text-stone-900" />
                </div>
                <div>
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <span className="font-odia font-bold text-stone-900 hover:text-amber-700 text-base">
                      ପ୍ରୋଫାଇଲ୍ ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ (Click to upload photo)
                    </span>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  <p className="font-cartoon text-xs text-stone-600 mt-1 font-semibold">
                    PNG, JPG, JPEG up to 5MB
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-cartoon">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                Full Name (ନାମ) *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="e.g. ଶ୍ରୀ. ଅଜୟ ଦଳେଇ"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                Role (ପଦବୀ) *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                required
              >
                <option value="">Select Role</option>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                Phone Number (ଫୋନ୍) *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="+91 9876543210"
                required
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="member@example.com"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
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

            {/* Experience */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                Experience (ଅଭିଜ୍ଞତା)
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="e.g., 5+ years leadership"
              />
            </div>

            {/* Facebook */}
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-1.5">
                Facebook Profile
              </label>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                placeholder="username"
              />
            </div>

          </div>

          {/* Feedback Message */}
          {message.text && (
            <div
              className={`p-4 rounded-xl border-2 border-[#2B231D] font-cartoon text-sm font-bold shadow-cartoon-sm ${
                message.type === 'success'
                  ? 'bg-emerald-100 text-emerald-900'
                  : 'bg-rose-100 text-rose-900'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-cartoon-amber text-base font-bold py-3 px-8 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Adding Member...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  <span>Add Member (ସଦସ୍ୟ ଯୋଗ କରନ୍ତୁ)</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Guidelines Note */}
      <div className="card-cartoon bg-amber-50 p-6 shadow-cartoon-sm font-cartoon">
        <h3 className="text-base font-bold text-amber-900 mb-2.5">
          📝 Form Guidelines
        </h3>
        <ul className="text-xs sm:text-sm text-stone-800 space-y-1.5 font-semibold">
          <li>• All fields marked with * are mandatory</li>
          <li>• Profile photo should be clear and professional</li>
          <li>• Phone number will be used for unique identification</li>
          <li>• WhatsApp number will default to phone number if not provided</li>
          <li>• Category helps in organizing members on the website</li>
        </ul>
      </div>

    </div>
  );
};

export default AddMemberForm;
