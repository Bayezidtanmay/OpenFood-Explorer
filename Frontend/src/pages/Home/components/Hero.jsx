import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useState } from "react";

export default function Hero({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  const handleQuickSearch = (item) => {
    setValue(item);
    onSearch(item);
  };

  return (
    <Section className="bg-gradient-to-b from-orange-50 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            🍽️ OpenFood Explorer
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-slate-600">
            Discover local food experiences, restaurants, cafés and hidden gems near you.
          </p>

          {/* Search Box */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search restaurants, cuisine, or location..."
            />

            <Button className="sm:w-auto w-full" type="submit">
              Search
            </Button>
          </form>

          {/* Quick tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Pizza", "Sushi", "Coffee", "Burger", "Halal", "Vegan"].map(
              (item) => (
                <span
                  key={item}
                  onClick={() => handleQuickSearch(item)}
                  className="cursor-pointer px-3 py-1 bg-white border rounded-full text-sm text-slate-600 hover:bg-slate-100 transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}