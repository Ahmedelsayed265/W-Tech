import { useState } from "react";
import { Link } from "react-router-dom";
import { dehighlight, highlight } from "../utils/helpers";
import SectionHeader from "../ui/layout/SectionHeader";
import useGetServices from "../hooks/app/useGetServices";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

function Contact() {
  const { data: services } = useGetServices();
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
        toast.success("تم إرسال الرسالة بنجاح");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionHeader title={"تواصل معنا"} />
      <section className="contact">
        <div className="container">
          <div className="form">
            <div className="row">
              <div className="col-lg-4 col-12 mb-lg-0 mb-3">
                <div className="contact_info">
                  <h3>تواصل معنا</h3>
                  <p className="mb-5">
                    اختار من بين باقات وصف الإبتكار لخدمات التصميم والتسويق،
                    وأحصل على الخدمة التي تظهرك بأفضل شكل يترسخ في عقل جمهورك
                    وتميزك بين منافسيك
                  </p>
                  <ul>
                    <li className="field">
                      <div className="icon">
                        <i className="fa-light fa-map-location-dot"></i>
                      </div>
                      <div className="text">
                        <h4>موقعنا : </h4>
                        <p>جدة لمملكة العربية السعودية</p>
                      </div>
                    </li>
                    <li className="field">
                      <div className="icon">
                        <i className="fa-sharp fa-light fa-envelope"></i>
                      </div>
                      <div className="text">
                        <h4>البريد الالكترونى : </h4>
                        <Link to="mailto:info@icit-sa.com">
                          info@icit-sa.com
                        </Link>
                      </div>
                    </li>
                    <li className="field">
                      <div className="icon">
                        <i className="fa-light fa-phone"></i>
                      </div>
                      <div className="text">
                        <h4>الهاتف : </h4>
                        <Link to="tel:+966564741999">+966564741999</Link>
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
                        <i className="fa-light fa-user"></i> اسمك كاملاً
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
                        <i className="fa-light fa-phone"></i> رقم الجوال
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
                        <i className="fa-sharp fa-light fa-pen-nib"></i> الخدمة
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
                        <i className="fa-sharp fa-light fa-pen-nib"></i> نوع
                        التواصل
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
                        <option value="call">تواصل عبر الهاتف</option>
                        <option value="whatsapp">تواصل عبر واتساب</option>
                      </select>
                      <span className="highlight"></span>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="inputfield">
                      <label htmlFor="message" className="message-label">
                        <i className="fa-light fa-feather-pointed"></i> رسالتك
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
                        إرسال{" "}
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
