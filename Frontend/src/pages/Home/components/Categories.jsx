import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";

const categories = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Coffee", emoji: "☕" },
  { name: "Burger", emoji: "🍔" },
  { name: "Vegan", emoji: "🥗" },
  { name: "Asian", emoji: "🍜" },
  { name: "Dessert", emoji: "🍰" },
  { name: "BBQ", emoji: "🥩" },
  { name: "Fast Food", emoji: "🍗" },
];

export default function Categories() {
  return (
    <Section>
      <Container>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Browse by Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-center p-4 bg-white border rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <span className="mt-2 text-sm text-slate-700 font-medium">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}