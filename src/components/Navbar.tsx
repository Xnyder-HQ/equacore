import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`ec-nav ${scrolled ? "ec-nav-scrolled" : ""}`}>
        <div className="xui-container xui-d-flex xui-flex-ai-center xui-flex-jc-space-between" style={{ height: "80px" }}>
          <Link to="/" className="xui-d-flex xui-flex-ai-center xui-text-dc-none">
            <img src="/logo-white.svg" alt="EquaCore Digital" className="xui-img-150" />
          </Link>

          <div className="xui-d-none xui-lg-d-flex xui-flex-ai-center xui-grid-gap-[0.25rem]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`ec-nav-link ${isActive(link.href) ? "ec-nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="xui-d-none xui-lg-d-flex xui-flex-ai-center">
            <Link to="/contact" className="ec-btn-primary">
              Get in Touch
            </Link>
          </div>

          <button
            className="xui-d-flex xui-lg-d-none xui-flex-dir-column xui-flex-jc-center xui-grid-gap-[5px] xui-cursor-pointer xui-bg-transparent xui-bdr-s-none xui-p-half"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>
      </nav>

      <div
        className={`ec-mobile-overlay ${mobileOpen ? "ec-mobile-overlay-open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`ec-mobile-menu ${mobileOpen ? "ec-mobile-menu-open" : ""}`}>
        <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-flex-end xui-mb-2">
          <button
            className="xui-bg-transparent xui-bdr-s-none xui-cursor-pointer xui-p-half"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} color="#fff" />
          </button>
        </div>

        <div className="xui-flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`ec-mobile-link ${isActive(link.href) ? "ec-mobile-link-active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="ec-btn-primary xui-w-fluid-100 xui-mt-2"
          onClick={() => setMobileOpen(false)}
          style={{ justifyContent: "center" }}
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
}
