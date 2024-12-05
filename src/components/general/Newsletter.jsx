import { useState } from "react";
import { useTranslation } from "react-i18next";

function Newsletter() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
  });

  return (
    <section className="news">
      <div className="container">
        <div className="row">
          <div className="col-12 newsletter">
            <h3 data-aos="fade-down">{t("newsletter.title")}</h3>
            <form action="" data-aos="fade-up">
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t("newsletter.emailPlaceholder")}
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <button type="submit">{t("newsletter.subscribe")}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
