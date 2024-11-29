import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <Swiper
          slidesPerView={1}
          speed={1000}
          loop={true}
          modules={[EffectFade, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="hero-swiper"
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
                    ثورة في تصميم وتطوير الأعمال <span>بأحدث التقنييات</span>
                  </h1>
                  <p>
                    استفد من إمكانيات شركتك من خلال تصميم مبتكر وتطوير حديث. قم
                    بتحسين أداء أعمالك في عالم الرقمي.
                  </p>
                  <div className="links">
                    <a href="works.html">عرض المشاريع</a>
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
                    حلول متقدمة لدفع نمو مستدام <span>لتجارتك ومشاريعك</span>
                  </h1>
                  <p>
                    استكشف نهجنا الشامل للشركات الصغيرة والكبيرة. ندمج
                    التكنولوجيا بشكل استراتيجي لضمان النجاح والنمو المستدام.
                  </p>
                  <div className="links">
                    <a href="contact.html">طور فكرتك</a>
                    <a href="#!">كيف نعمل</a>
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
                    انضم إلينا في صياغة مستقبل <span>شركتك ونجاحك.</span>
                  </h1>
                  <p>
                    اكتشف الإبداع والتكنولوجيا معًا، حيث نقوم بتحويل أفكارك إلى
                    حقيقة رقمية. في شركة الابداع المتكامل، نعمل جنبًا إلى جنب
                    معك لتصميم وتنفيذ حلول فريدة تتلائم مع رؤيتك وتعزز نجاحك.
                  </p>
                  <div className="links">
                    <a href="works.html">تواصل معنا</a>
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
