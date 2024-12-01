import Blogs from "../components/home/Blogs";
import FAQs from "../components/home/FAQs";
import Features from "../components/general/Features";
import HeroSection from "../components/home/HeroSection";
import Newsletter from "../components/general/Newsletter";
import Potential from "../components/home/Potential";
import Services from "../components/home/Services";
import Statics from "../components/home/Statics";
import Steps from "../components/home/Steps";

function Home() {
  return (
    <>
      <HeroSection />
      <Statics />
      <Potential />
      <Services />
      <Steps />
      <Blogs />
      <FAQs />
      <Features />
      <Newsletter />
    </>
  );
}

export default Home;
