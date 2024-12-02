import { Link } from "react-router-dom";

import HeroHeading from "../components/ui/HeroHeading";
import Breadcrumbs from "../components/ui/Breadcrumbs";

export default function TestCoursePage() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[calc(var(--navbar-height)+40px)] h-[50vh] w-full 
      flex items-start text-left flex-col"
      >
        <Breadcrumbs />
        <HeroHeading
          params={{
            content: "Basics of AI",
          }}
        />
        <ol className="list-decimal text-left">
          <Link to="/courses/basics-of-ai/intro-to-basic-ai">
            <li>Intro To Basic AI</li>
          </Link>
          <li>Learning AI System</li>
        </ol>
      </div>
    </div>
  );
}
