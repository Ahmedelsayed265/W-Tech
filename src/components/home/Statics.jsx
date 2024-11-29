import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function Statics() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

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
                  {startCount && <CountUp duration={3} start={0} end={5} />}
                </span>
                سنوات الخبرة
              </h2>
              <p>عمل بشغف</p>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-lg-0 mb-3">
            <div className="statics-card" data-aos="fade-up">
              <div className="icon">
                <img src="/clients.svg" alt="icon" />
              </div>
              <h2>
                <span className="num" data-goal="20">
                  {startCount && <CountUp duration={3} start={0} end={200} />}
                </span>
                عميل
              </h2>
              <p>عملائنا</p>
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
                مشروع
              </h2>
              <p>مشاريع مكتملة ناجحة</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="statics-card" data-aos="fade-up">
              <div className="icon">
                <img src="/members.svg" alt="icon" />
              </div>
              <h2>
                <span className="num" data-goal="25">
                  {startCount && <CountUp duration={3} start={0} end={24} />}
                </span>
                مطور
              </h2>
              <p>فريق من المتخصصين</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statics;
