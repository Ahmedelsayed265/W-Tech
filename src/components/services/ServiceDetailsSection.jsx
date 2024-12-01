import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ServiceDetailsSection() {
  // Initialize Fancybox on mount
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  return (
    <section className="about_service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <span className="strip2">
                <img src="/Rectangle-5-Copy-3.png" alt="" />
              </span>
              <h1 data-aos="fade-up">خدمات التسويق</h1>
              <h3 data-aos="fade-up">
                أطلق حملاتك الإعلانية الآن بسعر يبدأ من 2000 ريال
              </h3>
              <p data-aos="fade-up">
                خدمات التسويق متعددة والنجاح واحد، فهى تعتبر العنصر الرئيسي الذي
                يساعد المشاريع سواء الكبيرة أو الصغيرة في الوصول لعملائها
                المستهدفين.
              </p>
              <Link data-aos="fade-up" to="/contact">
                إطلبها الأن
              </Link>
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

export default ServiceDetailsSection;
