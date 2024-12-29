import { useParams } from "react-router-dom";

import HeroHeading from "../../components/ui/HeroHeading";
import SectionHeading from "../../components/ui/SectionHeading";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import DocumentLink from "../../components/ui/DocumentLink";

export default function CoursePage() {
  const { courseName } = useParams();

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div className="mt-[40px] h-[50vh] w-full flex items-start text-left flex-col">
        <Breadcrumbs />
        <HeroHeading
          params={{
            content: "Course",
            className: "text-[24px] md:text-[36px] xl:text-[48px]",
          }}
        />
        <SectionHeading
          params={{ content: courseName?.split("-").join(" ") || "" }}
        />
        <ul className="text-left flex flex-col gap-4">
          <DocumentLink
            params={{
              content: "Basics of AI",
            }}
          />
          <DocumentLink
            params={{
              content: "Data Pre-Processing",
            }}
          />
          <DocumentLink
            params={{
              content: "Linear Regression",
            }}
          />
        </ul>
      </div>
    </div>
  );
}
