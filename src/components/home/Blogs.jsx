import { Link } from "react-router-dom";
import useGetBlogs from "../../hooks/useGetBlogs";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../utils/helpers";

function Blogs() {
  const { data: blogs } = useGetBlogs();
  const { t } = useTranslation();

  return (
    <section className="blogs">
      <div className="container">
        <h3 data-aos="fade-up">{t("blogs.title")}</h3>
        <p data-aos="fade-up" className="sub-title">
          {t("blogs.subtitle")}
        </p>
        <div className="row">
          {blogs?.map((blog) => (
            <div className="col-lg-4 col-md-6 col-12 p-lg-3 p-2" key={blog?.id}>
              <div className="blog" data-aos="fade-up">
                <Link to="blogs/1">
                  <div className="blog_image">
                    <img src={blog?.image} alt="blog" />
                  </div>
                  <div className="date">
                    <span className="day">
                      {formatDate(blog?.created_at).day}
                    </span>
                    <span className="month">
                      {formatDate(blog?.created_at).month}
                    </span>
                  </div>
                </Link>
                <h4>
                  <Link to={`/blogs/${blog?.id}`}>{blog?.title}</Link>
                </h4>
                <p>{blog?.description}</p>
                <Link to="blogs/1" className="read_more">
                  {t("blogs.readMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
