import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import useGetSettings from "../../hooks/useGetSettings";
import useGetServices from "../../hooks/useGetServices";

function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const { data: services } = useGetServices();
  const { data: settings } = useGetSettings();

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) {
        setShowNavMenu(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 991) {
          setShowNavMenu(false);
        }
      });
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
  }, []);

  const handleLang = () => {
    const currentLang = i18next.language;
    const bodyElement = document.querySelector("body");

    if (currentLang === "en") {
      i18next.changeLanguage("ar");
      bodyElement.classList.remove("en");
      sessionStorage.setItem("lang", "ar");
    } else {
      i18next.changeLanguage("en");
      bodyElement.classList.add("en");
      sessionStorage.setItem("lang", "en");
    }
  };

  return (
    <nav className="header" ref={headerRef}>
      <div className="container d-flex">
        <div className="logo">
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={`nav-links ${showNavMenu ? "show" : ""}`}>
          <ul className="navigations">
            <li className="nav-link active">
              <NavLink to="/">{t("home")}</NavLink>
            </li>
            <li className="nav-link">
              <Dropdown>
                <Dropdown.Toggle
                  as="a"
                  id="dropdownMenuButton1"
                  className="btn nav-link"
                >
                  {t("ourServices")}
                  <i className="fa-regular fa-angle-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {services?.map((service) => (
                    <Dropdown.Item
                      key={service?.id}
                      as={Link}
                      to={`/services/${service.id}`}
                    >
                      {service.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-link">
              <NavLink to="/about">{t("about")}</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/blogs">{t("blogs.title")}</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/works">{t("ourWork")}</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">{t("contactUs")}</NavLink>
            </li>
            <li className="nav-link">
              <Link target="_blank" to={settings?.pdf} download>
                {t("companyFile")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="btns">
          <button className="lang_toggler" onClick={handleLang}>
            English <i className="fa-light fa-globe"></i>
          </button>

          <Link to={`tel:${settings?.phone}`}>
            <i className="fa-light fa-phone"></i>
          </Link>

          <div className="toogler" onClick={toggleNavMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
