import { useRef } from "react";
import doc from "../lib/testDocuments/IntroToBasicAI.pdf";

import Breadcrumbs from "../components/ui/Breadcrumbs";
import HeroHeading from "../components/ui/HeroHeading";

export default function TestDocumenPreview() {
  const chatInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[calc(var(--navbar-height)+40px)] h-full w-full 
      flex items-start text-left flex-col"
      >
        <Breadcrumbs />
        <HeroHeading params={{ content: "Intro to Basic AI" }} />
        <div className="w-full h-[100vh] lg:h-[80vh] flex flex-col lg:flex-row gap-6">
          <iframe
            src={doc}
            className="w-full lg:w-[60%] h-full border-2 border-[var(--border-clr)] rounded-xl"
            title="PDF Viewer"
          ></iframe>
          <div
            className="w-full lg:w-[40%] h-[50vh] lg:h-full bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] 
          rounded-xl p-4 flex flex-col justify-end"
          >
            <input
              type="text"
              className={`bg-[var(--input-clr)] border-2 border-[var(--bg-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] placeholder-[var(--input-text-clr)] text-sm rounded-2xl block w-full duration-300 p-3`}
              placeholder="Ask something..."
              ref={chatInputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
