import { useEffect, useState } from "react";
import { fetchRestaurants } from "../services/restaurantService";

export default function useRestaurants({
  category = null,
  search = "",
  lat = 51.505,
  lng = -0.09,
  radius = 1000,
}) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchRestaurants({
        category,
        search,
        lat,
        lng,
        radius,
      });

      setRestaurants(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load restaurants");
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurants();
  }, [category, search, lat, lng, radius]);

  return {
    restaurants,
    loading,
    error,
    refetch: loadRestaurants,
  };
}