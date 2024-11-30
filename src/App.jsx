import { Route, Routes } from "react-router-dom";
import router from "./router";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import { useEffect, useState } from "react";
import Preloader from "./ui/loaders/Preloader";
import { useSelector } from "react-redux";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    sessionStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
  }, [lang]);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });

    return () => {
      window.removeEventListener("load", () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
    };
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Header />
      <main className="content">
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
