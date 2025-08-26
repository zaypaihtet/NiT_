import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Linkedin,

  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";

// Contact info
const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: "No. 17/A, San Yeik Nyein 6 Str, Kamayut, Yangon",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+95 9 780 778797",
    color: "text-blue-800 bg-blue-100",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@nit.com.mm",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details:
      "Monday - Friday: 9:00 AM - 5:00 PM",
    color: "text-blue-800 bg-blue-100",
  },
];

// FAQs
const faqs = [
  {
    question: "What are the admission requirements?",
    answer:
      "Admission requirements vary by program. Generally, you need to have completed high school or equivalent. Specific requirements for each program can be discussed during consultation.",
  },
  {
    question: "Do you offer scholarships or financial aid?",
    answer:
      "We offer various scholarship programs based on academic merit and financial need. Please contact our admissions office for more information about available financial assistance.",
  },
  {
    question: "Can I visit the campus before applying?",
    answer:
      "Absolutely! We encourage prospective students to visit our campus. Please contact us to schedule a campus tour and meet with our academic advisors.",
  },
  {
    question: "What career support do you provide?",
    answer:
      "We offer comprehensive career services including job placement assistance, resume building, interview preparation, and connections with our industry partners.",
  },
];

// Contact form
const ContactForm = () => {
  return (
    <form className="bg-white p-8 rounded-xl shadow-md max-w-lg mx-auto space-y-5">
      <h3 className="text-2xl font-semibold text-[#000080] text-center">
        Contact Us
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <textarea
        placeholder="Your Message"
        rows={5}
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

// Contact page
const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#000080] text-white py-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
          Ready to start your educational journey? Contact us for more
          information about our programs
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${info.color}`}
              >
                <info.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#000080] mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {info.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-[#000080] mb-8">
              Visit Our Campus
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-lg p-3 mr-4">
                  <MapPin className="text-yellow-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#000080] mb-1">
                    Campus Location San Yeik Nyein
                  </h4>
                  <p className="text-gray-600">
                    No. 17/A, San Yeik Nyein 6 Str, Kamayut, Yangon
                  </p>
                  <p className="text-gray-600">Myanmar</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-lg p-3 mr-4">
                  <MapPin className="text-yellow-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#000080] mb-1">
                    Campus Location Thamine
                  </h4>
                  <p className="text-gray-600">
                   N0.1516, 2nd floor, Thamine Junction, Mayangone Township, Yangon.

                  </p>
                  <p className="text-gray-600">Myanmar</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <Phone className="text-blue-800 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#000080] mb-1">
                    Phone Number
                  </h4>
                  <p className="text-gray-600">+95 9 780 778797 <br />+95 9 798 955060</p>
                  <p className="text-sm text-gray-500">
                    Available during office hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-lg p-3 mr-4">
                  <Mail className="text-yellow-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#000080] mb-1">
                    Email Address
                  </h4>
                  <p className="text-gray-600">info@nit.com.mm</p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="font-bold text-[#000080] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  to="#https://www.facebook.com/nitcollege.mm"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  to="#youtube"
                  className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <ContactForm />
        </div>
      </section>

      {/* Maps */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-[#000080] text-center mb-8">
            Visit Our Campus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.9010692475035!2d96.1282676749215!3d16.831263283964148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1951b1804175b%3A0xbc8f87543d934a35!2sNiT%20University!5e0!3m2!1sen!2smm!4v1729237160340!5m2!1sen!2smm"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NiT University"
              ></iframe>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30546.29394611136!2d96.08612537384036!3d16.861704183270167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195ccd8d01b41%3A0x13b2b10023ec1fed!2sNetworking%20%26%20Information%20Technology%20(NiT)%20Training%20Center!5e0!3m2!1sen!2smm!4v1741064184681!5m2!1sen!2smm"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NiT Training Center"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#000080] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our programs and admission
              process
            </p>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-bold text-[#000080] text-xl">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-[#000080] w-6 h-6" />
                ) : (
                  <ChevronDown className="text-[#000080] w-6 h-6" />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-600 text-lg mt-3">{faq.answer}</p>
              )}
            </div>
          ))}

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:09780778797"
                className="bg-[#000080] hover:bg-[#000080] text-white px-6 py-3 rounded flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us 09780778797
              </a>
              <a
                href="mailto:contact@nit.com.mm"
                className="border border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6 py-2 rounded flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs CTA */}
      <section className="py-16 bg-yellow-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#000080] mb-4">
            Ready to Explore Our Programs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the right program for your career goals and start your
            journey with us.
          </p>
          <Link
            to="/programs"
            className="bg-blue-800 text-white px-8 py-3 rounded hover:bg-[#000080] transition"
          >
            View All Programs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
