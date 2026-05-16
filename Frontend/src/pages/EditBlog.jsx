import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const categories = [
  "Design",
  "Technology",
  "Travel",
  "Food",
  "Lifestyle",
  "Business",
];

export default function EditBlog() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "Technology",
      title: "The Future of Web Development in 2026.",
      description:
        "This is a static edit page. Replace this with real content later.",
      image: null,
    },
  });

  const onSubmit = (data) => {
    console.log("Edit blog", data);
    navigate("/mycontains");
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-10">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">My Contains</p>
            <h2 className="text-2xl font-bold text-gray-900">Edit Blog</h2>
          </div>
          <button
            type="button"
            onClick={() => navigate("/mycontains")}
            className="text-sm font-semibold text-gray-500 hover:text-gray-900"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 py-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                {...register("title", { required: "Title is required" })}
                placeholder="Enter blog title"
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              rows={6}
              placeholder="Write your blog description..."
              className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Image</label>
            <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center">
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                onChange={handleImageChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2"
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-24 w-36 rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-24 w-36 items-center justify-center rounded-lg border border-dashed border-gray-300 text-xs text-gray-500">
                  Preview
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/mycontains")}
              className="rounded-full border border-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
