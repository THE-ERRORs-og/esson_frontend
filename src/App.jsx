import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GalleryModal from "./context/GalleryModal";
import { GalleryProvider } from "./context/GalleryContext";

function App() {
  const loadGumletScript = () => {
    return new Promise(function (resolve, reject) {
      // Checks if the script is already loaded on the page
      if (document.querySelector("script#gumlet-sdk-script")) {
        resolve();
      } else {
        window.GUMLET_CONFIG = {
          hosts: [
            {
              current: "{{essongroup.com}}",
              gumlet: "essongroup.gumlet.io",
            },
          ],
          lazy_load: true,
        };
        // Loads the script and appends it on the page
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/gumlet.js@2.1/dist/gumlet.min.js";
        script.id = "gumlet-sdk-script";
        script.sync = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      }
    });
  };

  useEffect(() => {
    loadGumletScript();
  });
  return (
    <div id="detail" className=" font-custom">
      <GalleryProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <GalleryModal />
        <Footer />
      </GalleryProvider>
    </div>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
