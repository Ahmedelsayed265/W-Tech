import { useTranslation } from "react-i18next";
import AboutSection from "../components/about/AboutSection";

import Newsletter from "../components/general/Newsletter";
import SectionHeader from "../ui/layout/SectionHeader";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="header-bg"></div>
      <SectionHeader title={t("about")} />
      <AboutSection />
      <Newsletter />
    </>
  );
}

export default About;
