import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

const dummyBlogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    category: "DESIGN",
    title: "3 Benefits of Minimalism In Interior Design.",
    date: "JUNE 15, 2018",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    category: "TECHNOLOGY",
    title: "The Future of Web Development in 2026.",
    date: "JANUARY 20, 2026",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop",
    category: "TRAVEL",
    title: "10 Must-Visit Destinations This Summer.",
    date: "MARCH 5, 2025",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    category: "FOOD",
    title: "The Art of Cooking Mediterranean Cuisine.",
    date: "FEBRUARY 12, 2026",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop",
    category: "LIFESTYLE",
    title: "Building Better Habits for Success.",
    date: "NOVEMBER 8, 2025",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    category: "BUSINESS",
    title: "Starting Your Own Business in 2026.",
    date: "JANUARY 15, 2026",
  },
];

export default function MyContain() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="relative w-full h-40 md:h-48 ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=600&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto h-full px-4 flex items-center">
          <div className="text-black">
            <p className="text-xs tracking-[0.35em] uppercase text-black/80">My Space</p>
            <h1 className="text-3xl md:text-4xl font-bold">My Articles</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 mb-10">
          <button
            type="button"
              onClick={() => navigate("/mycontains/createblog")}
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition"
          >
            + Create Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {dummyBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              date={blog.date}
              onClick={() => navigate(`/blog/${blog.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}