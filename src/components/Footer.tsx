import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "ServiceNow", href: "/services" },
  { label: "HaloITSM", href: "/services" },
  { label: "Talent Augmentation", href: "/services" },
  { label: "Engagement Models", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="ec-footer">
      <div className="xui-container xui-py-4 xui-lg-py-5">
        <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-lg-grid-col-4 xui-grid-gap-3">
          <div>
            <div className="xui-mb-1-half">
              <img src="/logo-white.svg" alt="EquaCore Digital" className="xui-img-150" />
            </div>
            <p className="xui-font-sz-85 xui-line-height-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Digital operations consulting and implementation. Bridging operational strategy with hands-on platform delivery.
            </p>
          </div>

          <div>
            <h4 className="xui-font-sz-85 xui-font-w-700 xui-text-white xui-text-uppercase xui-mb-1-half" style={{ letterSpacing: "0.1em" }}>
              Quick Links
            </h4>
            <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-[0.6rem]">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="xui-font-sz-85 xui-text-dc-none"
                  style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="xui-font-sz-85 xui-font-w-700 xui-text-white xui-text-uppercase xui-mb-1-half" style={{ letterSpacing: "0.1em" }}>
              Services
            </h4>
            <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-[0.6rem]">
              {services.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="xui-font-sz-85 xui-text-dc-none"
                  style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="xui-font-sz-85 xui-font-w-700 xui-text-white xui-text-uppercase xui-mb-1-half" style={{ letterSpacing: "0.1em" }}>
              Get in Touch
            </h4>
            <a
              href="mailto:Info@equacoredigital.com"
              className="xui-d-flex xui-flex-ai-center xui-grid-gap-half xui-font-sz-85 xui-text-dc-none xui-mb-1"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <Mail size={16} />
              Info@equacoredigital.com
            </a>
            <Link to="/contact" className="ec-btn-primary xui-font-sz-80" style={{ padding: "0.55rem 1.25rem" }}>
              Book a Discussion <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="xui-mt-4 xui-pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="xui-d-flex xui-flex-dir-column xui-md-flex-dir-row xui-flex-ai-center xui-flex-jc-space-between xui-grid-gap-1">
            <p className="xui-font-sz-80" style={{ color: "rgba(255,255,255,0.4)" }}>
              &copy; {new Date().getFullYear()} EquaCore Digital. All rights reserved.
            </p>
            <p className="xui-font-sz-80" style={{ color: "rgba(255,255,255,0.4)" }}>
              Digital Operations. Delivered Right.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
