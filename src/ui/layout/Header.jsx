import { Link, NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
      if (window.scrollY > 1) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      headerRef.current.classList.add("home_header");
    } else {
      headerRef.current.classList.remove("home_header");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showNavMenu &&
        !event.target.closest(".nav-links") &&
        !event.target.closest(".toogler")
      ) {
        setShowNavMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNavMenu]);

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

  const handleLinkClick = () => {
    setShowNavMenu(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="top_bar">
        <div className="container">
          <div className="contacts">
            <div className="info">
              <Link to={`mailto:${settings?.email}`}>
                <i className="fa-light fa-envelope"></i>
                {settings?.email}
              </Link>

              <Link to={`tel:${settings?.phone}`}>
                <i className="fa-light fa-phone"></i>
                {settings?.phone}
              </Link>
            </div>

            <div className="social">
              <Link to={settings?.facebook} target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to={settings?.instagram} target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to={settings?.twitter} target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to={settings?.linkedin} target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container d-flex align-items-center">
          <div className="logo">
            <Link to="/">
              <img src="/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className={`nav-links ${showNavMenu ? "show" : ""}`}>
            <ul className="navigations">
              <li className="nav-link active">
                <NavLink to="/" onClick={handleLinkClick}>
                  {t("home")}
                </NavLink>
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
                        onClick={handleLinkClick}
                      >
                        {service.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-link">
                <NavLink to="/about" onClick={handleLinkClick}>
                  {t("about")}
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/blogs" onClick={handleLinkClick}>
                  {t("blogs.title")}
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/works" onClick={handleLinkClick}>
                  {t("ourWork")}
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/contact" onClick={handleLinkClick}>
                  {t("contactUs")}
                </NavLink>
              </li>
              <li className="nav-link">
                <Link
                  target="_blank"
                  to={settings?.pdf}
                  download
                  onClick={handleLinkClick}
                >
                  {t("companyFile")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="btns">
            <button className="lang_toggler" onClick={handleLang}>
              {i18next.language === "en" ? "العربية" : "English"} <i className="fa-light fa-globe"></i>
            </button>

            <div className="toogler" onClick={toggleNavMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
