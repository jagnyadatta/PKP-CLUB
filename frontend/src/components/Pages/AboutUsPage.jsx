import React from 'react';
import { 
  Heart, 
  Users, 
  Trophy, 
  Calendar, 
  MapPin, 
  Star, 
  Award,
  Target,
  HandHeart,
  Sparkles,
  ArrowLeft,
  CheckCircle,
  FileText
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { DiyaIcon, JhotiCorner, StickerBadge } from '../Cartoon/CartoonDoodles';
import MarigoldGarland from '../Cartoon/MarigoldGarland';

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-20 sm:pt-24 pb-16">
      
      {/* Top Marigold Garland */}
      <MarigoldGarland />

      {/* Page Header Banner */}
      <section className="bg-amber-400 border-b-3 sm:border-b-4 border-[#2B231D] py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 comic-dots pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate(-1)}
              className="btn-cartoon-white text-xs sm:text-sm py-1.5 px-3"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              ପଛକୁ ଫେରନ୍ତୁ (Back)
            </button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-3">
              <StickerBadge text="ଐତିହ୍ୟ ଓ ଲକ୍ଷ୍ୟ" color="clay" rotate="-rotate-2" />
            </div>
            
            {/* Preserved Header Heading */}
            <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-black text-[#2B231D] mb-4">
              ଆମ ବିଷୟରେ
            </h1>
            
            <div className="w-24 sm:w-32 h-2.5 bg-[#E06D53] rounded-full border-2 border-[#2B231D] mx-auto mb-4 shadow-cartoon-sm"></div>

            {/* Preserved Subtitle */}
            <p className="font-cartoon text-lg sm:text-2xl text-stone-900 font-bold leading-relaxed">
              ଗୋପବନ୍ଧୁ ପଠାଗାର ଯୁବ ସଂଘ - ଏକ ଅନ୍ତର୍ନିହିତ ସମୁଦାୟ ସେବାର ଅନ୍ବେଷଣ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Introduction - Preserved text verbatim */}
              <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#2B231D] relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-stone-900" />
                  </div>
                  <h2 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D]">
                    ଆମର ଇତିହାସ ଓ ଉଦ୍ଦେଶ୍ୟ
                  </h2>
                </div>

                <div className="font-cartoon text-base sm:text-lg text-stone-800 leading-relaxed space-y-4">
                  <p>
                    ପାଇକରାପୁର ଯୁବ ସଂଘ ଏକ ଅଣ-ଲାଭକାରୀ ସମୁଦାୟ ସଂଗଠନ ଯାହା ୧୯୯୫ ମସିହାରେ ଗଠିତ ହୋଇଥିଲା। 
                    ଆମର ମୁଖ୍ୟ ଉଦ୍ଦେଶ୍ୟ ହେଉଛି ସମୁଦାୟର ଯୁବଶକ୍ତିକୁ ଏକତ୍ରିତ କରି ସାମାଜିକ, ସାଂସ୍କୃତିକ ଓ ଶିକ୍ଷାଧିଷ୍ଠିତ 
                    କାର୍ଯ୍ୟକ୍ରମ ମାଧ୍ୟମରେ ସମୁଦାୟର ସର୍ବାଙ୍ଗୀନ ଉନ୍ନତି ସାଧନ କରିବା।
                  </p>
                  <p>
                    ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ଯୁବଶକ୍ତି ହେଉଛି ସମାଜ ପରିବର୍ତ୍ତନର ମୁଖ୍ୟ ଚାଳକ ଶକ୍ତି। ଏହି ବିଶ୍ୱାସକୁ ଲକ୍ଷ୍ୟ ରଖି 
                    ଆମେ ବିଭିନ୍ନ କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ କରି ସମୁଦାୟର ଉନ୍ନତି ପାଇଁ ନିରନ୍ତର ପ୍ରୟାସ କରୁଛୁ।
                  </p>
                </div>
              </div>

              {/* Founding Story - Preserved text verbatim */}
              <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#2B231D]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center">
                    <Target className="w-5 h-5 text-stone-900" />
                  </div>
                  <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D]">
                    ପ୍ରତିଷ୍ଠା କାହାଣୀ
                  </h3>
                </div>

                <div className="font-cartoon text-base sm:text-lg text-stone-800 leading-relaxed space-y-4">
                  <p>
                    ୧୯୯୫ ମସିହା ମାର୍ଚ୍ଚ ୧୫ ତାରିଖରେ ଗୋଟିଏ ଛୋଟ ସଭାରୁ ଆମର ଯାତ୍ରା ଆରମ୍ଭ ହୋଇଥିଲା। 
                    ସେହି ସମୟରେ ଗାଁର କିଛି ଉତ୍ସାହୀ ଯୁବକ ଏକତ୍ରିତ ହୋଇ ସମୁଦାୟର ଅସୁବିଧା ଓ ଆବଶ୍ୟକତା ବିଷୟରେ ଆଲୋଚନା କରିଥିଲେ।
                  </p>
                  <p>
                    ପ୍ରଥମେ ଆମେ ଏକ ଛୋଟ ପୁସ୍ତକାଳୟ ଆରମ୍ଭ କରିଥିଲୁ ଯାହା ପରବର୍ତ୍ତୀ ସମୟରେ ବିଭିନ୍ନ ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ 
                    କାର୍ଯ୍ୟକ୍ରମରେ ପରିଣତ ହୋଇଥିଲା। ଆଜି ଆମେ ୨୫+ ବର୍ଷ ଧରି ସଫଳତାର ସହିତ କାର୍ଯ୍ୟ କରୁଛୁ।
                  </p>
                </div>
              </div>

              {/* Key Achievements - Preserved text verbatim */}
              <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#2B231D]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-300 border-2 border-[#2B231D] shadow-cartoon-sm flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-stone-900" />
                  </div>
                  <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D]">
                    ମୁଖ୍ୟ ସଫଳତା
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 font-cartoon">
                  
                  <div className="bg-emerald-50 rounded-2xl border-2 border-[#2B231D] p-4 flex items-start space-x-3 shadow-cartoon-sm">
                    <div className="bg-emerald-300 p-2 rounded-xl border border-[#2B231D]">
                      <Users className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-base">ସଦସ୍ୟତା ବୃଦ୍ଧି</h4>
                      <p className="text-stone-700 text-sm">୫୦+ ସକ୍ରିୟ ସଦସ୍ୟ ଏବଂ ୨୦୦+ ସମର୍ଥକ</p>
                    </div>
                  </div>

                  <div className="bg-sky-50 rounded-2xl border-2 border-[#2B231D] p-4 flex items-start space-x-3 shadow-cartoon-sm">
                    <div className="bg-sky-300 p-2 rounded-xl border border-[#2B231D]">
                      <Calendar className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-base">କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ</h4>
                      <p className="text-stone-700 text-sm">ବାର୍ଷିକ ୨୦+ ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-2xl border-2 border-[#2B231D] p-4 flex items-start space-x-3 shadow-cartoon-sm">
                    <div className="bg-amber-300 p-2 rounded-xl border border-[#2B231D]">
                      <Award className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-base">ପୁରସ୍କାର</h4>
                      <p className="text-stone-700 text-sm">୩ ଥର ଶ୍ରେଷ୍ଠ ଯୁବ ସଂଘ ପୁରସ୍କାର ପ୍ରାପ୍ତ</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl border-2 border-[#2B231D] p-4 flex items-start space-x-3 shadow-cartoon-sm">
                    <div className="bg-purple-300 p-2 rounded-xl border border-[#2B231D]">
                      <HandHeart className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-base">ସାମାଜିକ ସେବା</h4>
                      <p className="text-stone-700 text-sm">୫୦୦+ ପରିବାରକୁ ନିଃଶୁଳ୍କ ସେବା ପ୍ରଦାନ</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Mission & Vision - Preserved text verbatim */}
              <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#2B231D]">
                <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-6">
                  ଆମର ଲକ୍ଷ୍ୟ ଓ ଦର୍ଶନ
                </h3>

                <div className="space-y-5 font-cartoon">
                  <div className="bg-amber-50 rounded-2xl border-2 border-[#2B231D] p-5 shadow-cartoon-sm">
                    <h4 className="font-odia text-xl font-bold text-amber-800 mb-2">
                      ଆମର ଲକ୍ଷ୍ୟ
                    </h4>
                    <p className="text-stone-800 leading-relaxed text-sm sm:text-base">
                      ଏକ ସୁସଂଗଠିତ, ଶିକ୍ଷିତ ଓ ସମୃଦ୍ଧ ସମୁଦାୟ ଗଠନ କରିବା ଯେଉଁଥିରେ ପ୍ରତ୍ୟେକ ସଦସ୍ୟର ଶାରୀରିକ, 
                      ମାନସିକ ଓ ଆଧ୍ୟାତ୍ମିକ ଉନ୍ନତି ସାଧିତ ହୋଇପାରିବ।
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded-2xl border-2 border-[#2B231D] p-5 shadow-cartoon-sm">
                    <h4 className="font-odia text-xl font-bold text-emerald-800 mb-2">
                      ଆମର ଦର୍ଶନ
                    </h4>
                    <p className="text-stone-800 leading-relaxed text-sm sm:text-base">
                      "ସେବା ଏବଂ ସଂଗଠନ ମାଧ୍ୟମରେ ସମୁଦାୟ ଉନ୍ନତି" - ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ସଂଗଠିତ ପ୍ରୟାସ 
                      ଓ ନିଃସ୍ୱାର୍ଥ ସେବା ମାଧ୍ୟମରେ କୌଣସି ସମୁଦାୟର ସର୍ବାଙ୍ଗୀନ ଉନ୍ନତି ସମ୍ଭବ।
                    </p>
                  </div>
                </div>
              </div>

              {/* Ongoing Projects - Preserved text verbatim */}
              <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#2B231D]">
                <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-6">
                  ଚାଲୁଥିବା ପ୍ରକଳ୍ପସମୂହ
                </h3>

                <div className="space-y-4 font-cartoon">
                  <div className="bg-[#FAF7F0] p-4 rounded-xl border-2 border-[#2B231D] border-l-8 border-l-sky-500 shadow-cartoon-sm">
                    <h4 className="font-bold text-stone-900 text-base">ଶିକ୍ଷା ସାହାଯ୍ୟ କେନ୍ଦ୍ର</h4>
                    <p className="text-stone-700 text-sm mt-1">ନିଃଶୁଳ୍କ ଟ୍ୟୁସନ କେନ୍ଦ୍ର ଯାହା ଗରୀବ ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ଶିକ୍ଷାରେ ସାହାଯ୍ୟ କରୁଛି</p>
                  </div>
                  
                  <div className="bg-[#FAF7F0] p-4 rounded-xl border-2 border-[#2B231D] border-l-8 border-l-rose-500 shadow-cartoon-sm">
                    <h4 className="font-bold text-stone-900 text-base">ରକ୍ତଦାନ ଶିବିର</h4>
                    <p className="text-stone-700 text-sm mt-1">ବାର୍ଷିକ ରକ୍ତଦାନ ଶିବିର ଆୟୋଜନ ଓ ରକ୍ତଦାତା ନିବେଦନ କାର୍ଯ୍ୟକ୍ରମ</p>
                  </div>

                  <div className="bg-[#FAF7F0] p-4 rounded-xl border-2 border-[#2B231D] border-l-8 border-l-emerald-500 shadow-cartoon-sm">
                    <h4 className="font-bold text-stone-900 text-base">ପରିବେଶ ସଂରକ୍ଷଣ</h4>
                    <p className="text-stone-700 text-sm mt-1">ବୃକ୍ଷରୋପଣ ଓ ସଫାସୁତ୍ତା ଅଭିଯାନ ମାଧ୍ୟମରେ ପରିବେଶ ସୁରକ୍ଷା</p>
                  </div>
                </div>
              </div>

              {/* Future Plans - Preserved text verbatim */}
              <div className="card-cartoon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#2B231D]">
                <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-4">
                  ଭବିଷ୍ୟତ ଯୋଜନା
                </h3>

                <div className="font-cartoon text-base sm:text-lg text-stone-800 leading-relaxed space-y-4">
                  <p>
                    ଆମେ ଆଗାମୀ ୫ ବର୍ଷ ମଧ୍ୟରେ ଏକ ସ୍ୱୟଂସଂପୂର୍ଣ୍ଣ ସମୁଦାୟ ଭବନ ନିର୍ମାଣ କରିବା ଲକ୍ଷ୍ୟ ରଖିଛୁ, 
                    ଯେଉଁଥିରେ ପୁସ୍ତକାଳୟ, କମ୍ପ୍ୟୁଟର କେନ୍ଦ୍ର, ଓ ସମୁଦାୟ ସଭା କକ୍ଷ ରହିବ।
                  </p>
                  <p>
                    ସମୁଦାୟର ଯୁବଶକ୍ତିଙ୍କ ଦକ୍ଷତା ବୃଦ୍ଧି ପାଇଁ ବିଭିନ୍ନ କାରିଗରୀ ତାଲିମ କାର୍ଯ୍ୟକ୍ରମ ଆରମ୍ଭ କରିବା, 
                    ଛୋଟ ଛୋଟ ଉଦ୍ୟୋଗ ସ୍ଥାପନରେ ସାହାଯ୍ୟ କରିବା ଆମର ମୁଖ୍ୟ ଲକ୍ଷ୍ୟ।
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Registration Photo Card in 2D Cartoon Style */}
              <div className="card-cartoon bg-white p-6 shadow-[6px_6px_0px_#2B231D] sticky top-24">
                <div className="text-center mb-6">
                  <h3 className="heading-font text-2xl sm:text-3xl font-black text-[#2B231D] mb-1">
                    ଆମର ପଞ୍ଜୀକରଣ
                  </h3>
                  <div className="w-16 h-2 bg-amber-400 rounded-full border border-[#2B231D] mx-auto"></div>
                </div>
                
                {/* Certificate Photo Frame */}
                <div className="mb-6">
                  <div className="rounded-2xl border-3 border-[#2B231D] overflow-hidden bg-amber-100 shadow-cartoon-sm">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                      alt="Club Registration Certificate"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <p className="font-cartoon text-center text-xs sm:text-sm font-bold text-stone-700 mt-2">
                    ପଞ୍ଜୀକରଣ ପ୍ରମାଣପତ୍ର - ୧୯୯୫
                  </p>
                </div>

                {/* Quick Info Badges */}
                <div className="space-y-3 font-cartoon text-sm font-bold">
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-[#2B231D]">
                    <span className="text-stone-800">ପ୍ରତିଷ୍ଠା ବର୍ଷ</span>
                    <span className="bg-amber-400 text-stone-900 px-3 py-0.5 rounded-lg border border-[#2B231D]">୧୯୯୫</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-[#2B231D]">
                    <span className="text-stone-800">ପଞ୍ଜୀକରଣ ସଂଖ୍ୟା</span>
                    <span className="bg-emerald-400 text-stone-900 px-3 py-0.5 rounded-lg border border-[#2B231D]">୧୨୩୪/୧୯୯୫</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-[#2B231D]">
                    <span className="text-stone-800">ସକ୍ରିୟ ସଦସ୍ୟ</span>
                    <span className="bg-orange-400 text-white px-3 py-0.5 rounded-lg border border-[#2B231D]">୫୦+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl border border-[#2B231D]">
                    <span className="text-stone-800">କାର୍ଯ୍ୟକ୍ଷେତ୍ର</span>
                    <span className="bg-purple-400 text-white px-3 py-0.5 rounded-lg border border-[#2B231D]">ପାଇକରାପୁର</span>
                  </div>
                </div>

                {/* Join Us Button */}
                <Link
                  to="/register"
                  className="w-full btn-cartoon-amber text-base font-bold py-3 mt-6 block text-center"
                >
                  ଆମ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ
                </Link>
              </div>

              {/* Contact Info Card */}
              <div className="card-cartoon bg-white p-6 shadow-cartoon">
                <h4 className="heading-font text-2xl font-bold text-[#2B231D] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-amber-700" />
                  ସମ୍ପର୍କ କରନ୍ତୁ
                </h4>
                <div className="space-y-3 font-cartoon text-sm text-stone-800">
                  <p className="flex items-start">
                    <span className="font-bold mr-2 text-stone-900">ଠିକଣା:</span>
                    <span>ପାଇକରାପୁର ଗ୍ରାମ, ବ୍ରାହ୍ମଣଦେଓ, ଜିଲ୍ଲା: ବାଲେଶ୍ୱର</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold mr-2 text-stone-900">ମୋବାଇଲ୍:</span>
                    <span>+୯୧ ୯୮୭୬୫ ୪୩୨୧୦</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold mr-2 text-stone-900">ଇମେଲ୍:</span>
                    <span className="break-all">paikarapuryubasangha@gmail.com</span>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Values & Principles Section - Preserved text verbatim */}
      <section className="py-16 bg-white border-t-3 border-[#2B231D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-font text-3xl sm:text-5xl font-black text-[#2B231D] mb-3">
              ଆମର ମୂଲ୍ୟବୋଧ ଓ ନୀତି
            </h2>
            <div className="w-24 h-2 bg-amber-400 rounded-full border border-[#2B231D] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 font-cartoon">
            
            <div className="card-cartoon bg-amber-50 p-6 sm:p-8 text-center shadow-cartoon-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-300 border-2 border-[#2B231D] flex items-center justify-center mx-auto mb-4 shadow-cartoon-sm">
                <Heart className="w-8 h-8 text-stone-900" />
              </div>
              <h3 className="heading-font text-2xl font-bold text-[#2B231D] mb-3">
                ନିଃସ୍ୱାର୍ଥ ସେବା
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ସେବା ହେଉଛି ମାନବଧର୍ମର ସର୍ବୋଚ୍ଚ ରୂପ। ନିଃସ୍ୱାର୍ଥ ସେବା ଆମର ମୂଳମନ୍ତ୍ର।
              </p>
            </div>

            <div className="card-cartoon bg-emerald-50 p-6 sm:p-8 text-center shadow-cartoon-sm">
              <div className="w-16 h-16 rounded-2xl bg-emerald-300 border-2 border-[#2B231D] flex items-center justify-center mx-auto mb-4 shadow-cartoon-sm">
                <Users className="w-8 h-8 text-stone-900" />
              </div>
              <h3 className="heading-font text-2xl font-bold text-[#2B231D] mb-3">
                ସାମୁଦାୟିକତା
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                ଏକତା ଓ ସାମୁଦାୟିକତା ଆମର ମୂଲ୍ୟବୋଧ। ସମସ୍ତେ ମିଶି ଏକ ସୁନ୍ଦର ସମାଜ ଗଠନ କରିବା ଆମର ଲକ୍ଷ୍ୟ।
              </p>
            </div>

            <div className="card-cartoon bg-rose-50 p-6 sm:p-8 text-center shadow-cartoon-sm">
              <div className="w-16 h-16 rounded-2xl bg-rose-300 border-2 border-[#2B231D] flex items-center justify-center mx-auto mb-4 shadow-cartoon-sm">
                <Star className="w-8 h-8 text-stone-900" />
              </div>
              <h3 className="heading-font text-2xl font-bold text-[#2B231D] mb-3">
                ଉତ୍କର୍ଷତା
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                ପ୍ରତ୍ୟେକ କାର୍ଯ୍ୟରେ ଉତ୍କର୍ଷତା ଆଣିବା ଆମର ପ୍ରତିଶ୍ରୁତି। ସର୍ବଦା ଭଲ କରିବାର ଚେଷ୍ଟା କରୁ।
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
