import { Link } from "react-router-dom";

function WorkDetailsSection() {
  return (
    <section className="project-details ">
      <div className="container">
        <div className="row">
          <aside className="col-lg-5 col-12">
            <div className="aside-wrap">
              <h3>Taxi Booking App</h3>
              <p>
                منصة مركز التسوق للحصول على معلومات المحلات التجارية والترقيات.
                تم التنفيذ بناءً على التصميم المقدم نيابة عن JU: Agencja. استخدم
                WordPress كنظام إدارة محتوى (CMS) مع موضوع تم إنشاؤه من الصفر.
              </p>
              <div className="techs">
                <h6>Technologies Used</h6>
                <ul>
                  <li>Flutter</li>
                  <li>Dart</li>
                  <li>Firebase</li>
                  <li>Google Maps API</li>
                  <li>Cotlin</li>
                  <li>Java</li>
                </ul>
              </div>
              <Link to="#" className="link">
                Live Preview <i className="fa-light fa-arrow-up-right"></i>
              </Link>
              <div className="btns">
                <Link to="#">
                  <img src="/google-play.svg" alt="google-play" />
                </Link>
                <Link to="#">
                  <img src="/app-store.svg" alt="app-store" />
                </Link>
              </div>
            </div>
          </aside>
          <main className="col-lg-7 col-12">
            <div className="project-images">
              <img src="/p-d2.png" alt="project" />
              <img src="/p-d.jpeg" alt="project" />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default WorkDetailsSection;
