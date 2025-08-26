import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const UpcomingEventsSection = () => {
    
  const upcomingEvents = [
    {
      id: 1,
      title: "Open House 2023",
      date: "2023-11-15",
      location: "Main Campus",
      description: "Join us for our annual open house event to learn about our programs and meet our faculty."
    },
    {
      id: 2,
      title: "Tech Career Fair",
      date: "2023-11-20",
      location: "Conference Hall",
      description: "Connect with top employers in the technology industry and explore career opportunities."
    },
    {
      id: 3,
      title: "Alumni Networking Night",
      date: "2023-11-25",
      location: "Student Center",
      description: "Network with successful alumni and learn from their experiences in the professional world."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" data-testid="events-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="events-title">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="events-description">
              Join us for educational events, workshops, and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex flex-col items-center justify-center mr-4">
                    <span className="font-bold text-lg">{new Date(event.date).getDate()}</span>
                    <span className="text-xs">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{event.title}</div>
                    <div className="text-sm text-gray-500">{event.location}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                <button className="text-yellow-600 font-semibold text-sm flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition-all duration-200" data-testid="view-all-events">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default UpcomingEventsSection