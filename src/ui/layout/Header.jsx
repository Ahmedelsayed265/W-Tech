import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false);

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

  return (
    <nav className="header">
      <div className="container d-flex">
        <div className="logo">
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={`nav-links ${showNavMenu ? "show" : ""}`}>
          <ul className="navigations">
            <li className="nav-link active">
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            <li className="nav-link">
              <Dropdown>
                <Dropdown.Toggle
                  as="a"
                  id="dropdownMenuButton1"
                  className="btn nav-link"
                >
                  خدماتنا <i className="fa-regular fa-angle-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="a" href="/marketing-service">
                    خدمات التسويق
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/marketing-service">
                    تصميم جرافيك
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/marketing-service">
                    تصميم مواقع
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/marketing-service">
                    خدمات السوشيال ميديا
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/marketing-service">
                    خدمات الموشن جرافيك
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/marketing-service">
                    خدمات السيو
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/marketing-service">
                    تطبيقات الجوال
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-link">
              <NavLink to="/about">من نحن</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/blogs">المدونة</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/works">أعمالنا</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">إتصل بنا</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/company-profile">ملف الشركة</NavLink>
            </li>
          </ul>
        </div>
        <div className="btns">
          <button className="lang_toggler">
            English <i className="fa-light fa-globe"></i>
          </button>
          <a href="tel:+966555555555">
            <i className="fa-light fa-phone"></i>
          </a>
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
