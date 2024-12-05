import { useTranslation } from "react-i18next";
import BlogsSection from "../components/blogs/BlogsSection";
import SectionHeader from "../ui/layout/SectionHeader";

function Blogs() {
  const { t } = useTranslation();
  return (
    <>
      <SectionHeader title={t("blogs.title")} />
      <BlogsSection />
    </>
  );
}

export default Blogs;
