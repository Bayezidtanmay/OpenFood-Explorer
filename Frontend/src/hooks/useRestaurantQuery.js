import { useState } from "react";

export default function useRestaurantQuery() {
  const [query, setQuery] = useState({
    category: null,
    search: "",
  });

  const updateCategory = (category) => {
    setQuery((prev) => ({
      ...prev,
      category,
    }));
  };

  const updateSearch = (search) => {
    setQuery((prev) => ({
      ...prev,
      search,
    }));
  };

  const resetQuery = () => {
    setQuery({
      category: null,
      search: "",
    });
  };

  return {
    query,
    updateCategory,
    updateSearch,
    resetQuery,
  };
}