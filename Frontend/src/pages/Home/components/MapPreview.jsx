import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const restaurants = [
  {
    id: 1,
    name: "Pizza Napoli",
    position: [51.505, -0.09],
  },
  {
    id: 2,
    name: "Sushi Tokyo",
    position: [51.51, -0.1],
  },
  {
    id: 3,
    name: "Green Bowl",
    position: [51.51, -0.08],
  },
];

export default function MapPreview() {
  return (
    <Section className="bg-slate-50">
      <Container>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Explore on Map
        </h2>

        <div className="h-[400px] rounded-2xl overflow-hidden border shadow-sm">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {restaurants.map((r) => (
              <Marker key={r.id} position={r.position}>
                <Popup>{r.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </Container>
    </Section>
  );
}