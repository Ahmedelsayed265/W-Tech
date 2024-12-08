import { useTranslation } from "react-i18next";
import useGetServices from "../../hooks/useGetServices";

function WhatWeOffer() {
  const { t } = useTranslation();
  const { data: services } = useGetServices();
  return (
    <section className="whatWeoffer services">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <span className="strip3">
          <img src="/Rect.png" alt="" />
        </span>
        <h3 data-aos="fade-up">{t("whatWeOfferTitle")}</h3>
        <div className="row">
          {services?.map((service) => (
            <div
              className="col-lg-3 col-md-6 col-12 p-2"
              key={service?.id}
              data-aos="fade-up"
            >
              <div className="service-card">
                <div className="img">
                  <img src="/b1.jpg" alt="service-image" />
                  <div className="icon">
                    <img src={service?.image} alt={service?.title} />
                  </div>
                </div>
                <h4 className="title">{service?.title}</h4>
                <p>{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
