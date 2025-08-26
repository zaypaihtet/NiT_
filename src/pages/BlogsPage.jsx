import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowLeft, ArrowRight } from "lucide-react";

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "education-technology", label: "Education Technology" },
    { value: "student-success", label: "Student Success" },
    { value: "industry-news", label: "Industry News" },
    { value: "knowledge-sharing", label: "Knowledge Sharing" },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "The Future of Education: AI and Digital Learning",
      slug: "future-education-ai-digital-learning",
      excerpt:
        "Explore how AI and digital platforms are transforming the educational landscape.",
      category: "education-technology",
      image:
        "https://www.workitdaily.com/media-library/artificial-intelligence-ai-technology-concept.jpg?id=34199573&width=1200&height=800&quality=85&coordinates=84%2C0%2C84%2C0",
    },
    {
      id: "2",
      title: "Alumni Success Stories: From Classroom to Career",
      slug: "alumni-success-stories-classroom-career",
      excerpt:
        "Inspiring stories of our graduates who have achieved remarkable success.",
      category: "student-success",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      id: "3",
      title: "New Industry Partnerships Enhance Learning",
      slug: "industry-partnerships-enhance-learning",
      excerpt:
        "Learn about our recent partnerships with leading companies providing real-world experience.",
      category: "industry-news",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      id: "4",
      title: "Essential Skills for the Modern Workplace",
      slug: "essential-skills-modern-workplace",
      excerpt:
        "Discover the key skills employers are looking for and how our programs prepare students.",
      category: "knowledge-sharing",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryColors = {
    "education-technology": "bg-yellow-100 text-yellow-800",
    "student-success": "bg-blue-100 text-blue-800",
    "industry-news": "bg-green-100 text-green-800",
    "knowledge-sharing": "bg-purple-100 text-purple-800",
    default: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Latest News & Knowledge
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest educational insights, industry trends, and student achievements
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No articles found.
            </p>
          ) : (
            filteredPosts.map((post) => (
              <div key={post.id}  className="bg-white rounded-xl shadow hover:shadow-xl transition-transform  duration-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full mb-2 font-semibold ${
                      categoryColors[post.category] || categoryColors.default
                    }`}
                  >
                    {post.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="text-blue-950 hover:text-amber-600 flex items-center gap-2 font-medium hover:underline"
                  >
                    Read More <ArrowRight />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
