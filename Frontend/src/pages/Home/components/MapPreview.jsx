import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapPreview({
  restaurants = [],
  loading = false,
  error = null,
}) {
  return (
    <Section className="bg-slate-50">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Explore on Map
        </h2>

        {/* Loading */}
        {loading && (
          <div className="h-[400px] flex items-center justify-center bg-white rounded-2xl border">
            <p className="text-slate-500">Loading restaurants...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="h-[400px] flex items-center justify-center bg-red-50 rounded-2xl border border-red-200">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && restaurants.length === 0 && (
          <div className="h-[400px] flex items-center justify-center bg-white rounded-2xl border">
            <p className="text-slate-500">
              No restaurants found in this area.
            </p>
          </div>
        )}

        {/* Map */}
        {!loading && !error && restaurants.length > 0 && (
          <div className="h-[400px] rounded-2xl overflow-hidden border shadow-sm">
            <MapContainer
              center={[
                restaurants[0]?.lat || 51.505,
                restaurants[0]?.lng || -0.09,
              ]}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {restaurants.map((restaurant) => {
                if (!restaurant.lat || !restaurant.lng) return null;

                return (
                  <Marker
                    key={restaurant.id}
                    position={[restaurant.lat, restaurant.lng]}
                  >
                    <Popup>
                      <div>
                        <h3 className="font-semibold">{restaurant.name}</h3>
                        <p className="text-sm text-gray-600">
                          {restaurant.cuisine}
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