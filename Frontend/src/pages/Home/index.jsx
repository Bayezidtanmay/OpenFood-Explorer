import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import MapPreview from "./components/MapPreview";
import WhyChooseUs from "./components/WhyChooseUs";

import useRestaurantQuery from "../../hooks/useRestaurantQuery";
import useRestaurants from "../../hooks/useRestaurants";

export default function Home() {
  const { query, updateCategory } = useRestaurantQuery();

  const {
    restaurants,
    loading,
    error,
  } = useRestaurants({
    category: query.category,
    search: query.search,
  });

  return (
    <>
      <Hero />

      <Categories onSelectCategory={updateCategory} />

      <FeaturedRestaurants
  restaurants={restaurants}
  loading={loading}
/>

      <MapPreview
        restaurants={restaurants}
        loading={loading}
        error={error}
      />

      <WhyChooseUs />
    </>
  );
}