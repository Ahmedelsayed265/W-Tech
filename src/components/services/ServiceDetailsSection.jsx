import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGetServiceDetails from "./../../hooks/useGetServiceDetails";

function ServiceDetailsSection() {
  const { data: serviceDetails } = useGetServiceDetails();
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
              <h1 data-aos="fade-up">{serviceDetails?.title}</h1>
              {/* <h3 data-aos="fade-up">
                أطلق حملاتك الإعلانية الآن بسعر يبدأ من 2000 ريال
              </h3> */}
              <p data-aos="fade-up">{serviceDetails?.description}</p>
              <Link data-aos="fade-up" to="/contact">
                إطلبها الأن
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="img">
              <img src={serviceDetails?.image} alt={serviceDetails?.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailsSection;
