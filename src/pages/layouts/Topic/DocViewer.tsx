import { motion } from "motion/react";
import { useParams } from "react-router-dom";

export default function DocViewer() {
  const { docName } = useParams();

  const fileUrl = `http://localhost:5050/file/${docName}`;

  return (
    <motion.iframe
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
      }}
      viewport={{ once: true }}
      src={fileUrl}
      className="w-full h-[80vh] lg:h-full border-2 border-[var(--border-clr)] rounded-2xl"
      title="PDF Viewer"
    ></motion.iframe>
  );
}
