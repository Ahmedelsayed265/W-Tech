import { useState } from "react";
import { Link } from "react-router-dom";
import { dehighlight, handleChange, highlight } from "../../utils/helpers";

function Footer() {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contactType: "",
    service: "",
  });

  const toggleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="logo">
              <img src="/logo.svg" alt="" />
            </div>
            <p className="about">
              احدى شركات المؤسسة العالمية الحديثة للإتصالات وتقنية المعلومات
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 column">
            <div className="title">
              <h2>روابط مفيدة</h2>
            </div>
            <ul>
              <li>
                <Link to="/about">من نحن</Link>
              </li>
              <li>
                <Link to="/blogs">المدونة و الاخبار</Link>
              </li>
              <li>
                <Link to="/contact">إتصل بنا</Link>
              </li>
              <li>
                <Link to="/terms">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="/recovery-replacement">
                  سياسة الأستبدال و الأسترجاع
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 column column-2">
            <div className="title">
              <h2>تواصل معنا</h2>
            </div>
            <ul>
              <li>
                <i className="fa-sharp fa-solid fa-envelope"></i>
                <Link to="mailto:sales@ocoda.com">hr@wsf.com</Link>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-envelope"></i>
                <Link to="mailto:sales@ocoda.com">sales@wsf.com</Link>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-phone"></i>
                <Link to="tel:+966564741999">+966564741999</Link>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                <Link to="htttps://wa.me/+966564741999">+966564741999</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 copyrights">
            <p>
              حقوق الطبع والنشر © 2023 جميع الحقوق محفوظة لشركة وصف الإبتكار.
            </p>
            <ul className="social-media">
              <li>
                <Link to="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="floatForm">
        <div className={`formDiv ${openForm ? "active" : ""}`}>
          <img src="/fav.svg" className="logo" alt="" />
          <form action="">
            <div className="inputfield">
              <label htmlFor="name"> اسمك كاملاً</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e, setFormData)}
                onFocus={(e) => highlight(e)}
                onBlur={(e) => dehighlight(e)}
              />
              <span className="highlight"></span>
            </div>

            <div className="inputfield">
              <label htmlFor="phone"> رقم الجوال </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange(e, setFormData)}
                onFocus={(e) => highlight(e)}
                onBlur={(e) => dehighlight(e)}
              />
              <span className="highlight"></span>
            </div>

            <div className="inputfield">
              <label htmlFor="contactType"> نوع التواصل </label>
              <select
                name="contactType"
                id="contactType"
                value={formData.contactType}
                onChange={(e) => handleChange(e, setFormData)}
                onFocus={(e) => highlight(e)}
                onBlur={(e) => dehighlight(e)}
              >
                <option value="" disabled selected></option>
                <option value=""> اتصال </option>
                <option value=""> واتساب </option>
              </select>
              <span className="highlight"></span>
            </div>

            <div className="inputfield">
              <label htmlFor="service"> الخدمة</label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={(e) => handleChange(e, setFormData)}
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
                <option value="خدمات الموشن جرافيك">خدمات الموشن جرافيك</option>
                <option value="خدمات السيو">خدمات السيو</option>
                <option value="تطوير تطبيقات الجوال">
                  تطوير تطبيقات الجوال
                </option>
              </select>
              <span className="highlight"></span>
            </div>

            <button type="submit">
              إرسال <i className="fa-sharp fa-light fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <button className="btn openBtn" onClick={toggleForm}>
          <i className="fa-duotone fa-comments"></i>
        </button>
      </div>

      <Link to="#!" className="floatWhatsapp">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </footer>
  );
}

export default Footer;

{
  /* 
          

            

            

            
            
          </form>
        </div>
        
      </div> */
}
