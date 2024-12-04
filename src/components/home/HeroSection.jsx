import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroSection() {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container">
        <Swiper
          slidesPerView={1}
          speed={1000}
          loop={true}
          modules={[EffectFade, Autoplay]}
          autoplay={{ delay: 9000, disableOnInteraction: false }}
          className="hero-swiper"
          dir={lang === "ar" ? "rtl" : "ltr"}
          rtl={lang === "ar"}
          key={lang}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6 p-2">
                <div className="headImg">
                  <img src="/developing.svg" alt="" />
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="hero-description">
                  <h1>
                    {t("slider.title1")} <span>{t("slider.hint1")}</span>
                  </h1>
                  <p>{t("slider.text1")}</p>
                  <div className="links">
                    <Link to="/works">{t("works")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6 p-2">
                <div className="headImg">
                  <img src="/ai.svg" alt="" />
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="hero-description">
                  <h1>
                    {t("slider.title2")} <span>{t("slider.hint2")}</span>
                  </h1>
                  <p>{t("slider.text2")}</p>
                  <div className="links">
                    <Link to="/contact">{t("develop")}</Link>
                    <Link to="/about">{t("howWeWork")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6 p-2">
                <div className="headImg">
                  <img src="/Digital.svg" alt="" />
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="hero-description">
                  <h1>
                    {t("slider.title3")} <span>{t("slider.hint3")}</span>
                  </h1>
                  <p>{t("slider.text3")}</p>
                  <div className="links">
                    <Link to="/contact">{t("contactUs")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;
