import axios from "axios";

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

const categoryMap = {
  Pizza: "pizza",
  Sushi: "sushi",
  Coffee: "cafe",
  Burger: "burger",
  Vegan: "vegan",
  Asian: "asian",
  BBQ: "barbecue",
  Dessert: "dessert",
  "Fast Food": "fast_food",
};

const buildQuery = ({ lat, lng, radius, category }) => {
  const cuisine = categoryMap[category];

  return `
    [out:json];
    (
      node["amenity"="restaurant"](around:${radius},${lat},${lng});
      node["amenity"="cafe"](around:${radius},${lat},${lng});
      node["amenity"="fast_food"](around:${radius},${lat},${lng});
    );
    out body;
  `;
};

export const fetchRestaurants = async ({
  lat = 51.505,
  lng = -0.09,
  radius = 1000,
  category = null,
}) => {
  try {
    const query = buildQuery({ lat, lng, radius, category });

    const response = await axios.post(OVERPASS_URL, query, {
      headers: {
        "Content-Type": "text/plain",
      },
    });

    return response.data.elements.map((el) => ({
      id: el.id,
      name: el.tags?.name || "Unnamed Place",
      lat: el.lat,
      lng: el.lon,
      cuisine: el.tags?.cuisine || "Restaurant",
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};