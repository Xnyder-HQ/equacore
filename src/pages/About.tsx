import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import {
  ArrowRight,
  // Linkedin,
  // Mail,
  Award,
  BookOpen,
  Users,
  Globe,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { StaggerContainer, StaggerItem } from "../components/Reveal";

// const leaders = [
//   {
//     name: "Tosin Dada",
//     role: "Managing Partner & Co-founder",
//     initials: "TD",
//     email: "Tosin.dada@equacoredigital.com",
//     color: "#2563EB",
//     gradient: "linear-gradient(135deg, #2563EB, #1d4ed8)",
//     highlights: ["ServiceNow MVP 2025", "13+ years experience", "Business Analysis"],
//     bio: "Tosin is a ServiceNow MVP with over 13 years of experience across enterprise service management, business analysis, and digital transformation. He leads EquaCore's strategic vision and client delivery.",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Michael Ezechukwu",
//     role: "Operations Partner & Co-founder",
//     initials: "ME",
//     email: "Michael.ezechukwu@equacoredigital.com",
//     color: "#0D9488",
//     gradient: "linear-gradient(135deg, #0D9488, #0f766e)",
//     highlights: ["ITIL v4 Certified", "PMP Certified", "10+ years experience"],
//     bio: "Michael brings over a decade of delivery governance and hands-on ServiceNow expertise across ITSM, ITOM, and ITAM. With ITIL v4 and PMP certifications, he ensures every engagement is governed with discipline.",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Emeka Chiazor",
//     role: "Delivery Partner & Co-founder",
//     initials: "EC",
//     email: "Emeka.chiazor@equacoredigital.com",
//     color: "#7c3aed",
//     gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)",
//     highlights: ["9+ years experience", "ITSM & CMDB", "Data Governance"],
//     bio: "Emeka brings 9+ years of expertise in ITSM and CMDB, specialising in scalable architecture, data governance, and platform optimization. He ensures solutions are built to last and evolve.",
//     linkedin: "https://linkedin.com",
//   },
// ];

const values = [
  { step: "01", title: "Delivery Discipline", desc: "We don't just implement — we govern every engagement with structure, accountability, and measurable milestones." },
  { step: "02", title: "Knowledge Transfer", desc: "Our goal is your independence. We build internal capability so your team can own and evolve the solution." },
  { step: "03", title: "Community Focus", desc: "We invest in the Nigerian tech ecosystem through mentorship, talent development, and ServiceNow community initiatives." },
  { step: "04", title: "Client Partnership", desc: "We're technology agnostic. We recommend what's right for your business, not just the tools we sell." },
];

const floatingCards = [
  {
    title: "Our Vision",
    subheader: "Enabling organizations to operate intelligently and adapt continuously — across platforms, borders, and industries.",
    body: "To enable organizations to operate intelligently and adapt continuously by delivering transformative digital solutions and connecting them with exceptional technology talent — across platforms, borders, and industries.",
    bg: "linear-gradient(135deg, #2563EB, #1e40af)",
    link: "/services",
    image: "/hero-strategy.jpg",
    eyebrowColor: "var(--ec-cobalt)",
  },
  {
    title: "Our Mission",
    subheader: "Combining deep implementation expertise with scalable talent solutions to help organizations evolve modern digital operations.",
    body: "To help organizations design, implement, and evolve modern digital operations by combining deep implementation expertise with scalable talent solutions.",
    bg: "linear-gradient(135deg, #0D9488, #0f766e)",
    link: "/contact",
    image: "/hero-team.jpg",
    eyebrowColor: "var(--ec-teal)",
  },
];

function ValuesSteps() {
  const [active, setActive] = useState(-1);
  const gridRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(0);

  const startLoop = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      currentRef.current++;
      if (currentRef.current >= values.length) currentRef.current = 0;
      setActive(currentRef.current);
    }, 900);
  };

  const pauseLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(0);
          startLoop();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(grid);

    return () => {
      observer.disconnect();
      pauseLoop();
    };
  }, []);

  return (
    <section className="ec-section ec-section-slate">
      <div className="xui-container">
        <Reveal>
          <div className="xui-d-flex xui-flex-dir-column xui-md-flex-dir-row xui-flex-ai-end xui-flex-jc-between xui-mb-5 xui-grid-gap-2">
            <div style={{ maxWidth: 640 }}>
              <span className="ec-eyebrow">Our Values</span>
              <h2
                className="xui-font-1 xui-font-w-700 xui-mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--ec-navy)" }}
              >
                Our core values
              </h2>
              <p className="xui-font-sz-100 xui-line-height-[1.7]" style={{ color: "#64748b" }}>
                The principles that guide every engagement and define how we deliver.
              </p>
            </div>
          </div>

          <div className="xui-pos-relative" style={{ width: "100%" }}>
            <div
              className="xui-pos-absolute xui-d-none xui-lg-d-block"
              style={{ top: "1.125rem", left: 0, right: 0, height: 1, background: "#e2e8f0", zIndex: 0 }}
            >
              <div
                className="ec-tstep-line"
                style={{
                  height: "100%",
                  background: "var(--ec-navy)",
                  width: active < 0 ? "0%" : `${(active / (values.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div
              ref={gridRef}
              className="xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-lg-grid-col-4 xui-pos-relative"
              style={{ gap: "2rem", zIndex: 10 }}
              onMouseLeave={() => { startLoop(); }}
            >
              {values.map((item, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={item.step}
                    className="ec-tstep xui-d-flex xui-flex-dir-column xui-grid-gap-1"
                    onMouseEnter={() => { pauseLoop(); currentRef.current = i; setActive(i); }}
                  >
                    <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                      <div
                        className="ec-tstep-num xui-d-flex xui-flex-ai-center xui-flex-jc-center"
                        style={{
                          width: 36,
                          height: 36,
                          background: "#fff",
                          border: `1px solid ${isActive ? "var(--ec-navy)" : "#e2e8f0"}`,
                          borderRadius: 4,
                          fontSize: "0.625rem",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          color: isActive ? "var(--ec-navy)" : "#94a3b8",
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                          boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.05)",
                          zIndex: 10,
                        }}
                      >
                        {item.step}
                      </div>
                      <div className="xui-lg-d-none" style={{ height: 1, flex: 1, background: "#e2e8f0" }} />
                    </div>
                    <div
                      className="ec-tstep-body"
                      style={{
                        opacity: isActive ? 1 : 0.4,
                        filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                      }}
                    >
                      <h4
                        className="xui-font-1 xui-font-w-600 xui-mb-half"
                        style={{ fontSize: "1rem", color: "var(--ec-navy)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="xui-line-height-[1.7]" style={{ fontSize: "0.85rem", color: "#64748b" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        image="/hero-team.jpg"
        label="About EquaCore"
        heading={<>Built by practitioners,{" "}<span className="ec-gradient-text">for practitioners</span></>}
        description="EquaCore was founded by a team of experienced service management professionals who believe in implementation over theory."
      />
      <section className="ec-section">
        <div className="xui-container">
          <Reveal>
            <div className="xui-text-center xui-mb-4">
              <span className="ec-eyebrow xui-d-flex xui-flex-jc-center">What Drives Us</span>
              <h2
                className="xui-font-1 xui-font-w-700 xui-mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--ec-navy)" }}
              >
                What drives us forward
              </h2>
            </div>
          </Reveal>

          <div className="xui-d-flex xui-flex-dir-column" style={{ gap: "5rem" }}>
            {floatingCards.map((card, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <Reveal key={card.title}>
                  <div className="ec-split xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-3 xui-flex-ai-center">
                    <div className="ec-split-image" style={{ order: isReversed ? 2 : 1 }}>
                      <div
                        className="xui-bdr-rad-[16px] xui-overflow-hidden xui-pos-relative"
                        style={{ aspectRatio: "4 / 3" }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="ec-split-img"
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                        <div
                          className="xui-pos-absolute"
                          style={{ inset: 0, background: card.bg, opacity: 0.15 }}
                        />
                      </div>
                    </div>
                    <div style={{ order: isReversed ? 1 : 2 }}>
                      <span className="ec-eyebrow" style={{ color: card.eyebrowColor }}>
                        {card.title}
                      </span>
                      <h3
                        className="xui-font-1 xui-font-w-700 xui-mb-1"
                        style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", lineHeight: 1.25, color: "var(--ec-navy)" }}
                      >
                        {card.subheader}
                      </h3>
                      <p
                        className="xui-font-sz-100 xui-line-height-[1.7] xui-mb-2"
                        style={{ color: "#64748b" }}
                      >
                        {card.body}
                      </p>
                      <Link to={card.link} className="ec-btn-primary">
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ValuesSteps />

      {/* <section className="ec-float-section">
        <div className="ec-float-headline">
          <h2>Meet the founding partners</h2>
        </div>

        <div className="ec-float-presenter xui-container">
          {leaders.map((leader, i) => (
            <div key={leader.name} className="ec-float-card-wrap">
              <div
                className="ec-float-card"
                style={{ background: leader.gradient }}
              >
                <div className="ec-float-card-art">
                  {i === 0 ? (
                    <svg viewBox="0 0 540 360" fill="none" preserveAspectRatio="xMidYMid slice">
                      <circle cx="420" cy="80" r="160" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <circle cx="440" cy="100" r="80" fill="rgba(255,255,255,0.05)" />
                      <path d="M0 300 Q200 180 540 260" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                      <circle cx="80" cy="320" r="130" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                      <path d="M300 0 Q320 180 540 200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                    </svg>
                  ) : i === 1 ? (
                    <svg viewBox="0 0 540 360" fill="none" preserveAspectRatio="xMidYMid slice">
                      <circle cx="270" cy="180" r="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <circle cx="270" cy="180" r="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <path d="M-50 120 Q200 40 540 140" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
                      <circle cx="480" cy="300" r="110" fill="rgba(255,255,255,0.04)" />
                      <path d="M100 360 Q250 200 540 300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 540 360" fill="none" preserveAspectRatio="xMidYMid slice">
                      <circle cx="100" cy="60" r="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <path d="M540 80 Q300 200 0 160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                      <circle cx="400" cy="280" r="100" fill="rgba(255,255,255,0.05)" />
                      <circle cx="350" cy="120" r="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <path d="M200 360 Q350 240 540 320" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                    </svg>
                  )}
                </div>
                <div className="ec-float-card-cover">
                  <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                    <div
                      className="xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-font-1 xui-font-w-700"
                      style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: "rgba(255,255,255,0.2)", color: "#fff",
                        fontSize: "1rem", flexShrink: 0,
                      }}
                    >
                      {leader.initials}
                    </div>
                    <div>
                      <h3 className="ec-float-card-title" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", marginBottom: 2 }}>
                        {leader.name}
                      </h3>
                      <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ec-float-card-detail">
                  <div className="xui-d-flex xui-flex-wrap xui-grid-gap-half xui-mb-1">
                    {leader.highlights.map((h, hi) => (
                      <span
                        key={hi}
                        className="xui-font-w-600 xui-bdr-rad-[100px]"
                        style={{
                          fontSize: "0.68rem", padding: "0.2rem 0.55rem", lineHeight: 1.4,
                          background: "rgba(255,255,255,0.15)", color: "#fff",
                          border: "1px solid rgba(255,255,255,0.25)",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <p className="ec-float-card-body">{leader.bio}</p>
                  <div className="xui-d-flex xui-grid-gap-half">
                    <a href={`mailto:${leader.email}`} className="ec-float-card-cta" style={{ padding: "0.4rem 1rem" }}>
                      <Mail size={14} /> Email
                    </a>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="ec-float-card-cta" style={{ padding: "0.4rem 1rem" }}>
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="ec-section ec-section-dark">
        <div className="xui-container">
          <Reveal>
            <div className="xui-text-center xui-mb-4">
              <span className="ec-eyebrow ec-eyebrow-light xui-d-flex xui-flex-jc-center">
                Community Impact
              </span>
              <h2
                className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
              >
                Growing the ecosystem
              </h2>
              <p
                className="xui-font-sz-100 xui-mx-auto"
                style={{ color: "rgba(255,255,255,0.6)", maxWidth: 560 }}
              >
                We foster developer communities through meetups, hackathons, and
                talent enablement initiatives — creating a sustainable ecosystem
                that nurtures growth and collaboration across Africa.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="ec-masonry">
            {[
              { icon: Users, title: "Meetups & Hackathons", desc: "Organising community events that bring together aspiring tech professionals for hands-on learning and collaboration." },
              { icon: BookOpen, title: "Talent Enablement", desc: "Structured mentorship and upskilling initiatives that prepare professionals for enterprise delivery." },
              { icon: Globe, title: "Knowledge Sharing", desc: "Building a sustainable ecosystem that nurtures growth, collaboration, and knowledge sharing across Africa." },
              { icon: Award, title: "Developer Ecosystem", desc: "Growing a network of technologists and delivery leaders who support and elevate each other." },
            ].map((item, i) => {
              const CIcon = item.icon;
              const isTall = i === 0 || i === 3;
              return (
                <StaggerItem key={item.title} className="ec-masonry-item">
                  <div
                    className="xui-p-2 xui-bdr-rad-[12px]"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      paddingBottom: isTall ? "3.5rem" : undefined,
                    }}
                  >
                    <div
                      className="xui-w-[48px] xui-h-[48px] xui-bdr-rad-[10px] xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-mb-1-half"
                      style={{ background: "rgba(13, 148, 136, 0.15)" }}
                    >
                      <CIcon size={22} color="#0D9488" />
                    </div>
                    <h4 className="xui-font-1 xui-font-w-700 xui-font-sz-100 xui-text-white xui-mb-half">
                      {item.title}
                    </h4>
                    <p className="xui-font-sz-85 xui-line-height-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="ec-section" style={{ background: "var(--ec-cobalt)" }}>
        <div className="xui-container xui-text-center">
          <Reveal>
            <h2 className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.2 }}>
              Ready to work with a team that delivers?
            </h2>
            <p className="xui-font-sz-100 xui-mx-auto xui-mb-2-half" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 520 }}>
              Let's discuss how EquaCore can help transform your service
              operations with the right platform and the right team.
            </p>
            <div className="xui-d-flex xui-flex-jc-center xui-grid-gap-1 xui-flex-wrap">
              <Link to="/contact" className="ec-btn-white" style={{ padding: "0.85rem 2.5rem" }}>
                Book a Discussion <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="xui-text-dc-none xui-text-white xui-font-w-600 xui-font-sz-90 xui-d-flex xui-flex-ai-center xui-grid-gap-half" style={{ padding: "0.85rem 1.5rem" }}>
                Explore Services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
