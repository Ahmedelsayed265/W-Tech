import { Fancybox } from "@fancyapps/ui";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useGetServiceDetails from "./../../hooks/useGetServiceDetails";
import DataLoader from "../../ui/loaders/DataLoader";
import ContactModal from "../../ui/layout/ContactModal";

function ServiceDetailsSection() {
  const { data: serviceDetails, isLoading } = useGetServiceDetails();
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  return isLoading ? (
    <DataLoader minHeight="548px" minWidth="100%" />
  ) : (
    <section className="about_service">
      <div className="container">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <span className="strip2">
                <img src="/Rectangle-5-Copy-3.png" alt="" />
              </span>
              <h1 data-aos="fade-up">{serviceDetails?.title}</h1>

              <p data-aos="fade-up">{serviceDetails?.description}</p>
              <div data-aos="fade-up">
                <button onClick={() => setShow(true)}>{t("order_now")}</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="img">
              <img src={serviceDetails?.image} alt={serviceDetails?.title} />
            </div>
          </div>
        </div>
      </div>
      <ContactModal show={show} setShow={setShow} />
    </section>
  );
}

export default ServiceDetailsSection;
