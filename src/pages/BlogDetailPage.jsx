import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();

  // Mock blog posts (same as your blog page)
  const [posts] = useState([
    {
      id: "1",
      title: "The Future of Education: AI and Digital Learning",
      slug: "future-education-ai-digital-learning",
      excerpt:
        "Explore how AI and digital platforms are transforming the educational landscape.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.`,
      featuredImage:
        "https://www.workitdaily.com/media-library/artificial-intelligence-ai-technology-concept.jpg?id=34199573&width=1200&height=800&quality=85&coordinates=84%2C0%2C84%2C0",
      category: "education-technology",
      tags: ["AI", "EdTech", "Digital Learning"],
      authorId: "1",
      publishedAt: new Date("2025-01-10"),
    },
    {
      id: "2",
      title: "Alumni Success Stories: From Classroom to Career",
      slug: "alumni-success-stories-classroom-career",
      excerpt:
        "Inspiring stories of our graduates who have achieved remarkable success.",
      content: `Praesent sit amet tristique ligula, a ultrices elit. Integer vulputate.`,
      featuredImage:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "student-success",
      tags: ["Alumni", "Career", "Success"],
      authorId: "1",
      publishedAt: new Date("2025-01-15"),
    },
  ]);

  const post = posts.find((p) => p.slug === slug);

  const formatDate = (date) => {
    if (!date) return "N/A";
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categoryColors = {
    "education-technology": "bg-yellow-100 text-yellow-800",
    "student-success": "bg-blue-100 text-blue-800",
    "industry-news": "bg-green-100 text-green-800",
    "knowledge-sharing": "bg-purple-100 text-purple-800",
    default: "bg-gray-100 text-gray-800",
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blogs">
            <button className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/blogs">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </button>
          </Link>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-6"
          />
        )}

        {/* Category */}
        <span
          className={`inline-block px-3 py-1 rounded-full mb-3 font-semibold ${
            categoryColors[post.category] || categoryColors.default
          }`}
        >
          {post.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          {post.authorId && (
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>By NiT College</span>
            </div>
          )}
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <div className="text-lg text-gray-700 bg-gray-100 p-6 rounded-lg mb-8 italic">
            {post.excerpt}
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 whitespace-pre-wrap leading-relaxed">
          {post.content}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link to="/blogs">
            <button className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium text-lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
