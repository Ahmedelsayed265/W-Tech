function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="logo">
              <img src="assets/img/logo.svg" alt="" />
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
                <a href="about.html">من نحن</a>
              </li>
              <li>
                <a href="blogs.html">المدونة و الاخبار</a>
              </li>
              <li>
                <a href="contact.html">إتصل بنا</a>
              </li>
              <li>
                <a href="">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="">سياسة الأستبدال و الأسترجاع</a>
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
                <a href="mailto:sales@ocoda.com">hr@wsf.com</a>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-envelope"></i>
                <a href="mailto:sales@ocoda.com">sales@wsf.com</a>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-phone"></i>
                <a href="tel:+966564741999">+966564741999</a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                <a href="htttps://wa.me/+966564741999">+966564741999</a>
              </li>
            </ul>
          </div>
          <div className="col-12 copyrights">
            <p>
              حقوق الطبع والنشر © 2023 جميع الحقوق محفوظة لشركة وصف الإبتكار.
            </p>
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="floatForm">
        <div className="formDiv">
          <img src="assets/img/fav.svg" className="logo" alt="" />
          <form action="">
            <div className="inputfield">
              <label htmlFor="name"> اسمك كاملاً</label>
              <input
                type="text"
                id="name"
                name="name"
                // onFocus="highlight(this)"
                // onBlur="dehighlight(this)"
              />
              <span className="highlight"></span>
            </div>

            <div className="inputfield">
              <label htmlFor="phone"> رقم الجوال </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                // onFocus="highlight(this)"
                // onBlur="dehighlight(this)"
              />
              <span className="highlight"></span>
            </div>

            <div className="inputfield">
              <label htmlFor="contactType"> نوع التواصل </label>
              <select
                name="contactType"
                id="contactType"
                // onFocus="highlight(this)"
                // onBlur="dehighlight(this)"
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
                // onFocus="highlight(this)"
                // onBlur="dehighlight(this)"
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
        <button className="btn openBtn">
          <i className="fa-duotone fa-comments"></i>
        </button>
      </div> */}

      <a href="#!" className="floatWhatsapp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
}

export default Footer;
