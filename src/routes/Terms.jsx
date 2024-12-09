import useGetSettings from "../hooks/useGetSettings";
import SectionHeader from "../ui/layout/SectionHeader";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  return (
    <>
      <SectionHeader title={t("footer.terms")} />
      <section className="pt-5 pb-5">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: settings?.terms }}
        />
      </section>
    </>
  );
}
