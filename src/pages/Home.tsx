import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  ArrowRight,
  Monitor,
  Settings,
  Users,
  BookOpen,
  Handshake,
  ShieldCheck,
  Target,

} from "lucide-react";
import gsap from "gsap";
import Reveal from "../components/Reveal";
import { StaggerContainer, StaggerItem } from "../components/Reveal";

const heroSlides = [
  {
    image: "/hero-team.jpg",
    label: "Digital Operations Consulting",
    heading: "We design, deliver, and improve modern service operations",
    desc: "EquaCore bridges operational strategy with hands-on platform delivery — ensuring solutions are practical, scalable, and aligned to business priorities.",
    cta: { text: "Discuss Your Platform Needs", to: "/contact" },
    ctaSecondary: { text: "Explore Services", to: "/services" },
    align: "left" as const,
    dir: "left" as const,
  },
  {
    image: "/hero-strategy.jpg",
    label: "Enterprise Platforms",
    heading: "ServiceNow & HaloITSM — implemented with discipline",
    desc: "From platform assessment to adoption and knowledge transfer, we cover the full lifecycle of your service management journey.",
    cta: { text: "View Our Services", to: "/services" },
    ctaSecondary: { text: "Book a Discussion", to: "/contact" },
    align: "center" as const,
    dir: "bottom" as const,
  },
  {
    image: "/hero-platform.jpg",
    label: "Talent & Community",
    heading: "Pre-vetted professionals, ready for enterprise delivery",
    desc: "We deploy Nigerian ServiceNow professionals globally — with mentorship, enterprise readiness, and flexible engagement structures.",
    cta: { text: "Learn About Talent", to: "/services" },
    ctaSecondary: { text: "About EquaCore", to: "/about" },
    align: "right" as const,
    dir: "right" as const,
  },
];

const offeringItems = {
  servicenow: {
    icon: Monitor,
    title: "ServiceNow",
    desc: "End-to-end platform delivery — from assessment and architecture through ITSM implementation, process design, and continuous optimization.",
    capabilities: [
      "Platform assessment & roadmapping",
      "ITSM/ITOM implementation",
      "Process design aligned to ITIL",
      "Performance optimization & upgrades",
    ],
  },
  halo: {
    icon: Settings,
    title: "HaloITSM",
    desc: "Full-lifecycle implementation for growing teams — including migration from legacy tools, process alignment, and structured user onboarding.",
    capabilities: [
      "Implementation & configuration",
      "Legacy tool migration",
      "Process alignment & automation",
      "User onboarding & adoption",
    ],
  },
  talent: {
    icon: Users,
    title: "Talent Augmentation",
    desc: "We deploy pre-vetted Nigerian ServiceNow professionals into global enterprise teams — with mentorship, readiness programs, and flexible engagement models.",
    capabilities: [
      "Pre-vetted ServiceNow professionals",
      "Enterprise delivery readiness",
      "Mentorship & upskilling programs",
      "Flexible engagement structures",
    ],
  },
};

const approach = [
  { step: "01", title: "Discovery", desc: "Understand your current operations, pain points, and strategic goals." },
  { step: "02", title: "Platform Fit", desc: "Recommend the right tools for your strategy today and growth tomorrow." },
  { step: "03", title: "Adoption", desc: "Structured delivery with governance, training, and measurable outcomes." },
  { step: "04", title: "Knowledge Transfer", desc: "Ensure your team owns the solution and can evolve it independently." },
];

const whyItems = [
  { icon: ShieldCheck, title: "Delivery Governance", desc: "Structured project governance ensuring accountability at every stage." },
  { icon: Target, title: "Outcomes Focused", desc: "Every engagement is measured against tangible business improvements." },
  { icon: BookOpen, title: "Knowledge Transfer", desc: "We build your internal capability, not long-term dependency." },
  { icon: Handshake, title: "Technology Agnostic", desc: "We recommend the right tools, not just the ones we sell." },
];

const talentSteps = [
  { step: "01", title: "Pre-vetted Talent", desc: "Rigorously assessed professionals deployed into enterprise environments." },
  { step: "02", title: "Mentorship & Readiness", desc: "Structured development ensuring consultants are enterprise-ready from day one." },
  { step: "03", title: "Community Ecosystem", desc: "A growing network of technologists, mentors, and delivery leaders." },
  { step: "04", title: "Global Delivery", desc: "Distributed teams delivering with governance and measurable outcomes." },
];

const stackCards = [
  {
    icon: Monitor,
    title: offeringItems.servicenow.title,
    desc: offeringItems.servicenow.desc,
    capabilities: offeringItems.servicenow.capabilities,
    bg: "var(--ec-navy)",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.55)",
    capColor: "rgba(255,255,255,0.7)",
    iconBg: "rgba(37, 99, 235, 0.15)",
    iconColor: "#2563EB",
    dotColor: "var(--ec-teal)",
    ctaColor: "#2563EB",
    ctaText: "Explore ServiceNow",
  },
  {
    icon: Settings,
    title: offeringItems.halo.title,
    desc: offeringItems.halo.desc,
    capabilities: offeringItems.halo.capabilities,
    bg: "var(--ec-charcoal)",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.6)",
    capColor: "rgba(255,255,255,0.75)",
    iconBg: "rgba(13, 148, 136, 0.2)",
    iconColor: "#0D9488",
    dotColor: "var(--ec-teal)",
    ctaColor: "var(--ec-teal)",
    ctaText: "Explore HaloITSM",
  },
  {
    icon: Users,
    title: offeringItems.talent.title,
    desc: offeringItems.talent.desc,
    capabilities: offeringItems.talent.capabilities,
    bg: "#2563EB",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.6)",
    capColor: "rgba(255,255,255,0.75)",
    iconBg: "rgba(255, 255, 255, 0.15)",
    iconColor: "#fff",
    dotColor: "#fff",
    ctaColor: "#fff",
    ctaText: "Explore Talent Services",
  },
];

function OfferingCard({ card }: { card: typeof stackCards[number] }) {
  const Icon = card.icon;
  return (
    <Link to="/services" className="xui-text-dc-none xui-d-block">
      <div className="xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-3" style={{ padding: "clamp(2rem, 4vw, 3rem)" }}>
        <div>
          <div
            className="xui-w-[48px] xui-h-[48px] xui-bdr-rad-[10px] xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-mb-1-half"
            style={{ background: card.iconBg }}
          >
            <Icon size={24} color={card.iconColor} />
          </div>
          <h3
            className="xui-font-1 xui-font-w-700 xui-mb-1"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)", lineHeight: 1.25, color: card.textColor }}
          >
            {card.title}
          </h3>
          <p className="xui-font-sz-90 xui-line-height-[1.7] xui-mb-1-half" style={{ color: card.descColor }}>
            {card.desc}
          </p>
          <span className="xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-font-sz-85 xui-font-w-600" style={{ color: card.ctaColor }}>
            {card.ctaText} <ArrowRight size={14} />
          </span>
        </div>
        <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-[0.75rem] xui-flex-jc-center">
          {card.capabilities.map((cap) => (
            <div key={cap} className="xui-d-flex xui-flex-ai-center xui-grid-gap-[0.65rem]" style={{flexWrap: 'nowrap'}}>
              <div className="xui-w-[6px] xui-h-[6px] xui-bdr-rad-[50%]" style={{ background: card.dotColor, flexShrink: 0 }} />
              <span className="xui-font-sz-90" style={{ color: card.capColor }}>{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

function TimelineApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      contentRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -40 : 40 });
      });

      const vh = window.innerHeight;
      const scrollDist = vh < 700 ? Math.min(vh * 0.9, 500) : Math.min(vh * 0.7, 600);

      let shiftY = 0;
      const lastNode = nodeRefs.current[3];
      const section = sectionRef.current;
      if (section && lastNode) {
        const sectionTop = section.getBoundingClientRect().top;
        const nodeBottom = lastNode.getBoundingClientRect().bottom;
        const relativeBottom = nodeBottom - sectionTop;
        const overflow = relativeBottom + 80 - vh;
        if (overflow > 0) shiftY = overflow;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDist}`,
          scrub: 1,
          pin: true,
        },
      });

      const activateNode = (node: HTMLElement | null, dur: number) => {
        if (!node) return;
        tl.to(node, { background: "var(--ec-cobalt)", boxShadow: "0 0 0 2px var(--ec-cobalt)", scale: 1.15, duration: dur });
        tl.to(node.querySelector("span"), { color: "#fff", duration: dur }, "<");
      };

      activateNode(nodeRefs.current[0], 0.8);
      tl.to(contentRefs.current[0], { opacity: 1, x: 0, duration: 1 }, "<")

        .to(progressRef.current, { height: "33.33%", duration: 2 });
      activateNode(nodeRefs.current[1], 0.5);
      tl.to(contentRefs.current[1], { opacity: 1, x: 0, duration: 1 }, "<")

        .to(progressRef.current, { height: "66.66%", duration: 2 });
      activateNode(nodeRefs.current[2], 0.5);
      tl.to(contentRefs.current[2], { opacity: 1, x: 0, duration: 1 }, "<");

      if (shiftY > 0) {
        tl.to(wrapRef.current, { y: -shiftY, duration: 1.5, ease: "power2.inOut" });
      }

      tl.to(progressRef.current, { height: "100%", duration: 2 });
      activateNode(nodeRefs.current[3], 0.5);
      tl.to(contentRefs.current[3], { opacity: 1, x: 0, duration: 1 }, "<");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ec-section xui-d-flex xui-flex-ai-center xui-overflow-hidden" style={{ minHeight: "min(100vh, 900px)" }}>
      <div ref={wrapRef} className="xui-container" style={{ width: "100%" }}>
        <div className="xui-text-center xui-mb-4">
          <span className="ec-eyebrow xui-d-flex xui-flex-jc-center">Our Approach</span>
          <h2
            className="xui-font-1 xui-font-w-700 xui-mb-1"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--ec-navy)" }}
          >
            From discovery to sustainable delivery
          </h2>
          <p className="xui-font-sz-100 xui-line-height-[1.7] xui-mx-auto" style={{ color: "#64748b", maxWidth: 560 }}>
            We follow a disciplined methodology that ensures every engagement produces practical outcomes and lasting value.
          </p>
        </div>
        <div className="ec-timeline" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="ec-timeline-track">
            <div ref={progressRef} className="ec-timeline-progress" />
          </div>

          {approach.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.step} className={`ec-timeline-item ${isLeft ? "ec-timeline-left" : "ec-timeline-right"}`}>
                <div ref={(el) => { contentRefs.current[i] = el; }} className="ec-timeline-content">
                  <h4
                    className="xui-font-1 xui-font-w-700 xui-font-sz-110 xui-mb-half"
                    style={{ color: "var(--ec-navy)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="xui-font-sz-90 xui-line-height-[1.7]" style={{ color: "#64748b" }}>
                    {item.desc}
                  </p>
                </div>
                <div
                  ref={(el) => { nodeRefs.current[i] = el; }}
                  className="ec-timeline-node"
                >
                  <span>{item.step}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StackedOfferings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const vh = window.innerHeight;
      const scrollDist = vh < 700 ? Math.min(vh * 0.9, 500) : Math.min(vh * 0.6, 700);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDist}`,
          scrub: 2,
          pin: true,
        },
      });

      tl.to(card1Ref.current, {
        filter: "blur(4px)",
        scale: 0.92,
        duration: 4,
      })
        .to(card2Ref.current, { top: "0", duration: 4 }, "<")
        .to(card2Ref.current, {
          filter: "blur(4px)",
          scale: 0.92,
          duration: 4,
        })
        .to(card3Ref.current, { top: "0", duration: 4 }, "<");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ec-section ec-section-slate xui-d-flex xui-flex-ai-center" style={{ minHeight: "min(100vh, 900px)" }}>
      <div className="xui-container" style={{ width: "100%" }}>
        <Reveal>
          <div className="xui-text-center xui-mb-3">
            <span className="ec-eyebrow xui-d-flex xui-flex-jc-center">Core Offerings</span>
            <h2 className="xui-font-1 xui-font-w-700 xui-mb-1" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--ec-navy)" }}>
              Enterprise platforms, delivered right
            </h2>
            <p className="xui-font-sz-100 xui-mx-auto" style={{ color: "#64748b", maxWidth: 560 }}>
              From platform selection to adoption and beyond — we cover the full lifecycle of your service management journey.
            </p>
          </div>
        </Reveal>

        <div className="ec-stack-section">
          <div
            ref={card1Ref}
            className="ec-stack-card ec-stack-card-base"
            style={{ background: stackCards[0].bg }}
          >
            <OfferingCard card={stackCards[0]} />
          </div>

          <div
            ref={card2Ref}
            className="ec-stack-card ec-stack-card-slide"
            style={{ background: stackCards[1].bg }}
          >
            <OfferingCard card={stackCards[1]} />
          </div>

          <div
            ref={card3Ref}
            className="ec-stack-card ec-stack-card-slide"
            style={{ background: stackCards[2].bg }}
          >
            <OfferingCard card={stackCards[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TalentSteps() {
  const [active, setActive] = useState(-1);
  const gridRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(0);

  const startLoop = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      currentRef.current++;
      if (currentRef.current >= talentSteps.length) currentRef.current = 0;
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
              <span className="ec-eyebrow">Talent & Community</span>
              <h2
                className="xui-font-1 xui-font-w-700 xui-mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--ec-navy)" }}
              >
                Quality talent, global delivery
              </h2>
              <p className="xui-font-sz-100 xui-line-height-[1.7]" style={{ color: "#64748b" }}>
                Pre-vetted professionals deployed globally with mentorship and enterprise readiness.
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
                  width: active < 0 ? "0%" : `${(active / (talentSteps.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div
              ref={gridRef}
              className="xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-lg-grid-col-4 xui-pos-relative"
              style={{ gap: "2rem", zIndex: 10 }}
              onMouseLeave={() => { startLoop(); }}
            >
              {talentSteps.map((item, i) => {
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

export default function Home() {
  return (
    <>
      <section className="ec-hero-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={1200}
          loop
          grabCursor
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="ec-hero-slide" data-dir={slide.dir} data-align={slide.align}>
                <div className="ec-hero-slide-bg">
                  <img src={slide.image} alt="" />
                </div>
                <div className="ec-hero-slide-overlay" />
                <div className="ec-hero-slide-content xui-container">
                  <div className="ec-hero-slide-inner">
                    <p className="ec-hero-slide-label">{slide.label}</p>
                    <h1 className="ec-hero-slide-heading">{slide.heading}</h1>
                    <p className="ec-hero-slide-desc">{slide.desc}</p>
                    <div className="ec-hero-slide-ctas">
                      <Link to={slide.cta.to} className="ec-btn-primary" style={{ padding: "0.9rem 2.25rem" }}>
                        {slide.cta.text} <ArrowRight size={15} />
                      </Link>
                      <Link to={slide.ctaSecondary.to} className="ec-btn-outline" style={{ padding: "0.9rem 2.25rem", borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
                        {slide.ctaSecondary.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <StackedOfferings />

      <TimelineApproach />

      <section className="ec-section ec-section-dark">
        <div className="xui-container">
          <Reveal>
            <div className="xui-text-center xui-mb-4">
              <span className="ec-eyebrow ec-eyebrow-light xui-d-flex xui-flex-jc-center">Why EquaCore</span>
              <h2 className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}>
                Built on delivery discipline
              </h2>
              <p className="xui-font-sz-100 xui-mx-auto" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 560 }}>
                We don't just configure platforms. We ensure they drive operational improvement and are adopted by your teams.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="ec-masonry">
            {whyItems.map((item, i) => {
              const Icon = item.icon;
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
                      <Icon size={22} color="#0D9488" />
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

      <TalentSteps />

      <section className="ec-section" style={{ background: "var(--ec-cobalt)" }}>
        <div className="xui-container xui-text-center">
          <Reveal>
            <h2 className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.2 }}>
              Ready to modernise your service operations?
            </h2>
            <p className="xui-font-sz-100 xui-mx-auto xui-mb-2-half" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 520 }}>
              Let's discuss how EquaCore can help you design, implement, and evolve your digital operations.
            </p>
            <div className="xui-d-flex xui-flex-jc-center xui-grid-gap-1 xui-flex-wrap">
              <Link to="/contact" className="ec-btn-white" style={{ padding: "0.85rem 2.5rem" }}>
                Book a Discussion <ArrowRight size={16} />
              </Link>
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
