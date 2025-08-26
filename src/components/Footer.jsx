
import { MapPin, Phone, Mail, Facebook, Youtube, } from "lucide-react";
import { Link } from "react-router";

const Footer=()=> {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#000080] text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div data-testid="footer-college-info">
            <img 
              src="/image/logo1.png" 
              alt="NiT College Logo" 
              className="h-12 mb-4"
              data-testid="footer-logo"
            />
            <p className="text-gray-300 mb-4" data-testid="footer-description">
              Building Myanmar's future through international standard education and practical skills development.
            </p>
            <div className="flex space-x-4" data-testid="footer-social-links">
              <Link to="https://www.facebook.com/nitcollege.mm" target="_Blank" className="text-gray-300 hover:text-gold-400 text-xl transition-colors" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#youtube" className="text-gray-300 hover:text-gold-400 text-xl transition-colors" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-link-programs">Programs</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-link-blog">Blog</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-link-events">Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div data-testid="footer-programs">
            <h4 className="text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs#ncc" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-program-ncc">NCC Education</Link></li>
              <li><Link to="/programs#bit" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-program-bit">Dip.BIT (ABE)</Link></li>
              <li><Link to="/programs#itpec" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-program-itpec">ITPEC Program</Link></li>
              <li><Link to="/programs#diploma" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-program-diploma">Professional Diplomas</Link></li>
              <li><a to="https://learnwithnit.com/" className="text-gray-300 hover:text-gold-400 transition-colors" data-testid="footer-lms-link">LMS Platform</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start" data-testid="footer-address">
                <MapPin className="text-gold-400 mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-gray-300">No. 17/A, San Yeik Nyein 6 Str, Kamayut, Yangon</span>
              </div>
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="text-gold-400 mr-3 h-4 w-4" />
                <span className="text-gray-300">+959780778797</span>
              </div>
              <div className="flex items-start" data-testid="footer-address">
                <MapPin className="text-gold-400 mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-gray-300">N0.1516, 2nd floor, Thamine Junction, Mayangone Township, Yangon.</span>
              </div>
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="text-gold-400 mr-3 h-4 w-4" />
                <span className="text-gray-300">+959798955060</span>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <Mail className="text-gold-400 mr-3 h-4 w-4" />
                <span className="text-gray-300">info@nit.com.mm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-gray-300">
            © {currentYear} NiT College. All rights reserved. | Excellence in Education for Tomorrow's Leaders
          </p>  
        </div>
      </div>
    </footer>
  );
}

export default Footer
