import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { dehighlight, highlight } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import useGetServices from "../../hooks/useGetServices";

export default function ContactModal({ show, setShow }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const serviceRef = useRef(null);
  const { data: services } = useGetServices();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service_id: id,
    type: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.service_id && serviceRef.current) {
      serviceRef.current.classList.add("h");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

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
    <Modal centered show={show} backdrop="static">
      <Modal.Header onHide={() => setShow(false)} closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="contact modal-contact">
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
            </div>

            <div className="form-group">
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
                <label htmlFor="service" ref={serviceRef}>
                  <i className="fa-sharp fa-light fa-pen-nib"></i>{" "}
                  {t("contact.form.service")}
                </label>
                <select
                  name="service"
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
            </div>

            <div className="form-group">
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
      </Modal.Body>
    </Modal>
  );
}
