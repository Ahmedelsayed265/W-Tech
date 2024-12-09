import { useTranslation } from "react-i18next";
import useGetSettings from "../hooks/useGetSettings";
import SectionHeader from "../ui/layout/SectionHeader";

export default function Privacy() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  return (
    <>
      <SectionHeader title={t("footer.privacy")} />
      <section className="pt-5 pb-5">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: settings?.privacy }}
        />
      </section>
    </>
  );
}
