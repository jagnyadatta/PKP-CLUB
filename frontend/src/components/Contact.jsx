import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent mb-6 p-2">
            ସଂପର୍କ କରନ୍ତୁ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ଆମ ସହିତ ସଂପର୍କ ରକ୍ଷା କରନ୍ତୁ। ଆପଣଙ୍କର ମତାମତ ଓ ପ୍ରସ୍ତାବ ପାଇଁ ଆମେ ସର୍ବଦା ଉତ୍ସୁକ!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  ଆପଣଙ୍କର ନାମ
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base outline-none"
                  placeholder="ଆପଣଙ୍କର ନାମ ଲେଖନ୍ତୁ"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  ଇମେଲ ଠିକଣା
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base outline-none"
                  placeholder="ଆପଣଙ୍କର ଇମେଲ ଲେଖନ୍ତୁ"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  ବାର୍ତ୍ତା
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base resize-none outline-none"
                  placeholder="ଆପଣଙ୍କର ବାର୍ତ୍ତା ଏଠାରେ ଲେଖନ୍ତୁ..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>ବାର୍ତ୍ତା ପଠାନ୍ତୁ</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-100 shadow-sm">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-lg truncate">ଠିକଣା</h3>
                    <p className="text-gray-600 text-xs sm:text-base break-words">
                      ପାଇକରାପୁର, କୃଷ୍ଣପ୍ରସାଦ, ପୁରୀ, ୭୫୨୦୩୨
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-100 shadow-sm">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-lg truncate">ଫୋନ୍ ନମ୍ବର</h3>
                    <p className="text-gray-600 text-xs sm:text-base break-words">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-100 shadow-sm">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-lg truncate">ଇମେଲ</h3>
                    <p className="text-gray-600 text-xs sm:text-base break-all">
                      gopabandhupathagarapkp@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d700.2502793472158!2d85.16740181151425!3d19.479476748167016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1758882183227!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64"
                title="Panchudola Gram Location Map"
              >
              </iframe>
              <div className="p-3 sm:p-4 text-center bg-gradient-to-r from-sky-50 to-white">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 inline-block mr-2" />
                <span className="text-xs sm:text-sm text-gray-600 font-medium">ପାଇକରାପୁର ଗ୍ରାମର ସ୍ଥାନ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
