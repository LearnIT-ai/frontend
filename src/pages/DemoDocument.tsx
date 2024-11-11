import { useState } from "react";

import SectionHeading from "../components/ui/SectionHeading";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFDocumentType {
  name: string;
  url: string;
}

const DemoDocument = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const documents: PDFDocumentType[] = [
    { name: "Distribution", url: "/documents/Distribution.pdf" },
    {
      name: "Anomaly Detection",
      url: "/documents/Anomaly_Detection.pdf",
    },
    { name: "Boosting", url: "/documents/Boosting.pdf" },
  ];

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)] h-[70vh]">
      <section className="flex items-start flex-col">
        <SectionHeading
          params={{
            content: "Попередній перегляд документів",
          }}
        />
        <ul className="flex flex-col gap-2 items-start cursor-pointer">
          {documents.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>

        <div>
          <Worker workerUrl="">
            <Viewer
              fileUrl="/assets/documents/Anomaly_Detection.pdf"
              plugins={[newPlugin]}
            />
          </Worker>
        </div>
      </section>
    </div>
  );
};

export default DemoDocument;
