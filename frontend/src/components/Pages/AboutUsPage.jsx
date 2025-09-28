// components/AboutUsPage.jsx
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
  Sparkles
} from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 mt-12 sm:mt-14">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ଆମ ବିଷୟରେ</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              ଗୋପବନ୍ଧୁ ପଠାଗାର ଯୁବ ସଂଘ - ଏକ ଅନ୍ତର୍ନିହିତ ସମୁଦାୟ ସେବାର ଅନ୍ବେଷଣ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content - Text */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <h2 className="text-3xl font-bold text-sky-800 mb-6 flex items-center">
                  <Sparkles className="w-8 h-8 mr-3 text-sky-600" />
                  ଆମର ଇତିହାସ ଓ ଉଦ୍ଦେଶ୍ୟ
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  ପାଇକରାପୁର ଯୁବ ସଂଘ ଏକ ଅଣ-ଲାଭକାରୀ ସମୁଦାୟ ସଂଗଠନ ଯାହା ୧୯୯୫ ମସିହାରେ ଗଠିତ ହୋଇଥିଲା। 
                  ଆମର ମୁଖ୍ୟ ଉଦ୍ଦେଶ୍ୟ ହେଉଛି ସମୁଦାୟର ଯୁବଶକ୍ତିକୁ ଏକତ୍ରିତ କରି ସାମାଜିକ, ସାଂସ୍କୃତିକ ଓ ଶିକ୍ଷାଧିଷ୍ଠିତ 
                  କାର୍ଯ୍ୟକ୍ରମ ମାଧ୍ୟମରେ ସମୁଦାୟର ସର୍ବାଙ୍ଗୀନ ଉନ୍ନତି ସାଧନ କରିବା।
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ଯୁବଶକ୍ତି ହେଉଛି ସମାଜ ପରିବର୍ତ୍ତନର ମୁଖ୍ୟ ଚାଳକ ଶକ୍ତି। ଏହି ବିଶ୍ୱାସକୁ ଲକ୍ଷ୍ୟ ରଖି 
                  ଆମେ ବିଭିନ୍ନ କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ କରି ସମୁଦାୟର ଉନ୍ନତି ପାଇଁ ନିରନ୍ତର ପ୍ରୟାସ କରୁଛୁ।
                </p>
              </div>

              {/* Founding Story */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <h3 className="text-2xl font-bold text-sky-800 mb-6 flex items-center">
                  <Target className="w-7 h-7 mr-3 text-sky-600" />
                  ପ୍ରତିଷ୍ଠା କାହାଣୀ
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  ୧୯୯୫ ମସିହା ମାର୍ଚ୍ଚ ୧୫ ତାରିଖରେ ଗୋଟିଏ ଛୋଟ ସଭାରୁ ଆମର ଯାତ୍ରା ଆରମ୍ଭ ହୋଇଥିଲା। 
                  ସେହି ସମୟରେ ଗାଁର କିଛି ଉତ୍ସାହୀ ଯୁବକ ଏକତ୍ରିତ ହୋଇ ସମୁଦାୟର ଅସୁବିଧା ଓ ଆବଶ୍ୟକତା ବିଷୟରେ ଆଲୋଚନା କରିଥିଲେ।
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  ପ୍ରଥମେ ଆମେ ଏକ ଛୋଟ ପୁସ୍ତକାଳୟ ଆରମ୍ଭ କରିଥିଲୁ ଯାହା ପରବର୍ତ୍ତୀ ସମୟରେ ବିଭିନ୍ନ ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ 
                  କାର୍ଯ୍ୟକ୍ରମରେ ପରିଣତ ହୋଇଥିଲା। ଆଜି ଆମେ ୨୫+ ବର୍ଷ ଧରି ସଫଳତାର ସହିତ କାର୍ଯ୍ୟ କରୁଛୁ।
                </p>
              </div>

              {/* Key Achievements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <h3 className="text-2xl font-bold text-sky-800 mb-6 flex items-center">
                  <Trophy className="w-7 h-7 mr-3 text-sky-600" />
                  ମୁଖ୍ୟ ସଫଳତା
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ସଦସ୍ୟତା ବୃଦ୍ଧି</h4>
                      <p className="text-gray-600">୫୦+ ସକ୍ରିୟ ସଦସ୍ୟ ଏବଂ ୨୦୦+ ସମର୍ଥକ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ</h4>
                      <p className="text-gray-600">ବାର୍ଷିକ ୨୦+ ସାମାଜିକ ଓ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ପୁରସ୍କାର</h4>
                      <p className="text-gray-600">୩ ଥର ଶ୍ରେଷ୍ଠ ଯୁବ ସଂଘ ପୁରସ୍କାର ପ୍ରାପ୍ତ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <HandHeart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ସାମାଜିକ ସେବା</h4>
                      <p className="text-gray-600">୫୦୦+ ପରିବାରକୁ ନିଃଶୁଳ୍କ ସେବା ପ୍ରଦାନ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Mission & Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <h3 className="text-2xl font-bold text-sky-800 mb-6">ଆମର ଲକ୍ଷ୍ୟ ଓ ଦର୍ଶନ</h3>
                <div className="space-y-6">
                  <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                    <h4 className="text-xl font-semibold text-sky-700 mb-3">ଆମର ଲକ୍ଷ୍ୟ</h4>
                    <p className="text-gray-700">
                      ଏକ ସୁସଂଗଠିତ, ଶିକ୍ଷିତ ଓ ସମୃଦ୍ଧ ସମୁଦାୟ ଗଠନ କରିବା ଯେଉଁଥିରେ ପ୍ରତ୍ୟେକ ସଦସ୍ୟର ଶାରୀରିକ, 
                      ମାନସିକ ଓ ଆଧ୍ୟାତ୍ମିକ ଉନ୍ନତି ସାଧିତ ହୋଇପାରିବ।
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-xl font-semibold text-green-700 mb-3">ଆମର ଦର୍ଶନ</h4>
                    <p className="text-gray-700">
                      "ସେବା ଏବଂ ସଂଗଠନ ମାଧ୍ୟମରେ ସମୁଦାୟ ଉନ୍ନତି" - ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ସଂଗଠିତ ପ୍ରୟାସ 
                      ଓ ନିଃସ୍ୱାର୍ଥ ସେବା ମାଧ୍ୟମରେ କୌଣସି ସମୁଦାୟର ସର୍ବାଙ୍ଗୀନ ଉନ୍ନତି ସମ୍ଭବ।
                    </p>
                  </div>
                </div>
              </div>

              {/* Ongoing Projects */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <h3 className="text-2xl font-bold text-sky-800 mb-6">ଚାଲୁଥିବା ପ୍ରକଳ୍ପସମୂହ</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-sky-500 pl-4">
                    <h4 className="font-semibold text-gray-800">ଶିକ୍ଷା ସାହାଯ୍ୟ କେନ୍ଦ୍ର</h4>
                    <p className="text-gray-600">ନିଃଶୁଳ୍କ ଟ୍ୟୁସନ କେନ୍ଦ୍ର ଯାହା ଗରୀବ ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ଶିକ୍ଷାରେ ସାହାଯ୍ୟ କରୁଛି</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">ରକ୍ତଦାନ ଶିବିର</h4>
                    <p className="text-gray-600">ବାର୍ଷିକ ରକ୍ତଦାନ ଶିବିର ଆୟୋଜନ ଓ ରକ୍ତଦାତା ନିବେଦନ କାର୍ଯ୍ୟକ୍ରମ</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-800">ପରିବେଶ ସଂରକ୍ଷଣ</h4>
                    <p className="text-gray-600">ବୃକ୍ଷରୋପଣ ଓ ସଫାସୁତ୍ତା ଅଭିଯାନ ମାଧ୍ୟମରେ ପରିବେଶ ସୁରକ୍ଷା</p>
                  </div>
                </div>
              </div>

              {/* Future Plans */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
                <h3 className="text-2xl font-bold text-sky-800 mb-6">ଭବିଷ୍ୟତ ଯୋଜନା</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    ଆମେ ଆଗାମୀ ୫ ବର୍ଷ ମଧ୍ୟରେ ଏକ ସ୍ୱୟଂସଂପୂର୍ଣ୍ଣ ସମୁଦାୟ ଭବନ ନିର୍ମାଣ କରିବା ଲକ୍ଷ୍ୟ ରଖିଛୁ, 
                    ଯେଉଁଥିରେ ପୁସ୍ତକାଳୟ, କମ୍ପ୍ୟୁଟର କେନ୍ଦ୍ର, ଓ ସମୁଦାୟ ସଭା କକ୍ଷ ରହିବ।
                  </p>
                  <p className="text-gray-700">
                    ସମୁଦାୟର ଯୁବଶକ୍ତିଙ୍କ ଦକ୍ଷତା ବୃଦ୍ଧି ପାଇଁ ବିଭିନ୍ନ କାରିଗରୀ ତାଲିମ କାର୍ଯ୍ୟକ୍ରମ ଆରମ୍ଭ କରିବା, 
                    ଛୋଟ ଛୋଟ ଉଦ୍ୟୋଗ ସ୍ଥାପନରେ ସାହାଯ୍ୟ କରିବା ଆମର ମୁଖ୍ୟ ଲକ୍ଷ୍ୟ।
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Registration Photo & Info */}
            <div className="space-y-8">
              {/* Registration Photo Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100 sticky top-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-sky-800 mb-2">ଆମର ପଞ୍ଜୀକରଣ</h3>
                  <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
                </div>
                
                {/* Registration Photo */}
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl p-4 border-2 border-dashed border-sky-300">
                    <div className="aspect-w-3 aspect-h-4 bg-white rounded-lg overflow-hidden shadow-inner">
                      <img 
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                        alt="Club Registration Certificate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-3">
                    ପଞ୍ଜୀକରଣ ପ୍ରମାଣପତ୍ର - ୧୯୯୫
                  </p>
                </div>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <span className="font-semibold text-gray-700">ପ୍ରତିଷ୍ଠା ବର୍ଷ</span>
                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-bold">୧୯୯୫</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">ପଞ୍ଜୀକରଣ ସଂଖ୍ୟା</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">୧୨୩୪/୧୯୯୫</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">ସକ୍ରିୟ ସଦସ୍ୟ</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">୫୦+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-700">କାର୍ଯ୍ୟକ୍ଷେତ୍ର</span>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">ପାଇକରାପୁର</span>
                  </div>
                </div>

                {/* Join Us Button */}
                <button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 mt-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  ଆମ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100">
                <h4 className="text-xl font-bold text-sky-800 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  ସମ୍ପର୍କ କରନ୍ତୁ
                </h4>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">ଠିକଣା:</span>
                    ପାଇକରାପୁର ଗ୍ରାମ, ବ୍ରାହ୍ମଣଦେଓ, ଜିଲ୍ଲା: ବାଲେଶ୍ୱର
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">ମୋବାଇଲ୍:</span>
                    +୯୧ ୯୮୭୬୫ ୪୩୨୧୦
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">ଇମେଲ୍:</span>
                    paikarapuryubasangha@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">ଆମର ମୂଲ୍ୟବୋଧ ଓ ନୀତି</h2>
            <div className="w-24 h-1 bg-sky-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-3">ନିଃସ୍ୱାର୍ଥ ସେବା</h3>
              <p className="text-gray-700">
                ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ସେବା ହେଉଛି ମାନବଧର୍ମର ସର୍ବୋଚ୍ଚ ରୂପ। ନିଃସ୍ୱାର୍ଥ ସେବା ଆମର ମୂଳମନ୍ତ୍ର।
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">ସାମୁଦାୟିକତା</h3>
              <p className="text-gray-700">
                ଏକତା ଓ ସାମୁଦାୟିକତା ଆମର ମୂଲ୍ୟବୋଧ। ସମସ୍ତେ ମିଶି ଏକ ସୁନ୍ଦର ସମାଜ ଗଠନ କରିବା ଆମର ଲକ୍ଷ୍ୟ।
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">ଉତ୍କର୍ଷତା</h3>
              <p className="text-gray-700">
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