import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useGetProjects from "../../hooks/useGetProjects";
import useGetProjectsCategories from "../../hooks/useGetProjectsCategories";
import DataLoader from "../../ui/loaders/DataLoader";

function WorksSection() {
  const { t } = useTranslation();
  const { data: projects, isLoading: projectsLoading } = useGetProjects();
  const { data: categories, isLoading: categoriesLoading } =
    useGetProjectsCategories();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    setSelectedCategory(category);
  }, [searchParams]);

  return projectsLoading && categoriesLoading ? (
    <DataLoader minHeight="548px" minWidth="100%" />
  ) : (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="nav">
              <div
                onClick={() => {
                  setSearchParams({});
                }}
                className={`filter-btn ${!selectedCategory ? "active" : ""}`}
              >
                {t("all")}
              </div>
              {categories?.map((cat) => (
                <div
                  onClick={() => {
                    setSearchParams({ category: cat.id });
                  }}
                  key={cat.id}
                  className={`filter-btn ${
                    +selectedCategory === cat.id ? "active" : ""
                  }`}
                >
                  {cat.title}
                </div>
              ))}
            </div>
          </div>
          {projectsLoading ? (
            <DataLoader minHeight="148px" minWidth="100%" />
          ) : (
            <>
              {projects?.map((project) => (
                <div className="col-lg-6 col-md-6 col-12 p-2" key={project.id}>
                  <div className="project-item">
                    <Link to={`/works/${project.id}`} className="image">
                      <img src={project?.images?.[0]?.image} alt="project" />
                      <div className="layer">
                        <h4>{project?.title}</h4>
                        <p>
                          {
                            categories?.find(
                              (cat) => cat.id === project?.category_id
                            )?.title
                          }
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
