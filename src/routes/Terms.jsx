import useGetSettings from "../hooks/useGetSettings";
import SectionHeader from "../ui/layout/SectionHeader";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  return (
    <>
      <SectionHeader title={t("footer.terms")} />
      <section>
        <div
          className="cotainer"
          dangerouslySetInnerHTML={{ __html: settings?.terms }}
        />
      </section>
    </>
  );
}
