import ellipsLg from "../assets/images/ellipse-lg.png";
import ellipsMd from "../assets/images/ellipse-md.png";
import ellipsSm from "../assets/images/ellipse-sm.png";
import ellipsXs from "../assets/images/ellipse-xs.png";

import lecturesIcon from "../assets/icons/lectures-icon.svg";
import plagiarismIcon from "../assets/icons/plagiarism-icon.svg";
import homeworkCheckIcon from "../assets/icons/homework-check-icon.svg";

import Button from "../components/ui/Button";
import HeroHeading from "../components/ui/HeroHeading";
import SectionHeading from "../components/ui/SectionHeading";

import FeatureCard from "../components/FeatureCard";
import TeamCard from "../components/TeamCard";

export default function Home() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <section className="flex w-full mt-[40px] h-[calc(100vh-var(--navbar-height)-80px)] mb-[40px]">
        <div className="relative flex flex-col w-full gap-4 justify-center items-center rounded-3xl border-2 border-[var(--border-clr)]">
          <img
            className="animate-orbit transition-transform opacity-[80%]
            absolute top-[-5%] left-[-25%] xl:left-[-15%] w-auto h-[40%] lg:h-[50%] xl:h-[55%]"
            src={ellipsLg}
            alt="Ellips Large"
          />
          <img
            className="animate-orbit-reverse transition-transform 
            absolute bottom-[-5%] right-[-20%] xl:right-[-10%] w-auto"
            src={ellipsMd}
            alt="Ellips Medium"
          />
          <img
            className="animate-orbit-reverse transition-transform 
            absolute bottom-[50%] right-[-20%] xl:right-[-15%] w-auto"
            src={ellipsSm}
            alt="Ellips Small"
          />
          <img
            className="animate-orbit transition-transform 
            absolute bottom-[35%] left-[-10%] xl:bottom-[15%] w-auto"
            src={ellipsXs}
            alt="Ellips Xs"
          />
          <HeroHeading
            params={{
              content: "Learn more effectively with AI",
            }}
          />
          <p className="w-[70%] xl:w-[35%] text-[var(--input-text-clr)]">
            Upload your work and get access to a wide range of study materials.
            Let AI guide your learning and help you excel in your studies
          </p>
          <Button
            params={{
              content: "Start working 👾",
              className: "mt-6 btn-primary",
            }}
          />
        </div>
      </section>

      <section className="w-full flex flex-col items-start mt-20">
        <SectionHeading
          params={{
            content: "Why LearnIT platform is useful?",
          }}
        />
        <p className="text-left w-[70%] mb-16">
          LearnIT is a platform designed specifically for students. Thanks to
          the capabilities of Artificial Intelligence, we help students upload
          and check their assignments, access study materials and collaborate
          more effectively with teachers.
        </p>
        <div className="feature-card-container flex flex-col md:flex-row w-full gap-8 md:gap-4 lg:gap-10">
          <FeatureCard
            params={{
              heading: "Lectures explanation",
              content:
                "Get detailed explanations of lecture materials with the help of an intelligent assistant.",
              logo: lecturesIcon,
            }}
          />
          <FeatureCard
            params={{
              heading: "Review of tasks",
              content:
                "A quick and accurate review of your completed tasks with recommendations for improvement.",
              logo: homeworkCheckIcon,
            }}
          />
          <FeatureCard
            params={{
              heading: "Plagiarism detection",
              content:
                "A tool for automatic analysis and detection of plagiarism in your works.",
              logo: plagiarismIcon,
            }}
          />
        </div>
      </section>

      <section className="w-full flex flex-col mt-20 items-center">
        <SectionHeading
          params={{
            content: "Our Team",
          }}
        />
        <p className="text-center w-[70%] mb-16">
          Meet our team! Together, we work on creating the platform and shaping
          innovative solutions to enhance your learning experience
        </p>

        <div
          className="team-cards grid grid-cols-1 grid-rows-auto md:grid-cols-2 
        lg:grid-cols-4 lg:grid-rows-3 w-full h-auto gap-x-4 lg:gap-x-6 xl:gap-x-10 
        gap-y-10 lg:gap-y-14"
        >
          <TeamCard
            params={{
              role: "Mentor",
              name: "Anastasia Deineko",
              position:
                "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
              img: "bg-anastasia-img",
            }}
          />

          <TeamCard
            params={{
              role: "Mentor",
              name: "Denis Savenkov",
              position:
                "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
              img: "bg-denis-img",
            }}
          />

          <TeamCard
            params={{
              role: "Project Manager",
              name: "Ivanka Chuliy",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
              img: "bg-ivanka-img",
            }}
          />

          <TeamCard
            params={{
              role: "NLP Engineer",
              name: "Roman Lapiuk",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
              img: "bg-roman-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Engineer",
              name: "Khrystyna Savchyn",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
              img: "bg-khrystyna-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Scientist",
              name: "Maksym Kahadii",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-5",
              img: "bg-maksym-img",
            }}
          />

          <TeamCard
            params={{
              role: "Designer",
              name: "Daryna Mamokina",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
              img: "bg-daryna-img",
            }}
          />

          <TeamCard
            params={{
              role: "Frontend Dev",
              name: "Liza Humnytska",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
              img: "bg-liza-img",
            }}
          />

          <TeamCard
            params={{
              role: "Backend Dev",
              name: "Svyatoslav Strubitskiy",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4",
              img: "bg-svyat-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Engineer",
              name: "Oleksandr Prosymiak",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5",
              img: "bg-oleksandr-img",
            }}
          />
        </div>
      </section>
    </div>
  );
}
