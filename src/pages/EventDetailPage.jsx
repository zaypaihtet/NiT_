import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Static events (same as EventsPage)
  const featuredEvents = [
    {
      id: "1",
      title: "Career Fair 2024",
      slug: "career-fair-2024",
      description:
        "Connect with leading employers and explore career opportunities in technology and business sectors.",
      featuredImage:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2024-12-25T10:00:00Z"),
      endDate: new Date("2024-12-25T16:00:00Z"),
      location: "NiT Campus, Mingalar Mandalay",
      category: "career-fair",
      registrationRequired: true,
      maxAttendees: 200,
    },
    {
      id: "2",
      title: "AI Workshop Series",
      slug: "ai-workshop-series",
      description:
        "Hands-on workshop covering machine learning fundamentals and practical AI applications.",
      featuredImage:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2024-12-28T14:00:00Z"),
      endDate: new Date("2024-12-28T17:00:00Z"),
      location: "Computer Lab, Building A",
      category: "workshop",
      registrationRequired: true,
      maxAttendees: 30,
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundEvent = featuredEvents.find((e) => e.slug === slug);
      setEvent(foundEvent || null);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [slug]);

  const formatDate = (date) => new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatTime = (date) => new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const getCategoryColor = (category) => {
    const colors = {
      "career-fair": "bg-yellow-400 text-white",
      workshop: "bg-blue-600 text-white",
      orientation: "bg-green-500 text-white",
      seminar: "bg-purple-500 text-white",
      default: "bg-gray-500 text-white",
    };
    return colors[category] || colors.default;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      "career-fair": "Career Fair",
      workshop: "Workshop",
      orientation: "Orientation",
      seminar: "Seminar",
    };
    return labels[category] || category;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Event Not Found</h1>
        <p className="text-gray-500 mb-6">The event you are looking for doesn't exist.</p>
        <Link to="/events">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </button>
        </Link>
      </div>
    );
  }

  const isPast = new Date(event.endDate) < new Date();
  const isUpcoming = new Date(event.startDate) > new Date();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/events">
          <button className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </button>
        </Link>

        {/* Event Image */}
        {event.featuredImage && (
          <img
            src={event.featuredImage}
            alt={event.title}
            className="w-full h-80 object-cover rounded-lg shadow mb-6"
          />
        )}

        {/* Event Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded ${getCategoryColor(event.category)}`}>
            {getCategoryLabel(event.category)}
          </span>
          {isPast && <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded">Past Event</span>}
          {isUpcoming && <span className="px-2 py-1 bg-green-500 text-white rounded">Upcoming</span>}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{event.title}</h1>

        <p className="text-gray-700 mb-6 whitespace-pre-line">{event.description}</p>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>
                <strong>Start:</strong> {formatDate(event.startDate)} {formatTime(event.startDate)}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>
                <strong>End:</strong> {formatDate(event.endDate)} {formatTime(event.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>
                <strong>Location:</strong> {event.location}
              </span>
            </div>
            {event.maxAttendees && (
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <span>
                  <strong>Capacity:</strong> {event.maxAttendees} attendees
                </span>
              </div>
            )}
            <div className="flex items-center gap-3 mt-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>
                {event.registrationRequired
                  ? isPast
                    ? "Registration Closed"
                    : "Registration Required"
                  : "Free Entry - No Registration"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
