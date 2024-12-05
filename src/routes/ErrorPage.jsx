import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ErrorPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="header-bg"></div>
      <section className="error-section">
        <img src="/error.svg" alt="error image" />
      <h2>{t("error.pageNotFound")}</h2>
      <Link aria-label="Home" to="/" className="backhome">
        <i className="fa-sharp fa-light fa-paper-plane"></i>
        <span>{t("error.goHome")}</span>
        </Link>
      </section>
    </>
  );
}

export default ErrorPage;
