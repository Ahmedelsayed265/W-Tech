import { Route, Routes } from "react-router-dom";
import router from "./router";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
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
