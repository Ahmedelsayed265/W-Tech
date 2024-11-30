

function Features() {
  return (
    <section className="features">
            <h2 data-aos="fade-up">لماذا نحن ؟</h2>
            <p data-aos="fade-up">
                نقدم مجموعة من حلول التصميم والتسويق المبتكرة، فنحن نرسم خطة كاملة تمتلئ بالإبداع والتخطيط المثالي، حيث
                نبدأ معك الطريق من خطوة البحث عن فكرة، مرورًا بمرحلة الدراسة والتخطيط، انتهاء بمرحلة التنفيذ واللمسات
                الأخيرة
            </p>
            <div className="container">
                <div className="row">
                    {/* feature */}
                    <div className="col-4 p-3 d-flex align-items-center justify-content-center" data-aos="fade-up">
                        <div className="feature">
                            <div className="icon">
                                <img src="/creativity.svg" alt="24/7 support" />
                            </div>
                            <h6 className="title">نبدع</h6>
                        </div>
                    </div>
                    {/* feature */}
                    <div className="col-4 p-3 d-flex align-items-center justify-content-center" data-aos="fade-up">
                        <div className="feature">
                            <div className="icon">
                                <img src="/alone.svg" alt="performance" />
                            </div>
                            <h6 className="title">ننفرد</h6>
                        </div>
                    </div>
                    {/* feature */}
                    <div className="col-4 p-3 d-flex align-items-center justify-content-center" data-aos="fade-up">
                        <div className="feature">
                            <div className="icon">
                                <img src="/prilliance.svg" alt="Security" />
                            </div>
                            <h6 className="title">نتميز</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Features