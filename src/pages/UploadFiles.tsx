import Breadcrumbs from "../components/ui/Breadcrumbs";
import HeroHeading from "../components/ui/HeroHeading";
import SectionHeading from "../components/ui/SectionHeading";
import SectionDescription from "../components/ui/SectionDescription";

export default function UploadFiles() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[40px] w-full flex flex-col 
          text-left items-start"
      >
        <Breadcrumbs />
        <div
          className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 
                lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10"
        ></div>
        <section className="w-full flex flex-col items-start">
          <SectionHeading
            params={{
              content: "Upload Files",
            }}
          />
          <SectionDescription
            params={{
              content:
                "Upload your hometask in PDF format and check it correctness with the AI Assistant",
              alignment: "text-left",
              className: "mb-16",
            }}
          />
          <div className="input-group">
            <input id="file" type="file" accept=".pdf" />
          </div>
        </section>
      </div>
    </div>
  );
}
