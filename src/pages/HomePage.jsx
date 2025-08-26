import HeroSection from "../components/home/HeroSection";
import QuickStat from "../components/home/QuickStat";
import ProgramsSection from "../components/home/ProgramsSection";
import LmsSection from "../components/home/LmsSection";
import LatestBlogsSection from "../components/home/LatestBlogsSection";
import UpcomingEventsSection from "../components/home/UpcomingEventsSection";
import StudentTestimonialSection from "../components/home/StudentTestimonialSection";

const HomePage = () => {
 

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
     <HeroSection/>

      {/* Quick Stats */}
     <QuickStat/>

      {/* Programs Section */}
     <ProgramsSection/>

      {/* LMS CTA Section */}
      <LmsSection/>

      {/* Latest Blog Posts */}
      <LatestBlogsSection />

      {/* Upcoming Events */}
      <UpcomingEventsSection/>

      {/* Student Testimonials */}
      <StudentTestimonialSection/>
    </div>
  );
};

export default HomePage;