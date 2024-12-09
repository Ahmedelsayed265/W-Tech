import { Link } from "react-router-dom";
import useGetServices from "../../hooks/useGetServices";
import { useTranslation } from "react-i18next";

function Services() {
  const { data: services } = useGetServices();
  const { t } = useTranslation();

  return (
    <section className="services">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <span className="strip3">
          <img src="/Rect.png" alt="" />
        </span>
        <h3 data-aos="fade-up">{t("services.title")}</h3>
        <p data-aos="fade-up" className="sub-title">
          {t("services.description")}
        </p>
        <div className="row">
          {services?.map((service) => (
            <div
              className="col-lg-3 col-md-6 col-12 p-2"
              key={service?.id}
              data-aos="fade-up"
            >
              <div className="service-card">
                <div className="img">
                  <img src={service?.image} alt="service-image" />
                  <div className="icon">
                    {service?.icon && (
                      <img src={service?.icon} alt={service?.title} />
                    )}
                  </div>
                </div>
                <h4 className="title">{service?.title}</h4>
                <p>{service?.description}</p>
                <Link to={`/services/${service?.id}`} className="service-btn">
                  {t("services.button")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
