import { Link } from "react-router-dom";

function BlogsSection() {
  return (
    <section className="blogs_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 p-lg-3 p-2">
            <div className="blog" data-aos="fade-up">
              <Link to="/blogs/1">
                <div className="blog_image">
                  <img src="/b1.jpg" alt="blog" />
                </div>
                <div className="date">
                  <span className="day">8</span>
                  <span className="month">يناير</span>
                </div>
              </Link>
              <h4>
                <Link to="/blogs/1">
                  الريبراندينج: كل ما تود معرفته عن تجديد هوية العلامة التجارية
                </Link>
              </h4>
              <Link to="/blogs/1" className="read_more">
                إقراء المزيد
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-lg-3 p-2">
            <div className="blog" data-aos="fade-up">
              <Link to="/blogs/1">
                <div className="blog_image">
                  <img src="/b2.jpg" alt="blog" />
                </div>
                <div className="date">
                  <span className="day">17</span>
                  <span className="month">مارس</span>
                </div>
              </Link>
              <h4>
                <Link to="/blogs/1">
                  أثرها عظيم.. كيف يؤثر تصميم سندات لشركتك على نشاطك التجاري؟
                </Link>
              </h4>
              <Link to="/blogs/1" className="read_more">
                إقراء المزيد
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-lg-3 p-2">
            <div className="blog" data-aos="fade-up">
              <Link to="/blogs/1">
                <div className="blog_image">
                  <img src="/b3.jpg" alt="blog" />
                </div>
                <div className="date">
                  <span className="day">23</span>
                  <span className="month">يوليو</span>
                </div>
              </Link>
              <h4>
                <Link to="/blogs/1">
                  أهمية تصميمات سوشيال ميديا لشركتك والطريقة المثالية لتنفيذها
                </Link>
              </h4>
              <Link to="/blogs/1" className="read_more">
                إقراء المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
