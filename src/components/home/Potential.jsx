import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useTranslation } from "react-i18next";

function Potential() {
  const { t } = useTranslation();

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  return (
    <section className="potential">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-lg-0 mb-4">
            <h2 data-aos="fade-up">
              {t("unleash_potential", { innovation: t("innovation") })}
            </h2>
            <p data-aos="fade-up">{t("discover_power")}</p>
            <div className="lista">
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                {t("innovation")}
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                {t("quality")}
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                {t("collaboration")}
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                {t("customer_focus")}
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                {t("integrity")}
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                {t("speed")}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="video-wrapper" data-aos="zoom-in-up">
              <a
                href="/Placeholder video.mp4"
                data-fancybox="about-us-video"
                className="play-btn"
              >
                <i className="fa-light fa-play"></i>
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Potential;
