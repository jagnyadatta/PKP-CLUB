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
  User
} from 'lucide-react';
import { BASE_URL } from "../../utils/constant.js";

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
    { value: 'president', label: 'President' },
    { value: 'secretary', label: 'Secretary' },
    { value: 'committee', label: 'Committee Member' },
    { value: 'member', label: 'General Member' }
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
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setMessage({ 
          type: 'error', 
          text: 'Please select a valid image (JPEG, PNG, WebP, GIF)' 
        });
        return;
      }

      // Validate file size (max 10MB)
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
      setMessage({ type: '', text: '' }); // Clear any previous messages
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return { valid: false, message: 'Full name is required' };
    }
    if (!formData.role) {
      return { valid: false, message: 'Role is required' };
    }
    if (!formData.phone.trim()) {
      return { valid: false, message: 'Phone number is required' };
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      return { valid: false, message: 'Phone number must be 10-15 digits' };
    }

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }

    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm();
    if (!validation.valid) {
      setMessage({ type: 'error', text: validation.message });
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
      
      // Append form data
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      // Append image file
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
        
        // Reset form after 3 seconds
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
          setSuccess(false);
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

  // Success Modal
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-fadeIn">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Registration Successful! 🎉
          </h2>
          
          <p className="text-gray-600 mb-6">
            Thank you for registering. Your application has been received and will be reviewed by our admin team.
          </p>
          
          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-green-700">
              A confirmation message with your membership ID will be sent to your phone.
            </p>
          </div>
          
          <button
            onClick={() => setSuccess(false)}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Register Another Member
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50 py-6 md:py-10 px-3 sm:px-4">
      {/* Container with max width for better mobile experience */}
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Join Our Club
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Fill in your details to become a member
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6 lg:p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            
            {/* Image Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-sky-400 transition-colors duration-300">
              {imagePreview ? (
                <div className="relative inline-block">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full rounded-xl object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-all duration-200 shadow-lg"
                    aria-label="Remove image"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              ) : (
                <label htmlFor="image-upload" className="cursor-pointer block">
                  <div className="space-y-3 md:space-y-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sky-600 font-semibold text-sm md:text-base">
                        Tap to upload your photo
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        Max size: 10MB • Supports: JPG, PNG, WebP
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

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Name */}
              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 mr-2 text-gray-500" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Role */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
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
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Globe className="w-4 h-4 mr-2 text-gray-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
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
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Smartphone className="w-4 h-4 mr-2 text-gray-500" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="9876543210"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Smartphone className="w-4 h-4 mr-2 text-gray-500" />
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="9876543210"
                />
                <p className="text-xs text-gray-500 mt-1">
                  If same as phone, leave empty
                </p>
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>

              {/* Experience */}
              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., 5 years in community service"
                />
              </div>

              {/* Facebook */}
              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Globe className="w-4 h-4 mr-2 text-gray-500" />
                  Facebook Profile
                </label>
                <input
                  type="text"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="facebook.com/username"
                />
              </div>
            </div>

            {/* Message Alert */}
            {message.text && (
              <div
                className={`p-3 md:p-4 rounded-xl flex items-start ${
                  message.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm md:text-base">{message.text}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Register Now</span>
                  </>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-3">
                By registering, you agree to our club terms and conditions
              </p>
            </div>
          </form>
        </div>

        {/* Information Cards */}
        <div className="space-y-4">
          {/* Guidelines Card */}
          <div className="bg-blue-50 rounded-2xl p-4 md:p-5 border border-blue-200">
            <h3 className="text-sm md:text-base font-semibold text-blue-800 mb-2 flex items-center">
              📋 Registration Guidelines
            </h3>
            <ul className="text-xs md:text-sm text-blue-700 space-y-1.5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fields marked with * are mandatory</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use a clear, recent photo for identification</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Phone number will be your unique ID</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Admin approval is required for activation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info Card */}
          <div className="bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-200">
            <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
              📞 Need Help?
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Contact club secretary at:{" "}
              <a href="tel:+917606976736" className="text-sky-600 font-medium">
                +91 7606976736
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Add custom styles for mobile responsiveness */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Better touch targets on mobile */
        @media (max-width: 640px) {
          input, select, button {
            font-size: 16px; /* Prevents zoom on iOS */
          }
          .min-h-screen {
            min-height: -webkit-fill-available; /* Better mobile height */
          }
        }
        
        /* Hide scrollbar but allow scrolling */
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default MemberRegistrationForm;
