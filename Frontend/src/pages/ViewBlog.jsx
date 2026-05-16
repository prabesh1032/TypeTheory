import { Link } from "react-router-dom";

export default function ViewBlog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
          Technology
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Designing Calm: Minimal Spaces for Loud Times
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>May 06, 2026</span>
          <span>·</span>
          <span>7 min read</span>
        </div>

        {/* Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-10 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=900&fit=crop"
            alt="Blog cover"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>

        {/* Description */}
        <div className="text-gray-700 leading-8 text-lg space-y-6">
          <p>
            Minimal design is not empty design. It is clarity. It is the space
            where your morning coffee tastes richer because the counter is not
            fighting for attention. Start by choosing one surface in your home
            to be calm, then expand from there.
          </p>
          <p>
            The foundation is light. Use layered light sources: one soft
            overhead, one directional task light, and one ambient glow. Keep
            the palette warm and natural to avoid cold, sterile rooms that feel
            unwelcoming despite their tidiness.
          </p>
          <p>
            Finally, select objects that have a story. A chair you love, a
            ceramic bowl from a trip, a book you return to. A small collection
            beats a crowded shelf every time.
          </p>
        </div>

      </article>
    </div>
  );
}