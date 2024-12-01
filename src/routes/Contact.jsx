import { dehighlight, highlight } from "../utils/helpers";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="form">
          <div className="row">
            <div className="col-lg-4 col-12 mb-lg-0 mb-3">
              <div className="contact_info">
                <h3>تواصل معنا</h3>
                <p className="mb-5">
                  اختار من بين باقات وصف الإبتكار لخدمات التصميم والتسويق، وأحصل
                  على الخدمة التي تظهرك بأفضل شكل يترسخ في عقل جمهورك وتميزك بين
                  منافسيك
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
                      <a href="mailto:info@icit-sa.com">info@icit-sa.com</a>
                    </div>
                  </li>
                  <li className="field">
                    <div className="icon">
                      <i className="fa-light fa-phone"></i>
                    </div>
                    <div className="text">
                      <h4>الهاتف : </h4>
                      <a href="tel:+966564741999">+966564741999</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <form action="">
                <div className="form-group">
                  {/* field-set */}
                  <div className="inputfield">
                    <label htmlFor="name">
                      <i className="fa-light fa-user"></i> اسمك كاملاً
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    />
                    <span className="highlight"></span>
                  </div>
                  {/* field-set */}
                  <div className="inputfield">
                    <label htmlFor="email">
                      <i className="fa-light fa-envelope"></i> البريد الالكترونى
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    />
                    <span className="highlight"></span>
                  </div>
                </div>
                <div className="form-group">
                  {/* field-set */}
                  <div className="inputfield">
                    <label htmlFor="phone">
                      <i className="fa-light fa-phone"></i> رقم الجوال
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    />
                    <span className="highlight"></span>
                  </div>
                  {/* field-set */}
                  <div className="inputfield">
                    <label htmlFor="service">
                      <i className="fa-sharp fa-light fa-pen-nib"></i>
                      الخدمة
                    </label>
                    <select
                      name="service"
                      id="service"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    >
                      <option value="" disabled selected></option>
                      <option value="تصميم مواقع">تصميم مواقع</option>
                      <option value="تصميم جرافيك">تصميم جرافيك</option>
                      <option value="خدمات التسويق">خدمات التسويق</option>
                      <option value="إدارة صفحات السوشيال ميديا">
                        إدارة صفحات السوشيال ميديا
                      </option>
                      <option value="خدمات الموشن جرافيك">
                        خدمات الموشن جرافيك
                      </option>
                      <option value="خدمات السيو">خدمات السيو</option>
                      <option value="تطوير تطبيقات الجوال">
                        تطوير تطبيقات الجوال
                      </option>
                    </select>
                    <span className="highlight"></span>
                  </div>
                </div>
                <div className="form-group">
                  {/* field-set */}
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
                <button type="submit">
                  إرسال <i className="fa-sharp fa-light fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
