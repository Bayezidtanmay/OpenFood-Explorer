import { useEffect, useState } from "react";
import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchRestaurants } from "../../../services/restaurantService";

export default function MapPreview({ category = null, search = "" }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchRestaurants({
          category,
          search,
        });

        setRestaurants(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load restaurants");
        setRestaurants([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [category, search]);

  return (
    <Section className="bg-slate-50">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Explore on Map
        </h2>

        {/* LOADING */}
        {loading && (
          <div className="h-[400px] flex items-center justify-center bg-white rounded-2xl border">
            <p className="text-slate-500">Loading restaurants...</p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="h-[400px] flex items-center justify-center bg-red-50 rounded-2xl border border-red-200">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && restaurants.length === 0 && (
          <div className="h-[400px] flex items-center justify-center bg-white rounded-2xl border">
            <p className="text-slate-500">
              No restaurants found in this area
            </p>
          </div>
        )}

        {/* MAP */}
        {!loading && !error && restaurants.length > 0 && (
          <div className="h-[400px] rounded-2xl overflow-hidden border shadow-sm">
            <MapContainer
              center={[
                restaurants[0]?.lat || 51.505,
                restaurants[0]?.lng || -0.09,
              ]}
              zoom={13}
              className="h-full w-full"
              key={`${category}-${search}`} // forces clean re-render on filter change
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {restaurants.map((r) => {
                if (!r.lat || !r.lng) return null;

                return (
                  <Marker key={r.id} position={[r.lat, r.lng]}>
                    <Popup>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{r.name}</h3>
                        <p className="text-sm text-gray-600">
                          {r.cuisine}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        )}
      </Container>
    </Section>
  );
}