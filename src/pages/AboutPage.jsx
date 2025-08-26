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
        "Our programs are globally recognized, providing opportunities for international career growth.",
      points: [
        "UK-recognized diplomas",
        "Global industry partnerships",
        "Aligned with international standards",
      ],
    },
    {
      title: "Key Partnerships",
      points: [
        "Myanmar Computer Federation (ITPEC Program) – Jan 2022",
        "National Computer Center (NCC Program) – Jul 2023",
        "ABE (Endorsed, UK) for single-subject diploma programs – Apr 2024",
      ],
    },
    {
      title: "Practical Learning",
      description:
        "We focus on real-world skills through hands-on training and industry exposure.",
      points: [
        "Project-based learning",
        "Industry internships",
        "Application of industry practices",
      ],
    },
    {
      title: "Expert Faculty",
      description:
        "Students learn from experienced industry professionals who provide:",
      points: ["In-depth knowledge", "Ongoing mentorship", "Career guidance"],
    },
  ];

 const featuredFaculty = [
    {
      id: "1",
      name: "Dr. Thant Zin",
      title: "Senior IT Instructor",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Web Development", "Programming", "Software Engineering"],
    },
    {
      id: "2",
      name: "Ms. Khin Thida",
      title: "Business Analytics Expert",
      profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Business Analytics", "Data Science", "Information Systems"],
    },
    {
      id: "3",
      name: "Mr. Aung Kyaw",
      title: "Software Development Lead",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Software Architecture", "Agile Methodology", "Team Leadership"],
    },
    {
      id: "4",
      name: "Dr. Zaw Min",
      title: "AI Research Specialist",
      profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
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
              NiT ဟာဆိုရင် 2019 ခုနှစ်က စတင်တည်ထောင်ခဲ့ပြီး မြန်မာနိုင်မှာရှိတဲ့ လူငယ်များ  IT ဘာသာရပ်များကို လွယ်ကူစွာ လေ့လာနိုင်ဖို့အတွက် နိုင်ငံတကာအဆင့်မီ ပညာရေးပေးနေတဲ့ ကောလိပ်တစ်ခု ဖြစ်ပါတယ်။
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Established: 27 September 2019 <br />
              Over 4,000 students enrolled <br />
              Offers certificate courses: A+, Network Engineering (NE), CCNA (200-301), Microsoft Windows Server, Linux System Administration, Linux Server Administration, Python Programming, Front-End Web Development, Application Development <br />
              Classes: Online & Offline
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-[#000080] font-bold px-6 py-3 rounded-lg"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className=".w-full h-[20rem]">
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
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#000080] mb-6">
              Why Choose NiT College?
            </h2>
            <p className="text-2xl text-gray-700 mb-8">  
              IT နယ်ပယ်မှာအရည်အချင်းပြည့်မီသော ထူးချွန်သည့်လူငယ်တွေဖြစ်လာစေရန် နိုင်ငံတကာစံနှုန်းများနှင့် အညီ စာတွေ့လက်တွေ့
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
      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-[#000080] mb-4">Our Vision & Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that shape education and inspire success at NiT College
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 space-y-12">
          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-2xl font-bold text-[#000080] mb-4">Our Vision</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <span>To develop IT professionals who are ethical, skilled, and ready to lead in a global market.</span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-2xl font-bold text-[#000080] mb-4">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <span>Build strong industry partnerships to enhance learning and career opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <span>Inspire students to achieve excellence in information technology</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <span>Transform learners into leaders who can shape the future of the IT industry</span>
              </li>
            </ul>
          </div>
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
