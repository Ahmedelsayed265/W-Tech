import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import useGetBlogs from "../../hooks/useGetBlogs";
import DataLoader from "../../ui/loaders/DataLoader";

function BlogsSection() {
  const { data: blogs, isLoading } = useGetBlogs();
  const { t } = useTranslation();

  return isLoading ? (
    <DataLoader minHeight="380px" minWidth="100%" />
  ) : (
    <section className="blogs_section">
      <div className="container">
        <div className="row">
          {blogs?.map((blog) => (
            <div className="col-lg-4 col-md-6 col-12 p-lg-3 p-2" key={blog?.id}>
              <div className="blog" data-aos="fade-up">
                <Link to={`/blogs/${blog?.id}`}>
                  <div className="blog_image">
                    <img src={blog?.image} alt={blog?.title} />
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
                <Link to={`/blogs/${blog?.id}`} className="read_more">
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

export default BlogsSection;
