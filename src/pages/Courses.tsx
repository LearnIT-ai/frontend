import Breadcrumbs from "../components/ui/Breadcrumbs";
import HeroHeading from "../components/ui/HeroHeading";

import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[calc(var(--navbar-height)+40px)] w-full flex flex-col 
      text-left items-start"
      >
        <Breadcrumbs />
        <HeroHeading params={{ content: "Courses" }} />
        <div className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10">
          <CourseCard
            params={{
              heading: "Basics of AI",
              decoration: "AI",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              link: "/courses/basics-of-ai",
            }}
          />
          <CourseCard
            params={{
              heading: "Data Analytics",
              decoration: "DA",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              link: "/courses",
            }}
          />
          <CourseCard
            params={{
              heading: "Data Analytics",
              decoration: "DA",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              link: "/courses",
            }}
          />
        </div>
      </div>
    </div>
  );
}
