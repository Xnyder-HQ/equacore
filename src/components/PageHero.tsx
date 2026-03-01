import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  heading: ReactNode;
  description: string;
  image: string;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function PageHero({ label, heading, description, image }: PageHeroProps) {
  return (
    <section
      className="ec-hero xui-d-flex xui-flex-ai-center xui-pos-relative xui-overflow-hidden"
      style={{ minHeight: "60vh" }}
    >
      <img
        src={image}
        alt=""
        className="ec-page-hero-bg xui-pos-absolute"
        style={{ inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="xui-pos-absolute"
        style={{ inset: 0, background: "rgba(15, 23, 42, 0.75)", zIndex: 1 }}
      />
      <div
        className="xui-container xui-pos-relative"
        style={{ zIndex: 2, paddingTop: "160px", paddingBottom: "80px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="ec-eyebrow ec-eyebrow-light xui-mb-1-half">
            {label}
          </span>
        </motion.div>

        <motion.h1
          className="xui-font-1 xui-font-w-700 xui-text-white xui-mb-1-half"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 680,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {heading}
        </motion.h1>

        <motion.p
          className="xui-font-sz-100 xui-line-height-[1.7]"
          style={{ color: "rgba(255,255,255,0.65)", maxWidth: 560 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
