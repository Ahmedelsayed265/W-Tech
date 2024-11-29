import Blogs from "../components/home/Blogs";
import FAQs from "../components/home/FAQs";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import Potential from "../components/home/Potential";
import Services from "../components/home/Services";
import Statics from "../components/home/Statics";

function Home() {
  return (
    <>
      <HeroSection />
      <Statics />
      <Potential />
      <Services />
      <Blogs />
      <FAQs />
      <Features />
    </>
  );
}

export default Home;
