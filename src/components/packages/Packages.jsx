
function Packages() {
  const packages = [
    {
      name: "الباقة الأساسية",
      price: "1999 ريال",
      duration: "شهر واحد",
      packagesFeatures: [
        { text: "تصميم هوية بصرية كاملة", included: true },
        { text: "تصميم شعار احترافي", included: true },
        { text: "تصميم بطاقات عمل", included: true },
        { text: "تصميم أوراق رسمية", included: true },
        { text: "تصميم ظرف رسائل", included: true },
        { text: "تصميم توقيع بريد إلكتروني", included: true },
        { text: "دليل استخدام الهوية", included: false },
        { text: "تسليم الملفات بصيغ قابلة للتعديل", included: true },
        { text: "تعديلات غير محدودة", included: true },
        { text: "دعم فني 24/7", included: true }
      ]
    },
    {
      name: "الباقة المتقدمة",
      price: "2999 ريال",
      duration: "شهر واحد",
      packagesFeatures: [
        { text: "جميع مميزات الباقة الأساسية", included: true },
        { text: "تصميم منشورات سوشيال ميديا", included: true },
        { text: "تصميم غلاف فيسبوك وتويتر", included: true },
        { text: "تصميم قوالب انستجرام", included: true },
        { text: "تصميم عرض تقديمي", included: true },
        { text: "تصميم فولدر", included: true },
        { text: "تصميم ختم رسمي", included: true },
        { text: "تصميم قرطاسية مكتبية", included: true },
        { text: "تصميم توقيع رقمي", included: true },
        { text: "استشارات تسويقية", included: true }
      ]
    },
    {
      name: "الباقة الاحترافية",
      price: "4999 ريال",
      duration: "شهرين",
      packagesFeatures: [
        { text: "جميع مميزات الباقة المتقدمة", included: true },
        { text: "تصميم موقع إلكتروني", included: true },
        { text: "تصميم تطبيق موبايل", included: true },
        { text: "استراتيجية تسويق رقمي", included: true },
        { text: "إدارة حسابات السوشيال ميديا", included: true },
        { text: "حملات إعلانية مدفوعة", included: true },
        { text: "تقارير شهرية", included: true },
        { text: "تصوير احترافي للمنتجات", included: true },
        { text: "تصميم فيديو موشن جرافيك", included: true },
        { text: "استشارات تطويرية", included: true }
      ]
    }
  ];

  return (
    <section className="packages">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <h3 data-aos="fade-up">الاشتراك</h3>
        <div className="row">
          {packages.map((pkg, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 p-3">
              <div className="package-card" data-aos="fade-up">
                <h4 className="title">{pkg.name}</h4>
                <div className="price">{pkg.price}</div>
                <div className="duration">{pkg.duration}</div>
                <ul className="packagesFeatures">
                  {pkg.packagesFeatures.map((feature, idx) => (
                    <li key={idx}>
                       <span>{feature.text}</span>
                      {feature.included ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-times"></i>
                      )}
                     
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;