import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import useGetSettings from "../../hooks/useGetSettings";

function Statics() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const { data: settings } = useGetSettings();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      intersectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intersectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="statics">
      <div className="container">
        <span className="strip">
          <img src="/Rectangle-5-Copy-5.png" alt="" />
        </span>
        <div className="row" ref={sectionRef}>
          <div className="col-lg-3 col-6 mb-lg-0 mb-3">
            <div className="statics-card" data-aos="fade-up">
              <div className="icon">
                <img src="/experience.svg" alt="icon" />
              </div>
              <h2>
                <span className="num" data-goal="3">
                  {startCount && (
                    <CountUp
                      duration={3}
                      start={0}
                      end={settings?.experience_year}
                    />
                  )}
                </span>
                {t("years_of_experience")}
              </h2>
              <p>{t("work_with_passion")}</p>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-lg-0 mb-3">
            <div className="statics-card" data-aos="fade-up">
              <div className="icon">
                <img src="/clients.svg" alt="icon" />
              </div>
              <h2>
                <span className="num" data-goal="20">
                  {startCount && (
                    <CountUp duration={3} start={0} end={settings?.customers} />
                  )}
                </span>
                {t("clients")}
              </h2>
              <p>{t("our_clients")}</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="statics-card" data-aos="fade-up">
              <div className="icon">
                <img src="/projects.svg" alt="icon" />
              </div>
              <h2>
                <span className="num" data-goal="50">
                  {startCount && <CountUp duration={3} start={0} end={220} />}
                </span>
                {t("projects")}
              </h2>
              <p>{t("successful_completed_projects")}</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="statics-card" data-aos="fade-up">
              <div className="icon">
                <img src="/members.svg" alt="icon" />
              </div>
              <h2>
                <span className="num" data-goal="25">
                  {startCount && (
                    <CountUp
                      duration={3}
                      start={0}
                      end={settings?.developers}
                    />
                  )}
                </span>
                {t("developers")}
              </h2>
              <p>{t("team_of_specialists")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statics;
