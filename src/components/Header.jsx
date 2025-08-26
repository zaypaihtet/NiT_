import { useState } from "react";
import { Menu, Phone, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="logo-link">
            {/* <img
              src="../../public/image/logo.png"
              alt="NiT College Logo"
              className="h-12 w-auto"
              data-testid="logo-image"
            /> */}
            <div className="ml-3">
              <h1
                className="text-xl font-bold text-[#000080]"
                data-testid="college-name"
              >
                NiT College
              </h1>
              <p
                className="text-xs text-gray-600"
                data-testid="college-tagline"
              >
                Excellence in Education
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            data-testid="desktop-navigation"
          >
            <Link
              to="/"
              className="text-[#000080] hover:text-amber-500 font-medium transition-colors px-4 py-2"
              data-testid="nav-home"
            >
              Home
            </Link>

            {/* Programs Dropdown */}
            <div className="relative group" data-testid="nav-programs">
              <button
                className="text-[#000080] hover:text-amber-500 font-medium transition-colors px-4 py-2 flex items-center"
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/programs#ncc"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  data-testid="nav-ncc"
                >
                  NCC Education
                </Link>
                <Link
                  to="/programs#bit"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  data-testid="nav-bit"
                >
                  Dip.BIT (ABE)
                </Link>
                <Link
                  to="/programs#itpec"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  data-testid="nav-itpec"
                >
                  ITPEC Program
                </Link>
                <Link
                  to="/programs#diploma"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  data-testid="nav-diploma"
                >
                  Diploma Courses
                </Link>
              </div>
            </div>

            <Link
              to="/blogs"
              className="text-[#000080] hover:text-amber-500 font-medium transition-colors px-4 py-2"
              data-testid="nav-blog"
            >
              Blog
            </Link>

            <Link
              to="/events"
              className="text-[#000080] hover:text-amber-500 font-medium transition-colors px-4 py-2"
              data-testid="nav-events"
            >
              Events
            </Link>

            <Link
              to="/about"
              className="text-[#000080] hover:text-amber-500 font-medium transition-colors px-4 py-2"
              data-testid="nav-about"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-[#000080] hover:text-amber-500 font-medium transition-colors px-4 py-2"
              data-testid="nav-contact"
            >
              Contact
            </Link>

            {/* <Link 
              to="/admin/login" 
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors px-3 py-1 border border-amber-500 rounded"
              data-testid="nav-admin"
            >
              Admin
            </Link> */}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right" data-testid="header-contact-info">
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Phone className="h-3 w-3 mr-1" />
                <span data-testid="header-phone">+95 9 780 778797</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin className="h-3 w-3 mr-1" />
                <span data-testid="header-location">Kamayut, Yangon</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors"
              data-testid="apply-now-button"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className="fixed inset-0 z-50 lg:hidden"
              data-testid="mobile-menu"
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => setIsOpen(false)}
              ></div>
              <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">Navigation</h2>
                  <div className="flex flex-col space-y-4">
                    <Link
                      to="/"
                      className="text-[#000080] font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-home"
                    >
                      Home
                    </Link>
                    <Link
                      to="/programs"
                      className="text-[#000080] font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-programs"
                    >
                      Programs
                    </Link>
                    <Link
                      to="/blogs"
                      className="text-[#000080] font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-blog"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/events"
                      className="text-[#000080] font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-events"
                    >
                      Events
                    </Link>
                    <Link
                      to="/about"
                      className="text-[#000080] font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-about"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="text-[#000080] font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-contact"
                    >
                      Contact
                    </Link>
                    {/* <Link 
                      to="/admin/login" 
                      className="text-amber-600 font-medium py-2 border border-amber-500 text-center rounded"
                      onClick={() => setIsOpen(false)}
                      data-testid="mobile-nav-admin"
                    >
                      Admin Login
                    </Link> */}
                    <div className="pt-4 border-t border-gray-200 mt-4">
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span data-testid="mobile-contact-info">
                          09 788889170
                        </span>
                      </p>
                      <Link
                        to="/contact"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded block text-center"
                        onClick={() => setIsOpen(false)}
                        data-testid="mobile-apply-button"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
