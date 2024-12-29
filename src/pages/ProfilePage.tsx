import Breadcrumbs from "../components/ui/Breadcrumbs";
import HeroHeading from "../components/ui/HeroHeading";

export default function ProfilePage() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[40px] w-full flex flex-col 
      text-left items-start"
      >
        <Breadcrumbs />
        <HeroHeading params={{ content: "Profile" }} />
        <div className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10"></div>
      </div>
    </div>
  );
}
