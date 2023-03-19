import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import '../styles/global.css'
import { useEffect } from "react";
import ScrollToTop from "../components/common/ScrollTop";
import Alert from "../components/common/Alert";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StateContextProvider } from "../context/index";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  // aos animation activation

  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  return (
    <Provider store={store}>
       <StateContextProvider>
      <div className="page-wrapper">
        <Component {...pageProps} />

        <Alert/>

        {/* Toastify */}
        <ToastContainer
          position="bottom-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* <!-- Scroll To Top --> */}
        <ScrollToTop />
      </div>
      </StateContextProvider>
    </Provider>
  );
}

export default MyApp;
