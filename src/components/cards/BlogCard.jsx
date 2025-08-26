
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router";

const BlogCard = ({ post }) => {
  const formatDate = (date) => {
    if (!date) return "N/A";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      "education-technology": "bg-amber-100 text-amber-800",
      "student-success": "bg-blue-100 text-blue-800",
      "industry-news": "bg-green-100 text-green-800",
      "knowledge-sharing": "bg-purple-100 text-purple-800",
      default: "bg-gray-100 text-gray-800",
    };
    return colors[category] || colors.default;
  };

  return (
     <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow group bg-white">
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title || "Blog image"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              getCategoryColor(post.category || "default")
            }`}
          >
            {(post.category || "default")
              .replace("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
          <div className="flex items-center text-sm text-gray-500 ml-auto">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(post.createdAt)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
          {post.title || "Untitled Post"}
        </h3>

        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        )}

        <Link
          // href={`/blog/${post.slug || "#"}`}
          className="inline-flex items-center text-gray-800 hover:text-amber-500 font-medium transition-colors"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
