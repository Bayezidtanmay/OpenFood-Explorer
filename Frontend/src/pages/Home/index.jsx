import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import MapPreview from "./components/MapPreview";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <MapPreview />
      <WhyChooseUs />
    </>
  );
}