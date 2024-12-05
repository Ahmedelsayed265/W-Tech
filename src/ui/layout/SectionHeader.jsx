import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SectionHeader = ({ title }) => {
  const { t } = useTranslation();
  return (
    <section className="section-header">
      <h1>{title}</h1>
      <h6>
        <Link to="/">{t("home")}</Link> / {title}
      </h6>
    </section>
  );
};

export default SectionHeader;
