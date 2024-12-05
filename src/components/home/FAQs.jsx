import { Accordion, Tab, Tabs } from "react-bootstrap";
import useGetFaqs from "../../hooks/useGetFaqs";
import { useTranslation } from "react-i18next";

function FAQs() {
  const { data: faqs } = useGetFaqs();
  const { t } = useTranslation();

  return (
    <section className="faqs">
      <div className="container">
        <h3 data-aos="fade-up">{t("faqs.title")}</h3>
        <p data-aos="fade-up" className="sub-title">
          {t("faqs.subtitle")}
        </p>
        <div className="row">
          <div className="col-lg-5 col-12 p-2">
            <img src="/faq.svg" alt="" data-aos="zoom-in-up" />
          </div>
          <div className="col-lg-7 col-12 p-2">
            <Tabs
              defaultActiveKey={faqs?.[0]?.id}
              id="uncontrolled-tab-example pills-tab"
              className="nav nav-pills mb-3"
              transition
              data-aos="fade-up"
              role="tablist"
            >
              {faqs?.map((faq) => (
                <Tab eventKey={faq?.id} title={faq?.title} key={faq?.id}>
                  <Accordion
                    defaultActiveKey={faq?.faq?.[0]?.id}
                    data-aos="fade-up"
                  >
                    {faq?.faq?.map((faqItem) => (
                      <Accordion.Item eventKey={faqItem?.id} key={faqItem?.id}>
                        <Accordion.Header as={"h2"}>
                          {faqItem?.question}
                        </Accordion.Header>
                        <Accordion.Body>{faqItem?.answer}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
