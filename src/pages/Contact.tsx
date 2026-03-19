import { useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/PageHero";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const platformOptions = [
  "ServiceNow",
  "HaloITSM",
  "Talent Augmentation",
  "Not Sure — Need Guidance",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "Info@equacoredigital.com",
    href: "mailto:Info@equacoredigital.com",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 business hours",
    href: null,
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Nigeria — Delivering Globally",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    platform: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipients = [
      "Tosin.dada@equacoredigital.com",
      "Michael.ezechukwu@equacoredigital.com",
      "Emeka.chiazor@equacoredigital.com",
    ].join(",");
    const subject = encodeURIComponent(
      `New Enquiry from ${formData.name}${formData.company ? ` — ${formData.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nPlatform of Interest: ${formData.platform || "N/A"}\n\n${formData.message}`
    );
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        image="/hero-platform.jpg"
        label="Get in Touch"
        heading={<>Let's discuss your{" "}<span className="ec-gradient-text">platform needs</span></>}
        description="Whether you're exploring ServiceNow, HaloITSM, or need talent augmentation — we're here to help."
      />
      <section className="ec-section">
        <div className="xui-container">
          <Reveal>
            <div className="xui-mx-auto" style={{ maxWidth: 720 }}>
                  <div className="xui-text-center xui-mb-2">
                    <h2
                      className="xui-font-1 xui-font-w-700 xui-mb-half"
                      style={{ fontSize: "1.5rem", color: "var(--ec-navy)" }}
                    >
                      Book a Discussion
                    </h2>
                    <p className="xui-font-sz-90" style={{ color: "#64748b" }}>
                      Tell us about your operations challenge and we'll respond
                      with how we can help.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="xui-form">
                    <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-grid-gap-1-half">
                      <div className="xui-form-box">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="xui-form-box">
                        <label>Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-grid-gap-1-half">
                      <div className="xui-form-box">
                        <label>Company</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="xui-form-box">
                        <label>Platform of Interest</label>
                        <select
                          name="platform"
                          value={formData.platform}
                          onChange={handleChange}
                        >
                          <option value="">Select a platform</option>
                          {platformOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="xui-form-box">
                      <label>How Can We Help? *</label>
                      <textarea
                        name="message"
                        required
                        placeholder="Tell us about your operations challenge, what you're looking to achieve, or any questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="xui-btn xui-btn-primary xui-btn-block xui-bdr-rad-[8px]">
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="ec-section ec-section-slate">
        <div className="xui-container">
          <Reveal>
            <div className="xui-text-center xui-mb-4">
              <span className="ec-eyebrow xui-d-flex xui-flex-jc-center">Get in Touch</span>
              <h2
                className="xui-font-1 xui-font-w-700 xui-mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--ec-navy)" }}
              >
                Other ways to reach us
              </h2>
            </div>
          </Reveal>

          <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-3 xui-grid-gap-2 xui-mb-4">
            {contactInfo.map((item, i) => {
              const CIcon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    className="xui-d-flex xui-flex-ai-flex-start xui-grid-gap-1 xui-p-2 xui-bdr-rad-[12px]"
                    style={{ background: "#fff", border: "1px solid #e2e8f0", flexWrap: 'nowrap' }}
                  >
                    <div
                      className="xui-w-[42px] xui-h-[42px] xui-bdr-rad-[10px] xui-d-flex xui-flex-ai-center xui-flex-jc-center"
                      style={{ background: "rgba(37, 99, 235, 0.08)", flexShrink: 0 }}
                    >
                      <CIcon size={20} color="#2563EB" />
                    </div>
                    <div>
                      <p className="xui-font-sz-80 xui-font-w-600 xui-mb-[4px]" style={{ color: "#94a3b8" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="xui-font-sz-90 xui-font-w-600 xui-text-dc-none" style={{ color: "var(--ec-navy)" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="xui-font-sz-90 xui-font-w-600" style={{ color: "var(--ec-navy)" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="xui-text-center xui-mb-2">
              <h3 className="xui-font-1 xui-font-w-700 xui-font-sz-110" style={{ color: "var(--ec-navy)" }}>
                Reach a Partner Directly
              </h3>
            </div>
          </Reveal>
          <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-3 xui-grid-gap-1-half">
            {[
              { name: "Tosin Dada", role: "Managing Partner & Co-founder", email: "Tosin.dada@equacoredigital.com" },
              { name: "Michael Ezechukwu", role: "Operations Partner & Co-founder", email: "Michael.ezechukwu@equacoredigital.com" },
              { name: "Emeka Chiazor", role: "Delivery Partner & Co-founder", email: "Emeka.chiazor@equacoredigital.com" },
            ].map((person, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <a
                  href={`mailto:${person.email}`}
                  className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-p-1-half xui-bdr-rad-[12px] xui-text-dc-none"
                  style={{ background: "#fff", border: "1px solid #e2e8f0", transition: "border-color 0.2s ease, box-shadow 0.2s ease" }}
                >
                  <div>
                    <p className="xui-font-sz-90 xui-font-w-600" style={{ color: "var(--ec-navy)" }}>{person.name}</p>
                    <p className="xui-font-sz-80" style={{ color: "#94a3b8" }}>{person.role}</p>
                  </div>
                  <ArrowUpRight size={16} color="#2563EB" style={{ flexShrink: 0 }} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ec-section ec-section-dark">
        <div className="xui-container">
          <Reveal>
            <div className="xui-text-center xui-mb-4">
              <span className="ec-eyebrow ec-eyebrow-light xui-d-flex xui-flex-jc-center">
                Process
              </span>
              <h2
                className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
              >
                What happens next?
              </h2>
              <p
                className="xui-font-sz-100 xui-mx-auto"
                style={{ color: "rgba(255,255,255,0.6)", maxWidth: 560 }}
              >
                From your first message to a tailored recommendation — here's
                how we work.
              </p>
            </div>
          </Reveal>

          <div className="xui-d-grid xui-grid-col-1 xui-md-grid-col-3 xui-grid-gap-2">
            {[
              { step: "01", title: "We Review", desc: "Your enquiry is reviewed by a partner within 24 business hours — no bots, no gatekeepers." },
              { step: "02", title: "Discovery Call", desc: "A founding partner reaches out to schedule a discovery call and understand your goals." },
              { step: "03", title: "Tailored Approach", desc: "We recommend a platform and engagement model designed around your operations and team." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="xui-p-2 xui-bdr-rad-[12px]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-font-sz-75 xui-font-w-700 xui-mb-1-half"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "rgba(13, 148, 136, 0.15)",
                      color: "#0D9488",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.step}
                  </span>
                  <h4 className="xui-font-1 xui-font-w-700 xui-font-sz-100 xui-text-white xui-mb-half">
                    {item.title}
                  </h4>
                  <p className="xui-font-sz-85 xui-line-height-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ec-section" style={{ background: "var(--ec-cobalt)" }}>
        <div className="xui-container xui-text-center">
          <Reveal>
            <h2 className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.2 }}>
              Prefer to reach us directly?
            </h2>
            <p className="xui-font-sz-100 xui-mx-auto xui-mb-2-half" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 520 }}>
              Email us at Info@equacoredigital.com or explore our services to
              learn more about how we can help.
            </p>
            <div className="xui-d-flex xui-flex-jc-center xui-grid-gap-1 xui-flex-wrap">
              <a href="mailto:Info@equacoredigital.com" className="ec-btn-white" style={{ padding: "0.85rem 2.5rem", textDecoration: "none" }}>
                Email Us <ArrowRight size={16} />
              </a>
              <Link to="/services" className="xui-text-dc-none xui-text-white xui-font-w-600 xui-font-sz-90 xui-d-flex xui-flex-ai-center xui-grid-gap-half" style={{ padding: "0.85rem 1.5rem" }}>
                View Services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
