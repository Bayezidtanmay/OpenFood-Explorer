import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";
import RestaurantCard from "../../../components/restaurant/RestaurantCard";

const restaurants = [
  {
    id: 1,
    name: "Pizza Napoli",
    cuisine: "Italian • Pizza",
    rating: 4.7,
    distance: "1.2 km",
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
  },
  {
    id: 2,
    name: "Sushi Tokyo",
    cuisine: "Japanese • Sushi",
    rating: 4.8,
    distance: "2.1 km",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    id: 3,
    name: "Green Bowl",
    cuisine: "Vegan • Healthy",
    rating: 4.6,
    distance: "0.8 km",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
];

export default function FeaturedRestaurants() {
  return (
    <Section className="bg-white">
      <Container>

        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Featured Restaurants
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>

      </Container>
    </Section>
  );
}