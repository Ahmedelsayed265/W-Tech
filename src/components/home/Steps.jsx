import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/effect-fade";

function Steps() {
  const timelineSteps = [
    { description: "فكرة المشروع", icon: "/idea-generation.webp" },
    { description: "العرض الفني", icon: "/technical-proposal.webp" },
    { description: "تخطيط وتصميم", icon: "/planning-design.webp" },
    { description: "بدء التطوير", icon: "/development.webp" },
    { description: "اختبار وضمان الجودة", icon: "/testing-QA.png" },
    { description: "النشر", icon: "/deployment.webp" },
    { description: "الصيانة والتحديثات", icon: "/maintenance-updates.webp" },
    { description: "الانتهاء والتسليم", icon: "/finishing-delivery.webp" },
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
        <h3 data-aos="fade-up">خطوات العمل</h3>
        <p data-aos="fade-up" className="sub-title">
          نحن نرسم خطوات تطوير البرمجيات الخاصة بك بعناية فائقة، من الفكرة وحتى
          تحقيق النجاح الكامل.
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
            className="steps-swiper"
          >
            {timelineSteps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="step">
                  <div className="image-wrapper">
                    <img src={step.icon} alt={step.description} />
                  </div>
                  <h5>الخطوة {index + 1}</h5>
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
