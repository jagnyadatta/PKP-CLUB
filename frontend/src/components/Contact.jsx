import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { StickerBadge, JhotiCorner, DiyaIcon } from './Cartoon/CartoonDoodles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden">
      
      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 opacity-30 hidden sm:block">
        <JhotiCorner position="top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3">
            <StickerBadge text="ଯୋଗାଯୋଗ କରନ୍ତୁ" color="amber" rotate="rotate-1" />
          </div>

          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            ସଂପର୍କ କରନ୍ତୁ
          </h2>

          <div className="w-24 sm:w-32 h-2.5 bg-amber-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
            ଆମ ସହିତ ସଂପର୍କ ରକ୍ଷା କରନ୍ତୁ। ଆପଣଙ୍କର ମତାମତ ଓ ପ୍ରସ୍ତାବ ପାଇଁ ଆମେ ସର୍ବଦା ଉତ୍ସୁକ!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Form with 2D Cartoon Style */}
          <div className="lg:col-span-7 card-cartoon bg-white p-6 sm:p-8 sm:p-10 shadow-[8px_8px_0px_#2B231D]">
            
            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border-2 border-[#2B231D] animate-fadeIn">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="heading-font text-2xl font-bold text-stone-900 mb-2">
                  ଧନ୍ୟବାଦ! ଆପଣଙ୍କର ବାର୍ତ୍ତା ଗୃହୀତ ହୋଇଛି।
                </h3>
                <p className="font-cartoon text-sm text-stone-700">
                  ଆମ କ୍ଲବ୍ ପ୍ରତିନିଧି ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିବେ।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#2B231D] mb-2 font-cartoon">
                    ଆପଣଙ୍କର ନାମ
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                    placeholder="ଆପଣଙ୍କର ନାମ ଲେଖନ୍ତୁ"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#2B231D] mb-2 font-cartoon">
                    ଇମେଲ ଠିକଣା
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
                    placeholder="ଆପଣଙ୍କର ଇମେଲ ଲେଖନ୍ତୁ"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#2B231D] mb-2 font-cartoon">
                    ବାର୍ତ୍ତା
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-[#2B231D] rounded-xl text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm resize-none"
                    placeholder="ଆପଣଙ୍କର ବାର୍ତ୍ତା ଏଠାରେ ଲେଖନ୍ତୁ..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-cartoon-amber text-base font-bold py-3.5"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>ବାର୍ତ୍ତା ପଠାନ୍ତୁ</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Address */}
              <div className="card-cartoon bg-white p-4 sm:p-5 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-stone-900" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="heading-font text-lg font-bold text-[#2B231D]">ଠିକଣା</h3>
                  <p className="font-cartoon text-stone-700 text-xs sm:text-sm font-bold break-words">
                    ପାଇକରାପୁର, କୃଷ୍ଣପ୍ରସାଦ, ପୁରୀ, ୭୫୨୦୩୨
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="card-cartoon bg-white p-4 sm:p-5 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-stone-900" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="heading-font text-lg font-bold text-[#2B231D]">ଫୋନ୍ ନମ୍ବର</h3>
                  <p className="font-cartoon text-stone-700 text-xs sm:text-sm font-bold">
                    +91 98765 43210 / +91 7606976736
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="card-cartoon bg-white p-4 sm:p-5 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-stone-900" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="heading-font text-lg font-bold text-[#2B231D]">ଇମେଲ</h3>
                  <p className="font-cartoon text-stone-700 text-xs sm:text-sm font-bold break-all">
                    gopabandhupathagarapkp@gmail.com
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map in 2D Picture Frame */}
            <div className="card-cartoon bg-white overflow-hidden shadow-cartoon">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d700.2502793472158!2d85.16740181151425!3d19.479476748167016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1758882183227!5m2!1sen!2sin" 
                width="100%" 
                height="240" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48 sm:h-56"
                title="Panchudola Gram Location Map"
              >
              </iframe>
              <div className="p-3 text-center bg-amber-50 border-t-2 border-[#2B231D]">
                <MapPin className="w-4 h-4 text-amber-700 inline-block mr-1.5" />
                <span className="font-cartoon text-xs sm:text-sm text-stone-800 font-bold">
                  ପାଇକରାପୁର ଗ୍ରାମର ସ୍ଥାନ
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
