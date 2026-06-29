import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";
import RestaurantCard from "../../../components/restaurant/RestaurantCard";

export default function FeaturedRestaurants({
  restaurants = [],
  loading = false,
}) {
  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Featured Restaurants
        </h2>

        {loading ? (
          <div className="py-10 text-center text-slate-500">
            Loading restaurants...
          </div>
        ) : restaurants.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            No restaurants found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}