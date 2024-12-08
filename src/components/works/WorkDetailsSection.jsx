import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useGetProjectDetails from "../../hooks/useGetProjectDetails";
import DataLoader from "../../ui/loaders/DataLoader";

function WorkDetailsSection() {
  const { t } = useTranslation();
  const { data: projectDetails, isLoading } = useGetProjectDetails();
  return isLoading ? (
    <DataLoader minHeight="548px" minWidth="100%" />
  ) : (
    <section className="project-details ">
      <div className="container">
        <div className="row">
          <aside className="col-lg-5 col-12">
            <div className="aside-wrap">
              <h3>{projectDetails?.title}</h3>
              <p>{projectDetails?.description}</p>
              <div className="techs">
                <h6>{t("technologies_used")}</h6>
                <ul>
                  {projectDetails?.skills?.map((tech) => (
                    <li key={tech.id}>{tech.title}</li>
                  ))}
                </ul>
              </div>
              {projectDetails?.web_link && (
                <Link to={projectDetails?.web_link} className="link" target="_blank">
                  {t("live_preview")}
                </Link>
              )}
              <div className="btns">
                {projectDetails?.google_link && (
                  <Link to={projectDetails?.google_link} target="_blank">
                    <img src="/google-play.svg" alt="google-play" />
                  </Link>
                )}
                {projectDetails?.ios_link && (
                  <Link to={projectDetails?.ios_link} target="_blank">
                    <img src="/app-store.svg" alt="app-store" />
                  </Link>
                )}
              </div>
            </div>
          </aside>
          <div className="col-lg-7 col-12">
            <div className="project-images">
              {projectDetails?.images?.map((image) => (
                <img key={image.id} src={image.image} alt="project" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkDetailsSection;
