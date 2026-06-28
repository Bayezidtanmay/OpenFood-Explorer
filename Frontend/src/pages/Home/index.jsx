import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import MapPreview from "./components/MapPreview";
import WhyChooseUs from "./components/WhyChooseUs";

import useRestaurantQuery from "../../hooks/useRestaurantQuery";

export default function Home() {
  const { query, updateCategory } = useRestaurantQuery();

  return (
    <>
      <Hero />

      <Categories onSelectCategory={updateCategory} />

      <FeaturedRestaurants category={query.category} />

      <MapPreview category={query.category} />

      <WhyChooseUs />
    </>
  );
}