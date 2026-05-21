import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      sessionStorage.removeItem("scrollTo");
      // Wait for page to render then scroll to the element
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

export const RootLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

export default ScrollToTop;
