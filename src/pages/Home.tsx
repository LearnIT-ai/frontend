import ellipsLg from "../assets/images/ellipse-lg.png";
import ellipsMd from "../assets/images/ellipse-md.png";
import ellipsSm from "../assets/images/ellipse-sm.png";
import ellipsXs from "../assets/images/ellipse-xs.png";

import Button from "../components/ui/Button";
import HeroHeading from "../components/ui/HeroHeading";
import SectionHeading from "../components/ui/SectionHeading";

export default function Home() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <section className="flex w-full mt-[calc(var(--navbar-height)+40px)] h-[calc(100vh-var(--navbar-height)-80px)] mb-[40px]">
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
            absolute bottom-[40%] right-[-20%] xl:right-[-15%] w-auto"
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
              content: "Вчіться ефективніше за допомогою ШІ",
            }}
          />
          <p className="w-[70%] xl:w-[35%] text-[var(--input-text-clr)]">
            Завантажте свої роботи, отримайте доступ до навчальних матеріалів та
            дозвольте ШІ допомагати Вам навчатися
          </p>
          <Button params={{ content: "Почати роботу 👾", className: "mt-6" }} />
        </div>
      </section>

      <section className="w-full flex flex-col items-start mt-20">
        <SectionHeading
          params={{
            content: "Чим корисна платформа LearnIT?",
          }}
        />
        <p className="text-left w-[70%]">
          Learn.it — це платформа, яка розроблена спеціально для студентів.
          Завдяки можливостям штучного інтелекту ми допомагаємо студентам
          завантажувати і перевіряти свої завдання, отримувати доступ до
          навчальних матеріалів та ефективніше співпрацювати з викладачами
        </p>
      </section>
    </div>
  );
}
