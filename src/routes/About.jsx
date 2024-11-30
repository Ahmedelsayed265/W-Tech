import AboutSection from "../components/about/AboutSection";
import Features from "../components/home/Features";
import Newsletter from "../components/home/Newsletter";
import SectionHeader from "../ui/layout/SectionHeader";

function About() {
  return (
    <>
      <SectionHeader title={"من نحن"} />
      <AboutSection />
      <Features />
      <Newsletter />
    </>
  );
}

export default About;
