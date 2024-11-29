import { Route, Routes } from "react-router-dom";
import router from "./router";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import { useEffect, useState } from "react";
import Preloader from "./ui/loaders/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
