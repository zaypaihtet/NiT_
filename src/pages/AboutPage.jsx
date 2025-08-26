import {
  ArrowRight,
  CheckCircle,
  Play,
  BookOpen,
  Users,
  Award,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import FacultyCard from "../components/cards/FacultyCard";
import { Link } from "react-router";

const AboutPage = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Students",
      color: "text-yellow-500",
    },
    {
      icon: BookOpen,
      value: "4",
      label: "Study Programs",
      color: "text-blue-800",
    },
    {
      icon: Users,
      value: "15+",
      label: "Expert Instructors",
      color: "text-yellow-500",
    },
    { icon: Award, value: "200+", label: "Graduates", color: "text-blue-800" },
  ];

  const excellenceFeatures = [
    {
      icon: BookOpen,
      title: "Great Teachers",
      description:
        "Well trained teachers with practical experience in their respective fields.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Award,
      title: "Best Study",
      description:
        "Full learning facilities with modern equipment and resources.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Globe,
      title: "Best System",
      description:
        "International standards and globally recognized certifications.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const whyChooseUs = [
    {
      title: "International Recognition",
      description:
        "Our programs are recognized globally, opening doors to international opportunities.",
      points: [
        "UK-recognized diplomas",
        "Global industry partnerships",
        "International standards",
      ],
    },
    {
      title: "Practical Learning",
      description:
        "Hands-on approach with real-world projects and industry exposure.",
      points: [
        "Project-based learning",
        "Industry internships",
        "Real-world applications",
      ],
    },
    {
      title: "Expert Faculty",
      description:
        "Learn from experienced professionals with deep industry knowledge.",
      points: ["Industry veterans", "Continuous mentorship", "Career guidance"],
    },
  ];

 const featuredFaculty = [
    {
      id: "1",
      name: "Dr. Thant Zin",
      title: "Senior IT Instructor",
      bio: "A seasoned IT professional with over a decade of experience in both software development and education. Expertise spans across multiple programming languages and frameworks, with a particular focus on web development technologies.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Web Development", "Programming", "Software Engineering"],
      experience: "10+ years in software development and education",
      email: "thant.zin@nit.com.mm",
      active: true,
      createdAt: new Date("2024-01-01T00:00:00Z"),
      updatedAt: new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "2",
      name: "Ms. Khin Thida",
      title: "Business Analytics Expert",
      bio: "Specializes in the intersection of business and technology, bringing corporate experience into education. Background in business analytics and information systems helps students understand how technology can drive business value.",
      profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Business Analytics", "Data Science", "Information Systems"],
      experience: "8+ years in business analytics and corporate training",
      email: "khin.thida@nit.com.mm",
      active: true,
      createdAt: new Date("2024-01-01T00:00:00Z"),
      updatedAt: new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "3",
      name: "Mr. Aung Kyaw",
      title: "Software Development Lead",
      bio: "Focuses on software craftsmanship and professional development practices. Mentorship covers everything from clean code principles to agile methodologies. Provides students with insights into the full software development lifecycle.",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Software Architecture", "Agile Methodology", "Team Leadership"],
      experience: "12+ years in software development and team management",
      email: "aung.kyaw@nit.com.mm",
      active: true,
      createdAt: new Date("2024-01-01T00:00:00Z"),
      updatedAt: new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "4",
      name: "Dr. Zaw Min",
      title: "AI Research Specialist",
      bio: "Leading researcher in machine learning and neural networks with work focusing on explainable AI and ethical considerations. Breaks down complex AI concepts into understandable components while maintaining scientific rigor.",
      profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
      experience: "15+ years in AI research and development",
      email: "zaw.min@nit.com.mm",
      active: true,
      createdAt: new Date("2024-01-01T00:00:00Z"),
      updatedAt: new Date("2024-01-01T00:00:00Z")
    }
  ];
  const loopedFaculty = [...featuredFaculty, ...featuredFaculty];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#000080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About NiT College
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-6">
              မြန်မာနိုင်ငံ မန္တလေးမြို့မှာ အခြေစိုက်တဲ့ NiT College ဟာ
              မြန်မာလူငယ်တွေရဲ့ သစ်လွင်တဲ့ အနာဂတ် ခြေလှမ်းသစ်တွေအတွက်
              အစပျိုးပေးမယ့် နေရာတစ်ခုဖြစ်ပါတယ်။
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Building Myanmar's future through international standard education
              and practical skills development.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-[#000080] font-bold px-6 py-3 rounded-lg"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="NiT College campus building"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${
                    stat.color.includes("yellow")
                      ? "bg-yellow-100"
                      : "bg-blue-100"
                  }`}
                >
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-[#000080] mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-[#000080] mb-4">
            Our College Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What makes NiT College the right choice for your educational journey
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {excellenceFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 ${feature.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#000080] mb-6">
              Why Choose NiT College?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              ကမ္ဘာ့လုပ်ငန်းခွင်နဲ့
              ပြည်တွင်းလုပ်ငန်းခွင်တွေမှာအရည်အချင်းပြည့်မီတဲ့
              လူငယ်တွေဖြစ်လာစေဖို့နိုင်ငံတကာအဆင့် ပညာရပ်တွေ၊ အတွေ့အကြုံတွေ
              ပြည့်ဝနေအောင် သင်ကြားပေးမှာ ဖြစ်ပါတယ်။
            </p>
            <div className="space-y-6">
              {whyChooseUs.map((reason, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-[#000080] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{reason.description}</p>
                  <ul className="space-y-1">
                    {reason.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              className="rounded-lg shadow-lg"
              alt="Students"
            />
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/cyber_security_vs_software_engineering.jpg"
              className="rounded-lg shadow-lg mt-8"
              alt="Classroom"
            />
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              className="rounded-lg shadow-lg -mt-8"
              alt="Lab"
            />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              className="rounded-lg shadow-lg"
              alt="Graduation"
            />
          </div>
        </div>
      </section>

      {/* Faculty */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 text-center mb-16">
      <h2 className="text-4xl font-bold text-[#000080] mb-4">
        Our Expert Faculty
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Learn from industry professionals with extensive experience in
        education and technology
      </p>
    </div>

    {/* Animated Faculty Cards */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8"
        style={{
          width: `${loopedFaculty.length * 250 + loopedFaculty.length * 32}px`,
        }}
        animate={{
          x: ["0px", `-${(loopedFaculty.length / 2) * (250 + 32)}px`],
        }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {loopedFaculty.map((member, index) => (
          <FacultyCard key={index} member={member} />
        ))}
      </motion.div>
    </div>

    {/* Button */}
    <div className="text-center mt-12">
      <Link
        to="/contact"
        className="inline-flex items-center border border-blue-500 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        Meet All Faculty <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </section>

      {/* Video Section */}
      <section
        className="py-20 bg-gray-800 text-white"
        data-testid="video-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="video-title">
                See Our Campus in Action
              </h2>
              <p
                className="text-xl text-gray-200 mb-8"
                data-testid="video-description"
              >
                Take a virtual tour of our modern facilities and see how we're
                preparing students for successful careers in technology and
                business.
              </p>
              <div className="space-y-4">
                <div
                  className="flex items-center"
                  data-testid="video-feature-1"
                >
                  <CheckCircle className="h-5 w-5 text-gold-400 mr-3" />
                  <span>State-of-the-art computer labs</span>
                </div>
                <div
                  className="flex items-center"
                  data-testid="video-feature-2"
                >
                  <CheckCircle className="h-5 w-5 text-gold-400 mr-3" />
                  <span>Modern classrooms with latest technology</span>
                </div>
                <div
                  className="flex items-center"
                  data-testid="video-feature-3"
                >
                  <CheckCircle className="h-5 w-5 text-gold-400 mr-3" />
                  <span>Collaborative learning spaces</span>
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DX--PiwUO6o"
                title="Campus Tour Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold text-[#000080] mb-4">
          Ready to Join NiT College?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Take the first step towards a successful career in technology and
          business. Contact us to learn more about our programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#000080] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="/programs"
            className="inline-flex items-center justify-center border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg font-bold hover:bg-yellow-50"
          >
            View Programs
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
