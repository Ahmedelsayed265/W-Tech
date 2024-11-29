import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

function Potential() {
  // Initialize Fancybox on mount
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  return (
    <section className="potential">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-lg-0 mb-4">
            <h2 data-aos="fade-up">
              أطلق العنان لإمكانيات عملك مع <span>وصف الإبتكار</span>.
            </h2>
            <p data-aos="fade-up">
              اكتشف القوة التحويلية للحلول البرمجية المبتكرة المصممة خصيصًا
              لتلبية احتياجات عملك الفريدة. يلتزم فريقنا المتخصص من الخبراء في
              الابداع المتكامل لتقنية المعلومات بإطلاق العنان للإمكانات الحقيقية
              لأعمالك. اكتشف مستقبل تحسين الأعمال من خلال خدماتنا البرمجية
              الشاملة.
            </p>
            <div className=" lista">
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                الابتكار
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                الجوة
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                التعاون
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                التمحور حول العملاء
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                النزاهة
              </p>
              <p data-aos="fade-up">
                <img src="/about-feature-vec.svg" alt="icon" />
                السرعة
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
