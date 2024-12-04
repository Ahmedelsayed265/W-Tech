import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features">
      <h2 data-aos="fade-up">{t('features.title')}</h2>
      <p data-aos="fade-up">
        {t('features.description')}
      </p>
      <div className="container">
        <div className="row">
          {/* feature */}
          <div
            className="col-4 p-3 d-flex align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <div className="feature">
              <div className="icon">
                <img src="/creativity.svg" alt="24/7 support" />
              </div>
              <h6 className="title">{t('features.feature1')}</h6>
            </div>
          </div>
          {/* feature */}
          <div
            className="col-4 p-3 d-flex align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <div className="feature">
              <div className="icon">
                <img src="/alone.svg" alt="performance" />
              </div>
              <h6 className="title">{t('features.feature2')}</h6>
            </div>
          </div>
          {/* feature */}
          <div
            className="col-4 p-3 d-flex align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <div className="feature">
              <div className="icon">
                <img src="/prilliance.svg" alt="Security" />
              </div>
              <h6 className="title">{t('features.feature3')}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
