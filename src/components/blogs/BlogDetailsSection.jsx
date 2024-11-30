import { Link } from "react-router-dom";

function BlogDetailsSection() {
  return (
    <section className="blog_details__section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="blog_content">
              <h3>
                الريبراندينج: كل ما تود معرفته عن تجديد هوية العلامة التجارية
              </h3>
              <span>
                <i className="fa-light fa-calendar-days"></i> 03-05-2022
              </span>
              <p>
                {`في مرحلة من مسيرة العلامات التجارية ستحتاج لتجديد هوية العلامة التجارية، أو ما يطلق
                  Rebranding والتي تعني إعادة تشكيل ملامح العلامة التجارية، فهي تعتبر وسيلة للخروج من
                  الصورة النمطية القديمة ومواكبة العصر، لذا تحتاج المؤسسات والعلامات التجارية إلى تغيير
                  هويتها كل ما يقرب من سبع أو عشر سنوات.
                  ويتمثل هذا التغيير في إعادة صياغة كل ما يخص الهوية البصرية من "شعارات، وألوان، والتصوير
                  الفوتوغرافي".. وغيرها، وفي بعض الحالات تتضمن تلك التغييرات تغيير اسم العلامة أو الشركة
                  أيضًا، كل هذا بهدف تطوير هوية العلامة التجارية وجعلها متميزة بين المنافسين راسخة في
                  أذهان المستهلكين`}
              </p>
              <div className="share_blog">
                <h6>مشاركة المدونة:</h6>
                <ul className="social_share">
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-lg-0 mb-4">
            <div className="blog_img">
              <img src="/b1.jpg" alt="blog" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailsSection;
