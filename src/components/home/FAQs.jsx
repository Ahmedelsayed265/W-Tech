import { Accordion, Tab, Tabs } from "react-bootstrap";

function FAQs() {
  return (
    <section className="faqs">
      <div className="container">
        <h3 data-aos="fade-up">اسئلة و اجوبة</h3>
        <p data-aos="fade-up" className="sub-title">
          مستعد للمضي قدمًا لتنفيذ أفكارك؟ نحن هنا للمساعدة دائمًا، لذلك دعنا
          نجعل تحقيق تخيلك وأحلامك لواقع بسهولة، اتصل بنا اليوم لاتخاذ الخطوة
          الأولى واحصل على استشارتك المجانية!
        </p>
        <div className="row">
          <div className="col-lg-5 col-12 p-2">
            <img src="/faq.svg" alt="" data-aos="zoom-in-up" />
          </div>
          <div className="col-lg-7 col-12 p-2">
            <Tabs
              defaultActiveKey="services"
              id="uncontrolled-tab-example pills-tab"
              className="nav nav-pills mb-3"
              transition
              role="tablist"
            >
              {/* Services Tab */}
              <Tab eventKey="services" title="خدمات وصف الإبتكار">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header as={"h2"}>
                      كيفية التفاوض أو التعاقد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكننا مناقشة طلبك عبر اتصال أو مكالمة هاتفية أو عبر
                      الواتس اب، وبعد الانتهاء من التفاوض نقوم بتجهيز عرض السعر
                      الفني والمالي وإرساله للتوقيع ثم القيام بعملية التحويل
                      البنكي أو الدفع كاش
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header as={"h2"}>
                      ما هى خدماتكم بالتحديد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      خدمات لتسويق، خدمات تصميم الجرافيك، خدمات الموشن جرافيك،
                      خدمات السوشيال ميديا،خدمات تصميم المواقع، خدمات السيو
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header as={"h2"}>
                      هل لديكم خدمات الطباعة؟
                    </Accordion.Header>
                    <Accordion.Body>
                      في اوكودا لا نقدم خدمات تخص الطباعة ولكننا نقوم بتقديم
                      خدمة تصميمات الطباعة عالية الجودة، فنحن شركة متخصصة في
                      مجال التصميم فقط
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header as={"h2"}>
                      كيف اقوم بطلب خدماتكم عن بعد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكن للعميل الدخول إلى صفحات الخدمات لدينا للتعرف على
                      الأسعار والباقات المخصصة لكل خدمة، ثم يقوم بتحديد الباقة
                      المناسبة له، والقيام بالتواصل معنا عبر رقمنا الموحد أو
                      الواتس اب أو الرسائل الإلكترونية أو عبر ملئ نموذج طلب
                      الخدمة من خلال الموقع بكل سهولة وسنقوم بالمتابعة مع العميل
                      حتى توقيع العقد وبدء العمل عن بعد والمتابعة والتقارير
                      الدورية
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              {/* Payment Tab */}
              <Tab eventKey="payment" title="الدفع والسداد">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header as={"h2"}>
                      كيفية التفاوض أو التعاقد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكننا مناقشة طلبك عبر اتصال أو مكالمة هاتفية أو عبر
                      الواتس اب، وبعد الانتهاء من التفاوض نقوم بتجهيز عرض السعر
                      الفني والمالي وإرساله للتوقيع ثم القيام بعملية التحويل
                      البنكي أو الدفع كاش
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header as={"h2"}>
                      ما هى خدماتكم بالتحديد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      خدمات لتسويق، خدمات تصميم الجرافيك، خدمات الموشن جرافيك،
                      خدمات السوشيال ميديا،خدمات تصميم المواقع، خدمات السيو
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header as={"h2"}>
                      هل لديكم خدمات الطباعة؟
                    </Accordion.Header>
                    <Accordion.Body>
                      في اوكودا لا نقدم خدمات تخص الطباعة ولكننا نقوم بتقديم
                      خدمة تصميمات الطباعة عالية الجودة، فنحن شركة متخصصة في
                      مجال التصميم فقط
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header as={"h2"}>
                      كيف اقوم بطلب خدماتكم عن بعد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكن للعميل الدخول إلى صفحات الخدمات لدينا للتعرف على
                      الأسعار والباقات المخصصة لكل خدمة، ثم يقوم بتحديد الباقة
                      المناسبة له، والقيام بالتواصل معنا عبر رقمنا الموحد أو
                      الواتس اب أو الرسائل الإلكترونية أو عبر ملئ نموذج طلب
                      الخدمة من خلال الموقع بكل سهولة وسنقوم بالمتابعة مع العميل
                      حتى توقيع العقد وبدء العمل عن بعد والمتابعة والتقارير
                      الدورية
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              {/* Edition Tab */}
              <Tab eventKey="edition" title="التعديلات">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header as={"h2"}>
                      كيفية التفاوض أو التعاقد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكننا مناقشة طلبك عبر اتصال أو مكالمة هاتفية أو عبر
                      الواتس اب، وبعد الانتهاء من التفاوض نقوم بتجهيز عرض السعر
                      الفني والمالي وإرساله للتوقيع ثم القيام بعملية التحويل
                      البنكي أو الدفع كاش
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header as={"h2"}>
                      ما هى خدماتكم بالتحديد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      خدمات لتسويق، خدمات تصميم الجرافيك، خدمات الموشن جرافيك،
                      خدمات السوشيال ميديا،خدمات تصميم المواقع، خدمات السيو
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header as={"h2"}>
                      هل لديكم خدمات الطباعة؟
                    </Accordion.Header>
                    <Accordion.Body>
                      في اوكودا لا نقدم خدمات تخص الطباعة ولكننا نقوم بتقديم
                      خدمة تصميمات الطباعة عالية الجودة، فنحن شركة متخصصة في
                      مجال التصميم فقط
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header as={"h2"}>
                      كيف اقوم بطلب خدماتكم عن بعد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكن للعميل الدخول إلى صفحات الخدمات لدينا للتعرف على
                      الأسعار والباقات المخصصة لكل خدمة، ثم يقوم بتحديد الباقة
                      المناسبة له، والقيام بالتواصل معنا عبر رقمنا الموحد أو
                      الواتس اب أو الرسائل الإلكترونية أو عبر ملئ نموذج طلب
                      الخدمة من خلال الموقع بكل سهولة وسنقوم بالمتابعة مع العميل
                      حتى توقيع العقد وبدء العمل عن بعد والمتابعة والتقارير
                      الدورية
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              {/* Support Tab */}
              <Tab eventKey="support" title="الدعم و المتابعه">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header as={"h2"}>
                      كيفية التفاوض أو التعاقد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكننا مناقشة طلبك عبر اتصال أو مكالمة هاتفية أو عبر
                      الواتس اب، وبعد الانتهاء من التفاوض نقوم بتجهيز عرض السعر
                      الفني والمالي وإرساله للتوقيع ثم القيام بعملية التحويل
                      البنكي أو الدفع كاش
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header as={"h2"}>
                      ما هى خدماتكم بالتحديد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      خدمات لتسويق، خدمات تصميم الجرافيك، خدمات الموشن جرافيك،
                      خدمات السوشيال ميديا،خدمات تصميم المواقع، خدمات السيو
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header as={"h2"}>
                      هل لديكم خدمات الطباعة؟
                    </Accordion.Header>
                    <Accordion.Body>
                      في اوكودا لا نقدم خدمات تخص الطباعة ولكننا نقوم بتقديم
                      خدمة تصميمات الطباعة عالية الجودة، فنحن شركة متخصصة في
                      مجال التصميم فقط
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header as={"h2"}>
                      كيف اقوم بطلب خدماتكم عن بعد؟
                    </Accordion.Header>
                    <Accordion.Body>
                      يمكن للعميل الدخول إلى صفحات الخدمات لدينا للتعرف على
                      الأسعار والباقات المخصصة لكل خدمة، ثم يقوم بتحديد الباقة
                      المناسبة له، والقيام بالتواصل معنا عبر رقمنا الموحد أو
                      الواتس اب أو الرسائل الإلكترونية أو عبر ملئ نموذج طلب
                      الخدمة من خلال الموقع بكل سهولة وسنقوم بالمتابعة مع العميل
                      حتى توقيع العقد وبدء العمل عن بعد والمتابعة والتقارير
                      الدورية
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
