import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Products } from "./components/sections/Products";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
