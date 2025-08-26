import {useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Award, ExternalLink } from "lucide-react";

const ProgramsPage = () => {
  const location = useLocation();
  
  const programs = [
    {
      id: "ncc",
      name: "NCC Education",
      slug: "ncc-education",
      description: "Level 3, 4, 5 programs with UK recognition. Get your UK Diploma without leaving Myanmar.",
      longDescription: "NCC Education provides internationally recognized qualifications that are equivalent to UK university level courses. Our programs are designed to give students the knowledge and skills needed for successful careers in computing, business, and related fields.",
      level: "Level 3-5",
      duration: "6-18 months per level",
      certification: "UK Recognized Diploma",
      category: "Computing & Business",
      featured: true,
      image: "https://oxfordiancollege.com/wp-content/uploads/2024/11/18.png",
      logo: "https://nit.com.mm/image/ncc/NCC-lvls5-web.png",
      highlights: [
        "UK Standard Education",
        "International Recognition",
        "Progressive Learning Path",
        "Industry-Relevant Curriculum"
      ]
    },
    {
      id: "bit",
      name: "Dip.BIT (ABE Endorsed)",
      slug: "diploma-bit",
      description: "Business and Information Technology diploma program endorsed by ABE UK.",
      longDescription: "The Diploma in Business Information Technology (BIT) is designed to provide students with a comprehensive understanding of business processes and information technology.",
      level: "Diploma",
      duration: "12-18 months",
      certification: "ABE UK Endorsed Diploma",
      category: "Business Technology",
      featured: false,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      logo: "https://nit.com.mm/image/bit/BiT.png",
      highlights: [
        "Business & IT Integration",
        "ABE UK Endorsement",
        "Practical Project Work",
        "Career-Focused Training"
      ]
    },
    {
      id: "itpec",
      name: "ITPEC (IP + FE)",
      slug: "itpec-program",
      description: "Information Technology Professionals Examination Council certification program.",
      longDescription: "ITPEC provides internationally recognized IT certifications covering both IP and FE levels, giving students comprehensive knowledge of IT fundamentals.",
      level: "Certificate",
      duration: "3-6 months",
      certification: "ITPEC International Certification",
      category: "Information Technology",
      featured: false,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: [
        "International IT Standards",
        "Professional Certification",
        "Industry Recognition",
        "Fast-Track Learning"
      ]
    },
    {
      id: "diploma",
      name: "Professional Diplomas",
      slug: "professional-diplomas",
      description: "Specialized diploma programs in various fields of study.",
      longDescription: "Our professional diploma programs offer specialized training in various fields including digital marketing, web development, and graphic design.",
      level: "Various Levels",
      duration: "6-12 months",
      certification: "Professional Certificates",
      category: "Professional Development",
      featured: false,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: [
        "Flexible Learning",
        "Industry-Relevant Skills",
        "Professional Recognition",
        "Career Advancement"
      ]
    }
  ];

  // Scroll to program when hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const programId = location.hash.replace('#', '');
      const element = document.getElementById(programId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50" data-testid="programs-page">
      {/* Hero Section */}
      <section className="bg-[#000080] text-white py-20" data-testid="programs-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="programs-hero-title">
              Our Programs
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto" data-testid="programs-hero-description">
              Choose from our internationally recognized programs designed to prepare you for global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20" data-testid="programs-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8" data-testid="programs-list">
            {programs.map((program) => (
              <div 
                key={program.id} 
                id={program.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-testid={`program-detail-${program.id}`}
              >
                <div className="relative">
                  <img 
                    src={program.image}
                    alt={`${program.name} Program`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 "
                    data-testid={`program-detail-image-${program.id}`}
                  />
                  {program.featured && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-sm font-semibold rounded" data-testid={`program-featured-badge-${program.id}`}>
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block border border-amber-300 text-amber-600 text-sm px-3 py-1 rounded-full mb-2" data-testid={`program-category-${program.id}`}>
                      {program.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3" data-testid={`program-detail-name-${program.id}`}>
                      {program.name}
                    </h2>
                    <p className="text-gray-600 mb-6" data-testid={`program-detail-description-${program.id}`}>
                      {program.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-500" data-testid={`program-duration-${program.id}`}>
                      <Clock className="h-4 w-4 mr-2 text-amber-500" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500" data-testid={`program-level-${program.id}`}>
                      <Award className="h-4 w-4 mr-2 text-amber-500" />
                      <span>{program.level}</span>
                    </div>
                    {program.certification && (
                      <div className="flex items-center text-sm text-gray-500 col-span-2" data-testid={`program-certification-${program.id}`}>
                        <BookOpen className="h-4 w-4 mr-2 text-amber-500" />
                        <span>{program.certification}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2" data-testid={`program-highlights-${program.id}`}>
                      {program.highlights.slice(0, 4).map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/contact">
                      <button className="flex-1 bg-[#000080] hover:bg-[#000080] text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center" data-testid={`program-apply-${program.id}`}>
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </Link>
                    <Link to={`/programs/${program.slug}`}>
                      <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-amber-300 py-3 px-4 rounded-lg font-medium transition-colors" data-testid={`program-learn-more-${program.id}`}>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-20" data-testid="programs-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-testid="programs-cta-title">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8" data-testid="programs-cta-description">
            Contact us today to learn more about our programs and how we can help you achieve your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-[#000080] hover:bg-[#000080] text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center" data-testid="programs-contact-button">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <a to="https://learnwithnit.com/" target="_blank" rel="noopener noreferrer">
              <button className="border border-amber-500 text-amber-600 hover:bg-amber-50 py-3 px-6 rounded-lg font-medium transition-colors flex items-center" data-testid="programs-lms-button">
                Visit LMS <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;