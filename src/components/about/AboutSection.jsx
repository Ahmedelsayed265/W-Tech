import useGetAbout from "../../hooks/useGetAbout";
import DataLoader from "./../../ui/loaders/DataLoader";

function AboutSection() {
  const { data: about, isLoading } = useGetAbout();

  return isLoading ? (
    <DataLoader minHeight="548px" minWidth="100%" />
  ) : (
    <section className="about-wrap">
      <div className="container">
        {about?.map((item, index) =>
          index % 2 === 0 ? (
            <div className="row" key={index}>
              <div className="col-lg-6 col-12">
                <div className="illustiration">
                  <img src={item?.image} alt={item?.title} data-aos="fade-up" />
                </div>
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center ps-lg-5 p-4">
                <div className="about-text">
                  <h2 data-aos="fade-up">{item?.title}</h2>
                  <p data-aos="fade-up">{item?.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row" key={index}>
              <div className="col-lg-6 col-12">
                <div className="illustiration">
                  <img src={item?.image} alt={item?.title} data-aos="fade-up" />
                </div>
              </div>
              <div className="col-lg-6 col-12 pb-lg-0 p-4 d-flex justify-content-center align-items-center">
                <div className="about-text">
                  <h2 data-aos="fade-up">{item?.title}</h2>
                  <p data-aos="fade-up">{item?.description}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default AboutSection;
