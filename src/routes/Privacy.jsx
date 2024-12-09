import { useTranslation } from "react-i18next";
import useGetSettings from "../hooks/useGetSettings";
import SectionHeader from "../ui/layout/SectionHeader";

export default function Privacy() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  return (
    <>
      <SectionHeader title={t("footer.privacy")} />
      <section>
        <div
          className="cotainer"
          dangerouslySetInnerHTML={{ __html: settings?.privacy }}
        />
      </section>
    </>
  );
}
