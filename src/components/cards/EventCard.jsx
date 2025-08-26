import React from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Link } from "react-router";


const EventCard = ({ event }) => {
  const formatDate = (date) => {
    if (!date) return { day: "--", month: "TBD" };
    const d = new Date(date);
    if (isNaN(d)) return { day: "--", month: "TBD" };
    return {
      day: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "short" }),
    };
  };

  const formatTime = (date) => {
    if (!date) return "TBD";
    const d = new Date(date);
    if (isNaN(d)) return "TBD";
    return d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "career-fair": "💼",
      workshop: "🎓",
      orientation: "👥",
      seminar: "📚",
      default: "📅",
    };
    return icons[category] || icons.default;
  };

  const getCategoryColor = (category) => {
    const colors = {
      "career-fair": "bg-yellow-500",
      workshop: "bg-blue-700",
      orientation: "bg-green-500",
      seminar: "bg-purple-500",
      default: "bg-gray-500",
    };
    return colors[category] || colors.default;
  };

  const startDate = formatDate(event.startDate);
  const endDate = formatDate(event.endDate);
  const startTime = formatTime(event.startDate);
  const endTime = formatTime(event.endDate);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition p-6">
      <div className="flex items-center mb-4">
        <div
          className={`text-white rounded-lg p-3 mr-4 ${getCategoryColor(
            event.category
          )}`}
        >
          <span className="text-xl">{getCategoryIcon(event.category)}</span>
        </div>
        <div>
          <div className="text-2xl font-bold #000080">{startDate.day}</div>
          <div className="text-sm text-gray-600">{startDate.month}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold #000080 mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

      <div className="space-y-2 mb-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          <span>
            {startTime} - {endTime}
          </span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </div>

      {event.category && (
        <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mb-4">
          {event.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
      )}

      <Link
        to={`/events/${event.slug}`}
        className="inline-flex items-center text-blue-700 hover:text-yellow-500 font-medium transition-colors"
      >
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default EventCard;
