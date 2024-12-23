import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { dehighlight, highlight } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import useGetServices from "../../hooks/useGetServices";
import axiosInstance from "../../utils/axiosInstance";
import useGetSettings from "../../hooks/useGetSettings";

function Footer() {
  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);
  const { data: settings } = useGetSettings();
  const { data: services } = useGetServices();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service_id: "",
    type: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) &&
        !event.target.closest(".openBtn")
      ) {
        setOpenForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/send_contact_us", formData);
      if (res.data.code === 200) {
        toast.success(t("footer.form.success"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = (e) => {
    e.stopPropagation();
    setOpenForm((prev) => !prev);
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="logo">
              <img src="/logo.svg" alt="" />
            </div>
            <p className="about">{t("footer.about")}</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 column">
            <div className="title">
              <h2>{t("footer.useful_links")}</h2>
            </div>
            <ul>
              <li>
                <Link to="/about">{t("footer.about_us")}</Link>
              </li>
              <li>
                <Link to="/blogs">{t("footer.blog_news")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contact_us")}</Link>
              </li>
              <li>
                <Link to="/terms">{t("footer.terms")}</Link>
              </li>
              <li>
                <Link to="/privacy">{t("footer.privacy")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 column column-2">
            <div className="title">
              <h2>{t("contactUs")}</h2>
            </div>
            <ul>
              <li>
                <i className="fa-sharp fa-solid fa-envelope"></i>
                <Link to={`mailto:${settings?.email}`}>{settings?.email}</Link>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-phone"></i>
                <Link to={`tel:${settings?.phone}`}>{settings?.phone}</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 copyrights">
            <p>{t("footer.copyright")}</p>
            <ul className="social-media">
              <li>
                {settings?.facebook && (
                  <Link to={settings?.facebook} target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                )}
              </li>
              <li>
                {settings?.instagram && (
                  <Link to={settings?.instagram} target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                )}
              </li>
              <li>
                {settings?.twitter && (
                  <Link to={settings?.twitter} target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                )}
              </li>
              <li>
                {settings?.linkedin && (
                  <Link to={settings?.linkedin} target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="floatForm">
        <div className={`formDiv ${openForm ? "active" : ""}`} ref={formRef}>
          <img src="/fav.svg" className="logo" alt="" />
          <form onSubmit={handleSubmit}>
            <div className="inputfield">
              <label htmlFor="name">
                <i className="fa-light fa-user"></i>{" "}
                {t("footer.form.full_name")}
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
                <i className="fa-light fa-phone"></i> {t("footer.form.phone")}
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

            <div className="inputfield">
              <label htmlFor="type">
                <i className="fa-sharp fa-light fa-pen-nib"></i>{" "}
                {t("footer.form.contact_type")}
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
                  {t("footer.form.contact_by_phone")}
                </option>
                <option value="whatsapp">
                  {t("footer.form.contact_by_whatsapp")}
                </option>
              </select>
              <span className="highlight"></span>
            </div>

            <div className="inputfield">
              <label htmlFor="service">
                <i className="fa-sharp fa-light fa-pen-nib"></i>{" "}
                {t("footer.form.service")}
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

            <button
              type="submit"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <>
                  {t("footer.form.send")}{" "}
                  <i className="fa-sharp fa-light fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
        <button className="btn openBtn" onClick={toggleForm}>
          <i className="fa-duotone fa-comments"></i>
        </button>
      </div>

      {settings?.whatsapp && (
        <Link to={settings?.whatsapp} target="_blank" className="floatWhatsapp">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
      )}
    </footer>
  );
}

export default Footer;
