import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const ProgramsSection = () => {
  const programs = [
    {
      id: "ncc",
      name: "NCC Education",
      description:
        "Level 3, 4, 5 programs with UK recognition. Get your UK Diploma without leaving Myanmar.",
      level: "Level 3-5",
      featured: true,
      image:
        "https://oxfordiancollege.com/wp-content/uploads/2024/11/18.png",
      logo: "https://nit.com.mm/image/ncc/NCC-lvls5-web.png",
    },
    {
      id: "bit",
      name: "Dip.BIT (ABE Endorsed)",
      description:
        "Business and Information Technology diploma program endorsed by ABE UK.",
      level: "Diploma",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      logo: "https://nit.com.mm/image/bit/BiT.png",
    },
    {
      id: "itpec",
      name: "ITPEC (IP + FE)",
      description:
        "Information Technology Professionals Examination Council certification program.",
      level: "Certificate",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
    {
      id: "diploma",
      name: "Professional Diplomas",
      description:
        "Specialized diploma programs in various fields of study.",
      level: "Various",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" data-testid="programs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            data-testid="programs-title"
          >
            Our Programs
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-testid="programs-description"
          >
            Choose from our internationally recognized programs designed to
            prepare you for global opportunities
          </p>
        </div>

        {/* Programs Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-testid="programs-grid"
        >
          {programs.map((program) => (
            <div
              key={program.id}
              className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow group"
              data-testid={`program-card-${program.id}`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={program.image}
                  alt={`${program.name} Program`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`program-image-${program.id}`}
                />
                {program.featured && (
                  <span
                    className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-sm font-semibold rounded"
                    data-testid={`program-badge-${program.id}`}
                  >
                    Most Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {program.logo && (
                  <img
                    src={program.logo}
                    alt={`${program.name} Logo`}
                    className="h-12 mb-4 object-contain"
                    data-testid={`program-logo-${program.id}`}
                  />
                )}
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  data-testid={`program-name-${program.id}`}
                >
                  {program.name}
                </h3>
                <p
                  className="text-gray-600 mb-4"
                  data-testid={`program-description-${program.id}`}
                >
                  {program.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-block border border-amber-300 text-amber-600 text-sm px-3 py-1 rounded-full"
                    data-testid={`program-level-${program.id}`}
                  >
                    {program.level}
                  </span>
                  <Link
                    to={`/programs#${program.id}`}
                    className="inline-flex items-center text-gray-700 hover:text-amber-500 font-medium transition-colors"
                    data-testid={`program-link-${program.id}`}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            data-testid="view-all-programs"
          >
            View All Programs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
