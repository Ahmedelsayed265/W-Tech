import { useTranslation } from "react-i18next";
import AboutSection from "../components/about/AboutSection";
// import Features from "../components/general/Features";
import Newsletter from "../components/general/Newsletter";
import SectionHeader from "../ui/layout/SectionHeader";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="header-bg"></div>
      <SectionHeader title={t("about")} />
      <AboutSection />
      {/* <Features /> */}
      <Newsletter />
    </>
  );
}

export default About;
