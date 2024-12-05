import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useGetBlogDetails from "../../hooks/useGetBlogDetails";

function BlogDetailsSection() {
  const currentPageLink = window.location.href;
  const { t } = useTranslation();
  const { data: blogDetails } = useGetBlogDetails();

  const socialShareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentPageLink}`,
    instagram: `https://www.instagram.com/?url=${currentPageLink}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentPageLink}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${currentPageLink}`,
  };
  return (
    <section className="blog_details__section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="blog_content">
              <h3>{blogDetails?.title}</h3>
              <span>
                <i className="fa-light fa-calendar-days"></i>{" "}
                {blogDetails?.created_at}
              </span>
              <p>{blogDetails?.description}</p>
              <div className="share_blog">
                <h6>{t("share")}:</h6>
                <ul className="social_share">
                  <li>
                    <Link to={socialShareLinks?.facebook}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={socialShareLinks?.instagram}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={socialShareLinks?.twitter}>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={socialShareLinks?.linkedin}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-lg-0 mb-4">
            <div className="blog_img">
              <img src={blogDetails?.image} alt="blog" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailsSection;
