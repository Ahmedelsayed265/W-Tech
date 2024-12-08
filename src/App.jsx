import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import router from "./router";

import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import Preloader from "./ui/loaders/Preloader";

import i18n from "./utils/i18n";
import i18next from "i18next";

import AOS from "aos";
import "aos/dist/aos.css";
import useGetSettings from "./hooks/useGetSettings";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoading: loading } = useGetSettings();
  const location = useLocation();
  const mainRef = useRef(null);
  const language = i18next.language;

  useEffect(() => {
    const body = document.querySelector("body");
    if (language === "ar") {
      body.classList.remove("en");
    } else {
      body.classList.add("en");
    }
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionDivs = section.querySelectorAll("[data-aos]");
      sectionDivs.forEach((div, index) => {
        div.setAttribute("data-aos-delay", (index + 1) * 100);
      });
    });

    AOS.init({
      offset: 20,
      delay: 50,
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => AOS.refresh(), 100);
  }, [location]);

  useEffect(() => {
    if (!isLoading && mainRef.current) {
      if (location.pathname === "/") {
        mainRef.current.classList.add("home_main");
      } else {
        mainRef.current.classList.remove("home_main");
      }
    }
  }, [isLoading, location.pathname, mainRef]);

  return isLoading || loading ? (
    <Preloader />
  ) : (
    <>
      <Header />
      <main className="content" ref={mainRef}>
        <Routes>
          {router.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
