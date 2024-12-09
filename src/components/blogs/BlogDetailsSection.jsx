import { useTranslation } from "react-i18next";
import useGetBlogDetails from "../../hooks/useGetBlogDetails";
import DataLoader from "../../ui/loaders/DataLoader";

function BlogDetailsSection() {
  const { t } = useTranslation();
  const { data: blogDetails, isLoading } = useGetBlogDetails();

  const calculateDate = (createdAt) => {
    const createdDate = new Date(createdAt);
    const dd = String(createdDate.getDate()).padStart(2, "0");
    const mm = String(createdDate.getMonth() + 1).padStart(2, "0");
    const yyyy = createdDate.getFullYear();
    return `${dd} / ${mm} / ${yyyy}`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: blogDetails?.title,
          text: blogDetails?.description,
          url: window.location.href,
        })
        .then(() => t("Shared successfully"))
        .catch((error) => t("Error sharing:", error));
    } else {
      alert(t("share_not_supported"));
    }
  };

  return isLoading ? (
    <DataLoader minHeight="380px" minWidth="100%" />
  ) : (
    <section className="blog_details__section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="blog_content">
              <h3>{blogDetails?.title}</h3>
              <span>
                <i className="fa-light fa-calendar-days"></i>{" "}
                {calculateDate(blogDetails?.created_at)}
              </span>
              <p>{blogDetails?.description}</p>
              <div className="share_blog">
                <h6>{t("share")}:</h6>
                <button onClick={handleShare}>
                  <i className="fa-light fa-share-nodes"></i>
                </button>
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
