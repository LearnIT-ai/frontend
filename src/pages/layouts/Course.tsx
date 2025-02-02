import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { motion } from "motion/react";

import SectionHeading from "../../components/ui/SectionHeading";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import DocumentLink from "../../components/ui/DocumentLink";

import { contentType } from "../../interfaces/contentTypes";
import { subjects } from "../../lib/subjects";

export default function CoursePage() {
  const { academicYear, courseName } = useParams();

  const [content, setContent] = useState<contentType[]>([]);

  const folderName = subjects.find(
    (subj) => subj.fullName.toLowerCase().split(" ").join("-") === courseName
  )?.folder;

  useEffect(() => {
    axios
      .get(`http://localhost:5050/files/${academicYear}`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, [academicYear]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 60 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]"
    >
      <div className="mt-[40px] h-full w-full flex items-start text-left flex-col">
        <Breadcrumbs />
        <SectionHeading
          params={{
            content: "Course: " + courseName?.split("-").join(" ") || "",
          }}
        />
        <ul
          className="text-left flex flex-col gap-4 p-4 pl-6 rounded-xl w-full
                      border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]"
        >
          {content
            .filter(
              (document) => document.filename.split("\\")[2] === folderName
            )
            .map((document) => {
              return (
                <DocumentLink
                  key={document.filename}
                  params={{
                    content: document.metadata.original_name,
                    link: document.metadata.original_name,
                  }}
                />
              );
            })}
        </ul>
      </div>
    </motion.div>
  );
}
