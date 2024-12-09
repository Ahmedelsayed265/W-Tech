import { useState } from "react";
import { Link } from "react-router-dom";
import { dehighlight, highlight } from "../utils/helpers";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/layout/SectionHeader";
import useGetServices from "../hooks/useGetServices";
import axiosInstance from "../utils/axiosInstance";
import useGetSettings from "../hooks/useGetSettings";

function Contact() {
  const { data: services } = useGetServices();
  const { data: settings } = useGetSettings();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service_id: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/send_contact_us", formData);
      if (res.data.code === 200) {
        toast.success(t("contact.success"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionHeader title={t("contact.title")} />
      <section className="contact">
        <div className="container">
          <div className="form">
            <div className="row">
              <div className="col-lg-4 col-12 mb-lg-0 mb-3">
                <div className="contact_info">
                  <h3>{t("contact.title")}</h3>
                  <p className="mb-5">{t("contact.description")}</p>
                  <ul>
                    <li className="field">
                      {settings?.address && (
                        <>
                          <div className="icon">
                            <i className="fa-light fa-map-location-dot"></i>
                          </div>
                          <div className="text">
                            <h4>{t("contact.location.label")}</h4>
                            <p>{settings?.address}</p>
                          </div>
                        </>
                      )}
                    </li>
                    <li className="field">
                      <div className="icon">
                        <i className="fa-sharp fa-light fa-envelope"></i>
                      </div>
                      <div className="text">
                        <h4>{t("contact.email.label")}</h4>
                        <Link to={`mailto:${settings?.email}`}>
                          {settings?.email}
                        </Link>
                      </div>
                    </li>
                    <li className="field">
                      <div className="icon">
                        <i className="fa-light fa-phone"></i>
                      </div>
                      <div className="text">
                        <h4>{t("contact.phone.label")}</h4>
                        <Link to={`tel:${settings?.phone}`}>
                          {settings?.phone}
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="inputfield">
                      <label htmlFor="name">
                        <i className="fa-light fa-user"></i>{" "}
                        {t("contact.form.fullName")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={(e) => highlight(e)}
                        onBlur={(e) => dehighlight(e)}
                      />
                      <span className="highlight"></span>
                    </div>

                    <div className="inputfield">
                      <label htmlFor="phone">
                        <i className="fa-light fa-phone"></i>{" "}
                        {t("contact.form.mobile")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={(e) => highlight(e)}
                        onBlur={(e) => dehighlight(e)}
                      />
                      <span className="highlight"></span>
                    </div>
                  </div>

                  <div className="form-group">
                    {/* field-set */}
                    <div className="inputfield">
                      <label htmlFor="service">
                        <i className="fa-sharp fa-light fa-pen-nib"></i>{" "}
                        {t("contact.form.service")}
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service_id}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service_id: e.target.value,
                          })
                        }
                        onFocus={(e) => highlight(e)}
                        onBlur={(e) => dehighlight(e)}
                      >
                        <option value="" disabled></option>
                        {services?.map((service) => (
                          <option value={service.title} key={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      <span className="highlight"></span>
                    </div>

                    <div className="inputfield">
                      <label htmlFor="type">
                        <i className="fa-sharp fa-light fa-pen-nib"></i>{" "}
                        {t("contact.form.contactType")}
                      </label>
                      <select
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        onFocus={(e) => highlight(e)}
                        onBlur={(e) => dehighlight(e)}
                      >
                        <option value="" disabled></option>
                        <option value="call">
                          {t("contact.form.contactOptions.call")}
                        </option>
                        <option value="whatsapp">
                          {t("contact.form.contactOptions.whatsapp")}
                        </option>
                      </select>
                      <span className="highlight"></span>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="inputfield">
                      <label htmlFor="message" className="message-label">
                        <i className="fa-light fa-feather-pointed"></i>{" "}
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        onFocus={(e) => highlight(e)}
                        onBlur={(e) => dehighlight(e)}
                      ></textarea>
                      <span className="highlight"></span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      <>
                        {t("contact.form.submit")}{" "}
                        <i className="fa-sharp fa-light fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
