export default function WhyChooseUs() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Why OpenFood Explorer?
          </h2>
  
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold">📍 Nearby</h3>
              <p className="text-slate-600 text-sm">
                Find restaurants around your exact location
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold">⭐ Reviews</h3>
              <p className="text-slate-600 text-sm">
                Community-driven ratings and reviews
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold">❤️ Save</h3>
              <p className="text-slate-600 text-sm">
                Bookmark your favorite places
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }