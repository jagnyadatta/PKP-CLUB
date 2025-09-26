import React from "react";
import { MapPin, Heart, Users, Droplets, Trash2, Utensils } from "lucide-react";

const ServiceWork = () => {
  const projects = [
    {
      id: 1,
      name: "ଗ୍ରାମ ସଫାଈ ଅଭିଯାନ",
      location: "ଗ୍ରାମର ସମସ୍ତ ଅଞ୍ଚଳ",
      image: "https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: Trash2,
      description: "ଗ୍ରାମର ରାସ୍ତା, ଗଳି, ଓ ସାର୍ବଜନୀନ ସ୍ଥାନମାନଙ୍କର ନିୟମିତ ସଫାଈ"
    },
    {
      id: 2,
      name: "ପୋଖରୀ ପରିଷ୍କାର କାର୍ଯ୍ୟ",
      location: "ଗ୍ରାମ ପୋଖରୀ",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: Droplets,
      description: "ଗ୍ରାମ ପୋଖରୀର ପରିଷ୍କରଣ ଓ ଜଳ ସଂରକ୍ଷଣ ଅଭିଯାନ"
    },
    {
      id: 3,
      name: "ଭୋଜି ସହାୟତା",
      location: "ଗ୍ରାମ ଓ ଆଖପାଖ ଅଞ୍ଚଳ",
      image: "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: Utensils,
      description: "ବିଭିନ୍ନ ଉତ୍ସବ ଓ ବିଶେଷ ଅବସରରେ ଭୋଜି ସଂଗଠନରେ ସହାୟତା"
    },
    {
      id: 4,
      name: "ବାହ୍ୟ ଗ୍ରାମ ସହାୟତା",
      location: "ପଡୋଶୀ ଗ୍ରାମମାନଙ୍କୁ",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: Users,
      description: "ପଡୋଶୀ ଗ୍ରାମମାନଙ୍କରେ ଆପଦା ସମୟରେ ସହାୟତା ଓ ସହଯୋଗ"
    },
    {
      id: 5,
      name: "ବୃଦ୍ଧ ଜନ ସେବା",
      location: "ଗ୍ରାମର ବୃଦ୍ଧମାନଙ୍କ ଘର",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: Heart,
      description: "ବୃଦ୍ଧ ଓ ଅସହାୟ ଲୋକଙ୍କୁ ନିତ୍ୟଦିନିଆ ସେବା ଓ ସହାୟତା"
    },
    {
      id: 6,
      name: "ଯୁବକ ମଣ୍ଡଳୀ",
      location: "ଗ୍ରାମ ସମସ୍ତ",
      image: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: Users,
      description: "ଯୁବସମାଜଙ୍କ ମାଧ୍ୟମରେ ସାମାଜିକ କାର୍ଯ୍ୟରେ ଅଂଶଗ୍ରହଣ"
    }
  ];

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-sky-200">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Icon Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <IconComponent className="w-5 h-5 text-sky-600" />
          </div>
          
          {/* Location Badge */}
          <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {project.location}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
            {project.name}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sky-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{project.location}</span>
            </div>
            
            <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">ସକ୍ରିୟ</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-sky-700 to-blue-800 bg-clip-text text-transparent mb-6 p-2">
            ଆମର ସେବା କାର୍ଯ୍ୟ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ଗ୍ରାମ ସଫାଈ, ପୋଖରୀ ପରିଷ୍କରଣ, ଭୋଜି ସହାୟତା ଓ ସାମାଜିକ ସେବା ମାଧ୍ୟମରେ ଆମେ ଆମର ସମାଜକୁ ସୁନ୍ଦର ଓ ସହାୟକ କରୁଛୁ
          </p>
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Tablet Grid - 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile Grid - 1 column */}
        <div className="md:hidden grid grid-cols-1 gap-6 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">୫୦+</div>
              <div className="text-sm md:text-base text-gray-600">ସେବା କାର୍ଯ୍ୟକ୍ରମ</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">୨୦୦+</div>
              <div className="text-sm md:text-base text-gray-600">ସ୍ୱେଚ୍ଛାସେବୀ</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">୧୦+</div>
              <div className="text-sm md:text-base text-gray-600">ଗ୍ରାମ ଅଞ୍ଚଳ</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">୯୫%</div>
              <div className="text-sm md:text-base text-gray-600">ସଫଳତା ହାର</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWork;