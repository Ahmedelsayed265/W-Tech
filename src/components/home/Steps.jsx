import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import i18next from "i18next";

function Steps() {
  const { t } = useTranslation();
  const lang = i18next.language;

  const timelineSteps = [
    {
      title: t("steps.sparkOfInnovation"),
      description: t("steps.ideaGeneration"),
      icon: "/idea-generation.webp",
    },
    {
      title: t("steps.blueprintForSuccess"),
      description: t("steps.technicalProposal"),
      icon: "/technical-proposal.webp",
    },
    {
      title: t("steps.architectingDreams"),
      description: t("steps.planningDesign"),
      icon: "/planning-design.webp",
    },
    {
      title: t("steps.bringingToLife"),
      description: t("steps.developmentStart"),
      icon: "/development.webp",
    },
    {
      title: t("steps.qualityGuarantee"),
      description: t("steps.testingQA"),
      icon: "/testing-QA.png",
    },
    {
      title: t("steps.launchingSuccess"),
      description: t("steps.deployment"),
      icon: "/deployment.webp",
    },
    {
      title: t("steps.continuousExcellence"),
      description: t("steps.maintenanceUpdates"),
      icon: "/maintenance-updates.webp",
    },
    {
      title: t("steps.missionAccomplished"),
      description: t("steps.finishingDelivery"),
      icon: "/finishing-delivery.webp",
    },
  ];

  return (
    <section className="steps">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <span className="strip3">
          <img src="/Rect.png" alt="" />
        </span>
        <h3 data-aos="fade-up">{t("steps.title")}</h3>
        <p data-aos="fade-up" className="sub-title">
          {t("steps.subtitle")}
        </p>
      </div>
      <div className="row">
        <div className="col-12 steps-swiper-wrapper">
          <Swiper
            slidesPerView={3}
            speed={1000}
            loop={false}
            spaceBetween={30}
            navigation
            modules={[Navigation]}
            centeredSlides={true}
            pagination={{
              type: "fraction",
            }}
            dir={lang === "ar" ? "rtl" : "ltr"}
            rtl={lang === "ar"}
            key={lang}
            className="steps-swiper"
          >
            {timelineSteps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="step">
                  <div className="image-wrapper">
                    <img src={step.icon} alt={step.description} />
                  </div>
                  <h5>{step.title}</h5>
                  <p className="step-description">{step.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Steps;
