import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import MapPreview from "./components/MapPreview";
import WhyChooseUs from "./components/WhyChooseUs";

import useRestaurantQuery from "../../hooks/useRestaurantQuery";
import useRestaurants from "../../hooks/useRestaurants";

export default function Home() {
  const { query, updateCategory, updateSearch } = useRestaurantQuery();

  const { restaurants, loading, error } = useRestaurants({
    category: query.category,
    search: query.search,
  });

  return (
    <>
      {/* HERO → now connected to search */}
      <Hero onSearch={updateSearch} />

      {/* CATEGORY FILTER */}
      <Categories onSelectCategory={updateCategory} />

      {/* FEATURED LIST */}
      <FeaturedRestaurants
        restaurants={restaurants}
        loading={loading}
      />

      {/* MAP */}
      <MapPreview
        restaurants={restaurants}
        loading={loading}
        error={error}
      />

      {/* INFO SECTION */}
      <WhyChooseUs />
    </>
  );
}