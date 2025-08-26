import React, { useState, useEffect } from "react";
import { Calendar, Search, Filter } from "lucide-react";
import EventCard from "../components/cards/EventCard";

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  // full static events dataset
  const featuredEvents = [
    {
      id: "1",
      title: "Career Fair 2024",
      slug: "career-fair-2024",
      description:
        "Connect with leading employers and explore career opportunities in technology and business sectors. Meet recruiters from top companies and learn about internship and job opportunities.",
      featuredImage:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2024-12-25T10:00:00Z"),
      endDate: new Date("2024-12-25T16:00:00Z"),
      location: "NiT Campus, Mingalar Mandalay",
      category: "career-fair",
      registrationRequired: true,
      maxAttendees: 200,
      published: true,
      createdAt: new Date("2024-12-01T00:00:00Z"),
      updatedAt: new Date("2024-12-01T00:00:00Z"),
    },
    {
      id: "2",
      title: "AI Workshop Series",
      slug: "ai-workshop-series",
      description:
        "Hands-on workshop covering machine learning fundamentals and practical AI applications. Learn from industry experts and work on real-world projects.",
      featuredImage:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2024-12-28T14:00:00Z"),
      endDate: new Date("2024-12-28T17:00:00Z"),
      location: "Computer Lab, Building A",
      category: "workshop",
      registrationRequired: true,
      maxAttendees: 30,
      published: true,
      createdAt: new Date("2024-12-01T00:00:00Z"),
      updatedAt: new Date("2024-12-01T00:00:00Z"),
    },
    {
      id: "3",
      title: "New Student Orientation",
      slug: "new-student-orientation",
      description:
        "Welcome session for new students joining our programs in the new academic year. Get familiar with campus facilities, meet your instructors, and connect with fellow students.",
      featuredImage:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2025-01-05T09:00:00Z"),
      endDate: new Date("2025-01-05T12:00:00Z"),
      location: "Main Auditorium",
      category: "orientation",
      registrationRequired: false,
      maxAttendees: null,
      published: true,
      createdAt: new Date("2024-12-01T00:00:00Z"),
      updatedAt: new Date("2024-12-01T00:00:00Z"),
    },
    {
      id: "4",
      title: "Industry Trends Seminar",
      slug: "industry-trends-seminar",
      description:
        "Learn about the latest trends in technology and business from industry leaders. Understand how these trends will shape future career opportunities.",
      featuredImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2025-01-15T10:00:00Z"),
      endDate: new Date("2025-01-15T15:00:00Z"),
      location: "Conference Hall",
      category: "seminar",
      registrationRequired: true,
      maxAttendees: 100,
      published: true,
      createdAt: new Date("2024-12-01T00:00:00Z"),
      updatedAt: new Date("2024-12-01T00:00:00Z"),
    },
    {
      id: "5",
      title: "Web Development Bootcamp",
      slug: "web-development-bootcamp",
      description:
        "Intensive 2-day bootcamp covering modern web development technologies including React, Node.js, and database integration.",
      featuredImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2025-01-20T09:00:00Z"),
      endDate: new Date("2025-01-21T17:00:00Z"),
      location: "Computer Lab Complex",
      category: "workshop",
      registrationRequired: true,
      maxAttendees: 25,
      published: true,
      createdAt: new Date("2024-12-01T00:00:00Z"),
      updatedAt: new Date("2024-12-01T00:00:00Z"),
    },
    {
      id: "6",
      title: "Alumni Networking Event",
      slug: "alumni-networking-event",
      description:
        "Annual networking event connecting current students with successful alumni. Share experiences, build professional relationships, and explore mentorship opportunities.",
      featuredImage:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      startDate: new Date("2025-02-01T18:00:00Z"),
      endDate: new Date("2025-02-01T21:00:00Z"),
      location: "Grand Ballroom, Mandalay Hotel",
      category: "career-fair",
      registrationRequired: true,
      maxAttendees: 150,
      published: true,
      createdAt: new Date("2024-12-01T00:00:00Z"),
      updatedAt: new Date("2024-12-01T00:00:00Z"),
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "career-fair", label: "Career Fair" },
    { value: "workshop", label: "Workshop" },
    { value: "orientation", label: "Orientation" },
    { value: "seminar", label: "Seminar" },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(featuredEvents);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = () => {
    let result = [...events];
    if (selectedCategory !== "all") {
      result = result.filter((e) => e.category === selectedCategory);
    }
    if (searchQuery) {
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  };

  const displayEvents = filteredEvents();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#000080] text-white py-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Upcoming Events</h1>
        <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
          Join us for educational events, workshops, and networking opportunities
        </p>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="flex-1 relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-48 border border-gray-300 rounded-md py-2 px-3 bg-white"
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#000080] mb-12 text-center">
            All Events
          </h2>

          {loading ? (
            // Skeleton Loader Grid
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-6 animate-pulse"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                </div>
              ))}
            </div>
          ) : displayEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No Events Found
              </h3>
              <p className="text-gray-500">
                {searchQuery
                  ? "Try adjusting your search terms"
                  : "Check back later for upcoming events"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
