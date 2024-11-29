import { useState } from "react";
import { handleChange } from "../../utils/helpers";

function Newsletter() {
  const [formData, setFormData] = useState({
    email: "",
  });

  return (
    <section className="news">
      <div className="container">
        <div className="row">
          <div className="col-12 newsletter">
            <h3 data-aos="fade-down">
              احصل على أحدث أخبار التكنولوجيا والأعمال في بريدك الوارد
            </h3>
            <form action="" data-aos="fade-up">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="بريدك الالكتروني"
                value={formData.email}
                onChange={(e) => handleChange(e, setFormData)}
              />
              <button type="submit">إشتراك</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
