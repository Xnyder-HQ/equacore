import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import {
  ArrowRight,
  Monitor,
  Settings,
  Users,
  CheckCircle2,
  Briefcase,
  Clock,
  UserCheck,
  Shuffle,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { StaggerContainer, StaggerItem } from "../components/Reveal";

const services = [
  {
    id: "servicenow",
    num: "01",
    icon: Monitor,
    title: "ServiceNow",
    subtitle: "Enterprise Service Management",
    color: "#2563EB",
    hoverBg: "rgba(37, 99, 235, 0.06)",
    intro:
      "We deliver ServiceNow implementations rooted in operational discipline — not just configuration. From ITSM to service catalog design, our approach ensures your platform investment translates into real business outcomes.",
    capabilities: [
      "Platform assessment and roadmap",
      "ITSM implementation and configuration",
      "Service catalog and workflow design",
      "Process design aligned to ITIL best practices",
      "Platform optimization and health checks",
      "Admin training and knowledge transfer",
    ],
  },
  {
    id: "haloitsm",
    num: "02",
    icon: Settings,
    title: "HaloITSM",
    subtitle: "Agile IT Service Management",
    color: "#0D9488",
    hoverBg: "rgba(13, 148, 136, 0.06)",
    intro:
      "HaloITSM is a powerful, cost-effective ITSM platform. We help organizations implement, migrate to, and get the most from HaloITSM through structured delivery and operational alignment.",
    capabilities: [
      "Full HaloITSM implementation",
      "Migration from legacy ITSM tools",
      "Process alignment and configuration",
      "User onboarding and adoption support",
      "Operational discipline and SLA design",
      "Ongoing support and improvement cycles",
    ],
  },
  {
    id: "talent",
    num: "03",
    icon: Users,
    title: "Talent Augmentation",
    subtitle: "Quality Talent, Global Delivery",
    color: "#7c3aed",
    hoverBg: "rgba(124, 58, 237, 0.06)",
    intro:
      "We deploy pre-vetted Nigerian ServiceNow professionals globally — with mentorship, enterprise readiness, and flexible engagement structures that bridge emerging talent to global markets.",
    capabilities: [
      "Pre-vetted Nigerian ServiceNow professionals",
      "Mentorship and enterprise delivery readiness",
      "Flexible embedded consulting",
      "Global talent deployment",
      "Community developer ecosystem initiatives",
      "Staff augmentation at scale",
    ],
  },
];

const engagementModels = [
  {
    icon: Briefcase,
    title: "Project-Based",
    desc: "Scoped engagements with defined deliverables, timelines, and milestones. Ideal for platform implementations and migrations.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    desc: "Continuous platform management, optimization, and support to keep your operations running smoothly.",
  },
  {
    icon: UserCheck,
    title: "Embedded Consulting",
    desc: "Our consultants integrate with your team to drive delivery from within, transferring knowledge as they work.",
  },
  {
    icon: Shuffle,
    title: "Hybrid Model",
    desc: "A flexible combination of project-based delivery and ongoing advisory tailored to your needs.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        image="/hero-strategy.jpg"
        label="Our Services"
        heading={<>Platform expertise that{" "}<span className="ec-gradient-text">drives real outcomes</span></>}
        description="We don't just implement tools — we design, deliver, and evolve service operations that work for your teams and your business."
      />

      <section className="ec-section">
        <div className="xui-container">
          <div className="xui-row xui-flex-ai-stretch">
            <div className="xui-lg-col-4">
              <div className="xui-pos-sticky" style={{ top: 120 }}>
                <span className="ec-eyebrow">Our Expertise</span>
                <h2 className="ec-svc-sidebar-heading">
                  What we do{" "}
                  <br />
                  <span style={{ color: "#94a3b8" }}>and how we deliver</span>
                </h2>
                <p className="ec-svc-sidebar-desc">
                  We specialise in enterprise service management platforms and
                  talent — delivering with operational discipline and measurable
                  outcomes.
                </p>
              </div>
            </div>

            <div className="xui-lg-col-8 ec-svc-list">
              <StaggerContainer className="xui-d-flex xui-flex-dir-column xui-grid-gap-[4rem]">
                {services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <StaggerItem key={svc.id}>
                      <div id={svc.id} className="ec-svc-item">
                        <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-flex-start xui-mb-1-half">
                          <span className="ec-svc-num">{svc.num}</span>
                          <div className="ec-svc-icon">
                            <Icon size={32} color="#71717a" className="ec-svc-icon-svg" />
                          </div>
                        </div>
                        <h3 className="ec-svc-title">{svc.title}</h3>
                        <p className="ec-svc-desc">{svc.intro}</p>

                        <div className="ec-svc-caps">
                          {svc.capabilities.map((cap, i) => (
                            <div key={i} className="xui-d-flex xui-flex-ai-flex-start xui-grid-gap-[0.6rem] xui-font-sz-85" style={{ lineHeight: 1.6, color: "var(--ec-charcoal)" }}>
                              <CheckCircle2
                                size={16}
                                color={svc.color}
                                style={{ marginTop: 3, flexShrink: 0 }}
                              />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="ec-section ec-section-dark">
        <div className="xui-container">
          <Reveal>
            <div className="xui-text-center xui-mb-4">
              <span className="ec-eyebrow ec-eyebrow-light xui-d-flex xui-flex-jc-center">
                Engagement Models
              </span>
              <h2 className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}>
                Flexible ways to work together
              </h2>
              <p className="xui-font-sz-100 xui-mx-auto" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 560 }}>
                Every organization is different. We offer engagement structures
                that adapt to your operational maturity, team capacity, and
                strategic goals.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="ec-masonry">
            {engagementModels.map((model, i) => {
              const MIcon = model.icon;
              const isTall = i === 0 || i === 3;
              return (
                <StaggerItem key={model.title} className="ec-masonry-item">
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
                      <MIcon size={22} color="#0D9488" />
                    </div>
                    <h4 className="xui-font-1 xui-font-w-700 xui-font-sz-100 xui-text-white xui-mb-half">
                      {model.title}
                    </h4>
                    <p className="xui-font-sz-85 xui-line-height-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {model.desc}
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
              Let's find the right platform for your operations
            </h2>
            <p className="xui-font-sz-100 xui-mx-auto xui-mb-2-half" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 520 }}>
              Whether it's ServiceNow, HaloITSM, or talent augmentation — we'll
              help you design a solution that delivers.
            </p>
            <div className="xui-d-flex xui-flex-jc-center xui-grid-gap-1 xui-flex-wrap">
              <Link to="/contact" className="ec-btn-white" style={{ padding: "0.85rem 2.5rem" }}>
                Book a Discussion <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="xui-text-dc-none xui-text-white xui-font-w-600 xui-font-sz-90 xui-d-flex xui-flex-ai-center xui-grid-gap-half" style={{ padding: "0.85rem 1.5rem" }}>
                About EquaCore <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
