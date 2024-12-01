function WhatWeOffer() {
  return (
    <section className="whatWeoffer services">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <span className="strip3">
          <img src="/Rect.png" alt="" />
        </span>
        <h3 data-aos="fade-up">ماذا نقدم لك فى خدمات التسويق</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 p-3">
            <div className="service-card" data-aos="fade-up">
              <div className="icon">
                <img src="/marketing.svg" alt="ui/ux" />
              </div>
              <h4 className="title">إدارة الحملات الإعلانية</h4>
              <p>
                خدمات التسويق متعددة والنجاح واحد، فهى تعتبر العنصر الرئيسي الذي
                يساعد المشاريع سواء الكبيرة أو الصغيرة في الوصول لعملائها
                المستهدفين.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3">
            <div className="service-card" data-aos="fade-up">
              <div className="icon">
                <img src="/grahics.svg" alt="ai" />
              </div>
              <h4 className="title">الرد ومتابعة العملاء </h4>
              <p>
                نقدم خدمة تصميم جرافيك عالية الجودة بمختلف الصيغ، بتمييز وإبداع
                بلا حدود .
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3">
            <div className="service-card" data-aos="fade-up">
              <div className="icon">
                <img src="/custom.svg" alt="software" />
              </div>
              <h4 className="title">إدارة السوشيال ميديا</h4>
              <p>
                تقدم لك شركة وصف الإبتكار أفضل الحلول والعروض لخدمة تصميم مواقع
                فنحن متخصصين في تصميم جميع أنواع المواقع سواء كانت مواقع شركات
                أو مواقع أشخاص .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
