import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Award, Users, CheckCircle, Calendar } from "lucide-react";

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
    highlights: [
      "Business & IT Integration",
      "ABE UK Endorsement",
      "Practical Project Work",
      "Career-Focused Training"
    ]
  }
];

const ProgramDetailPage = () => {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const selectedProgram = programs.find(p => p.slug === slug);
    setProgram(selectedProgram);
  }, [slug]);

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Program Not Found</h1>
          <p className="text-gray-600 mb-4">The program you're looking for doesn't exist.</p>
          <Link to="/programs">
            <button className="bg-blue-800 hover:bg-[#000080] text-white px-6 py-2 rounded-md">
              Back to Programs
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        {program.image && (
          <img
            src={program.image}
            alt={program.name}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <Link to="/programs">
            <button className="flex items-center text-white hover:bg-white/10 px-3 py-1 rounded-md mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Programs
            </button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex gap-2 mb-4">
              <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-sm">{program.level}</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{program.category}</span>
              {program.featured && (
                <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm flex items-center">
                  <Award className="w-3 h-3 mr-1" /> Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">{program.name}</h1>
            <p className="text-xl text-blue-100 mb-8">{program.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-300" />
                <div>
                  <p className="text-sm text-blue-200">Duration</p>
                  <p className="font-semibold">{program.duration}</p>
                </div>
              </div>
              {program.certification && (
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-300" />
                  <div>
                    <p className="text-sm text-blue-200">Certification</p>
                    <p className="font-semibold">{program.certification}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-300" />
                <div>
                  <p className="text-sm text-blue-200">Level</p>
                  <p className="font-semibold">{program.level}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-600" /> Program Overview
            </h2>
            <p className="text-gray-700">{program.longDescription}</p>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-600" /> Key Features
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {program.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-purple-600" /> Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {program.category.includes("IT") ? (
                <>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-[#000080]">Software Developer</h3>
                    <p className="text-blue-700 text-sm">Build applications and systems</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-900">System Administrator</h3>
                    <p className="text-green-700 text-sm">Manage IT infrastructure</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-[#000080]">Project Manager</h3>
                    <p className="text-blue-700 text-sm">Lead business initiatives</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-900">Business Analyst</h3>
                    <p className="text-green-700 text-sm">Analyze business processes</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-4">Quick Info</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Level:</span>
                <span>{program.level}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>{program.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span>{program.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className={`px-2 py-1 rounded ${program.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {program.featured ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          {/* Apply Now */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow p-6 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-200" />
            <h3 className="font-bold mb-2">Ready to Start?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Join hundreds of successful graduates and advance your career.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-blue-700 hover:bg-blue-50 py-3 rounded-lg font-medium">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
