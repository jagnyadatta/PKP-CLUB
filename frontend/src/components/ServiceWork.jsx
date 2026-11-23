import React from "react";
import { MapPin, Heart, Users, Droplets, Trash2, Utensils, CheckCircle } from "lucide-react";
import { StickerBadge, JhotiCorner, DiyaIcon } from './Cartoon/CartoonDoodles';

const ServiceWork = () => {
  const projects = [
    {
      id: 1,
      name: "ଗ୍ରାମ ସଫାଈ ଅଭିଯାନ",
      location: "ଗ୍ରାମର ସମସ୍ତ ଅଞ୍ଚଳ",
      image: "https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: Trash2,
      badgeColor: "bg-emerald-400 text-stone-900",
      description: "ଗ୍ରାମର ରାସ୍ତା, ଗଳି, ଓ ସାର୍ବଜନୀନ ସ୍ଥାନମାନଙ୍କର ନିୟମିତ ସଫାଈ"
    },
    {
      id: 2,
      name: "ପୋଖରୀ ପରିଷ୍କାର କାର୍ଯ୍ୟ",
      location: "ଗ୍ରାମ ପୋଖରୀ",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: Droplets,
      badgeColor: "bg-sky-400 text-stone-900",
      description: "ଗ୍ରାମ ପୋଖରୀର ପରିଷ୍କରଣ ଓ ଜଳ ସଂରକ୍ଷଣ ଅଭିଯାନ"
    },
    {
      id: 3,
      name: "ଭୋଜି ସହାୟତା",
      location: "ଗ୍ରାମ ଓ ଆଖପାଖ ଅଞ୍ଚଳ",
      image: "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: Utensils,
      badgeColor: "bg-amber-400 text-stone-900",
      description: "ବିଭିନ୍ନ ଉତ୍ସବ ଓ ବିଶେଷ ଅବସରରେ ଭୋଜି ସଂଗଠନରେ ସହାୟତା"
    },
    {
      id: 4,
      name: "ବାହ୍ୟ ଗ୍ରାମ ସହାୟତା",
      location: "ପଡୋଶୀ ଗ୍ରାମମାନଙ୍କୁ",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: Users,
      badgeColor: "bg-purple-400 text-white",
      description: "ପଡୋଶୀ ଗ୍ରାମମାନଙ୍କରେ ଆପଦା ସମୟରେ ସହାୟତା ଓ ସହଯୋଗ"
    },
    {
      id: 5,
      name: "ବୃଦ୍ଧ ଜନ ସେବା",
      location: "ଗ୍ରାମର ବୃଦ୍ଧମାନଙ୍କ ଘର",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: Heart,
      badgeColor: "bg-rose-400 text-white",
      description: "ବୃଦ୍ଧ ଓ ଅସହାୟ ଲୋକଙ୍କୁ ନିତ୍ୟଦିନିଆ ସେବା ଓ ସହାୟତା"
    },
    {
      id: 6,
      name: "ଯୁବକ ମଣ୍ଡଳୀ",
      location: "ଗ୍ରାମ ସମସ୍ତ",
      image: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: Users,
      badgeColor: "bg-amber-400 text-stone-900",
      description: "ଯୁବସମାଜଙ୍କ ମାଧ୍ୟମରେ ସାମାଜିକ କାର୍ଯ୍ୟରେ ଅଂଶଗ୍ରହଣ"
    }
  ];

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <div className="card-cartoon bg-white overflow-hidden group hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
        
        {/* Project Image in Cartoon Border */}
        <div className="relative h-48 sm:h-52 overflow-hidden border-b-2.5 border-[#2B231D]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
          />
          
          {/* Icon Badge */}
          <div className="absolute top-3 left-3 bg-white/95 rounded-xl p-2 border-2 border-[#2B231D] shadow-cartoon-sm">
            <IconComponent className="w-5 h-5 text-amber-700" />
          </div>
          
          {/* Location Badge */}
          <div className="absolute top-3 right-3 bg-amber-400 text-stone-900 px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border-2 border-[#2B231D] shadow-cartoon-sm">
            {project.location}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-5 sm:p-6">
          <h3 className="heading-font text-xl sm:text-2xl font-black text-[#2B231D] mb-2.5 group-hover:text-amber-800 transition-colors">
            {project.name}
          </h3>
          
          <p className="font-cartoon text-stone-700 mb-4 leading-relaxed text-sm sm:text-base font-semibold">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between pt-3 border-t-2 border-stone-100">
            <div className="flex items-center text-stone-700 text-xs sm:text-sm font-bold">
              <MapPin className="w-4 h-4 mr-1 text-[#E06D53]" />
              <span>{project.location}</span>
            </div>
            
            {/* Preserved Status badge: ସକ୍ରିୟ */}
            <div className="flex items-center text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border-1.5 border-[#2B231D] font-bold text-xs shadow-xs">
              <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-700" />
              <span>ସକ୍ରିୟ</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="service" className="py-16 sm:py-24 bg-[#FAF7F0] border-b-3 sm:border-b-4 border-[#2B231D] relative overflow-hidden">
      
      {/* Decorative Corner */}
      <div className="absolute top-4 left-4 opacity-30 hidden sm:block">
        <JhotiCorner position="top-left" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3">
            <StickerBadge text="ସମାଜ ସେବା ହିଁ ଶ୍ରେଷ୍ଠ ଧର୍ମ" color="green" rotate="-rotate-2" />
          </div>

          <h2 className="heading-font text-3xl sm:text-5xl md:text-6xl font-black text-[#2B231D] mb-4">
            ଆମର ସେବା କାର୍ଯ୍ୟ
          </h2>

          <div className="w-24 sm:w-32 h-2.5 bg-emerald-400 rounded-full border-2 border-[#2B231D] mx-auto mb-5 shadow-cartoon-sm"></div>

          <p className="font-cartoon text-base sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            ଗ୍ରାମ ସଫାଈ, ପୋଖରୀ ପରିଷ୍କରଣ, ଭୋଜି ସହାୟତା ଓ ସାମାଜିକ ସେବା ମାଧ୍ୟମରେ ଆମେ ଆମର ସମାଜକୁ ସୁନ୍ଦର ଓ ସହାୟକ କରୁଛୁ
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Section with 2D Cartoon Paper Styling */}
        <div className="bg-white rounded-3xl border-3 border-[#2B231D] shadow-[6px_6px_0px_#2B231D] p-6 sm:p-10 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-amber-50 border-2 border-[#2B231D] shadow-cartoon-sm">
              <div className="font-odia text-3xl sm:text-4xl font-black text-amber-700 mb-1">
                ୫୦+
              </div>
              <div className="font-cartoon text-xs sm:text-sm font-bold text-stone-700">
                ସେବା କାର୍ଯ୍ୟକ୍ରମ
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-[#2B231D] shadow-cartoon-sm">
              <div className="font-odia text-3xl sm:text-4xl font-black text-emerald-700 mb-1">
                ୨୦୦+
              </div>
              <div className="font-cartoon text-xs sm:text-sm font-bold text-stone-700">
                ସ୍ୱେଚ୍ଛାସେବୀ
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border-2 border-[#2B231D] shadow-cartoon-sm">
              <div className="font-odia text-3xl sm:text-4xl font-black text-sky-700 mb-1">
                ୧୦+
              </div>
              <div className="font-cartoon text-xs sm:text-sm font-bold text-stone-700">
                ଗ୍ରାମ ଅଞ୍ଚଳ
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 border-2 border-[#2B231D] shadow-cartoon-sm">
              <div className="font-odia text-3xl sm:text-4xl font-black text-purple-700 mb-1">
                ୯୫%
              </div>
              <div className="font-cartoon text-xs sm:text-sm font-bold text-stone-700">
                ସଫଳତା ହାର
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceWork;
