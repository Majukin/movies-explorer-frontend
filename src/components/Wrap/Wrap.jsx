import { useLocation } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const Wrap = ({ children, header = true, footer = true }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {header && <Header />}
      {children}
      {path !== "/profile" && footer && <Footer />}
    </>
  );
};

export default Wrap;
