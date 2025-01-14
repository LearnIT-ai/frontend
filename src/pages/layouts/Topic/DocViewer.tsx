import { motion } from "motion/react";
import doc from "../../../lib/testDocuments/IntroToBasicAI.pdf";

export default function DocViewer() {
  return (
    <motion.iframe
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
      }}
      viewport={{ once: true }}
      src={doc}
      className="w-full h-[80vh] lg:h-full border-2 border-[var(--border-clr)] rounded-2xl"
      title="PDF Viewer"
    ></motion.iframe>
  );
}
