import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
        <Navbar />
  <Hero />
  <Categories />
  <FeaturedProducts />
   <Footer />
  <WhatsAppButton />
    </>
  );
}

export default Home;