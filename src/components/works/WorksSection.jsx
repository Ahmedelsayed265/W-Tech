import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

function WorksSection() {
  return (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Tabs
              defaultActiveKey="all"
              id="uncontrolled-tab-example pills-tab"
              className="nav nav-pills mb-3"
              role="tablist"
              transition
            >
              {/* All Tab */}
              <Tab eventKey="all" title="الكل">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* Marketing Tab */}
              <Tab eventKey="marketing" title="خدمات التسويق">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* Graphics Tab */}
              <Tab eventKey="graphics" title="تصميم جرافيك">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* Web Design Tab */}
              <Tab eventKey="web-design" title="تصميم مواقع">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* Social Media Tab */}
              <Tab eventKey="social-media" title="خدمات السوشيال ميديا">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* Motion Graphics Tab */}
              <Tab eventKey="motion-graphics" title="موشن جرافيك">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* SEO Tab */}
              <Tab eventKey="seo" title="خدمات السيو">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
              {/* Mobile Development Tab */}
              <Tab eventKey="mobile-development" title="تطبيقات موبايل">
                <div className="row filter-wapper">
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro7.jpeg" alt="project" />
                      <div className="layer">
                        <h4>RAGM</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro9.jpeg" alt="project" />
                      <div className="layer">
                        <h4>Solo Q</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro10.png" alt="project" />
                      <div className="layer">
                        <h4>الجوهرة</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro11.png" alt="project" />
                      <div className="layer">
                        <h4>Weekly Test</h4>
                        <p>Mobile DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>وتيين | Wateen</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/pro3.png" alt="project" />
                      <div className="layer">
                        <h4>نحاس وشركاؤه</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item ui-ux">
                    <Link to="/works/1" className="image">
                      <img src="/p-d2.png" alt="project" />
                      <div className="layer">
                        <h4>البيت</h4>
                        <p>UI / UX</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item web-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro4.jpeg" alt="project" />
                      <div className="layer">
                        <h4>نواة الطب</h4>
                        <p>WEB DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro5.png" alt="project" />
                      <div className="layer">
                        <h4>DR CARE</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                  {/* project */}
                  <div className="col-lg-6 col-md-6 col-12 p-3 project-item mobile-development">
                    <Link to="/works/1" className="image">
                      <img src="/pro2.jpeg" alt="project" />
                      <div className="layer">
                        <h4>ديستار ماركتار</h4>
                        <p>MOBILE DEVELOPMENT</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab>
            </Tabs>
            {/* <div className="row justify-content-center load-more">
              <span className="load-btn">Load More</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
