import AboutSection from "../components/about/AboutSection";
import Features from "../components/general/Features";
import Newsletter from "../components/general/Newsletter";
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
