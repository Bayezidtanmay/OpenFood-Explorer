import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function Hero() {
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
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Search restaurants, cuisine, or location..."
            />

            <Button className="sm:w-auto w-full">
              Search
            </Button>
          </div>

          {/* Quick tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Pizza", "Sushi", "Coffee", "Burger", "Halal", "Vegan"].map(
              (item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-white border rounded-full text-sm text-slate-600"
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