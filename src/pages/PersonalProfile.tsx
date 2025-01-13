import { useState, useEffect } from "react";
import { motion } from "motion/react";

import Breadcrumbs from "../components/ui/Breadcrumbs";
import SectionHeading from "../components/ui/SectionHeading";
import ProfileTab from "../components/ui/ProfileTab";
import Button from "../components/ui/Button";

import { getUserData } from "../methods/getUserData";
import { UserDataTypes } from "../interfaces/userDataTypes";

import bot from "../assets/images/bot.png";

export default function PersonalProfile() {
  const [tab, setTab] = useState<number>(0);

  const [user, setUser] = useState<UserDataTypes | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();

      setUser(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row">
      <div
        className="pl-[var(--sm-px)] md:pl-[var(--md-px)] lg:pl-[var(--lg-px)]
          flex flex-col gap-10 pt-[40px] bg-[var(--dark-clr)] border-r-[var(--border-clr)]
          border-r-2 h-[calc(100vh-var(--navbar-height))] w-[30%]"
      >
        <ul
          className="flex flex-col gap-2 flex-2 text-left justify-start text-xs 
              font-medium"
        >
          <ProfileTab
            params={{
              content: "Personal Info",
              onClickFunction: () => setTab(0),
              isActive: tab === 0 ? true : false,
            }}
          />
          <ProfileTab
            params={{
              content: "Saved Chats",
              onClickFunction: () => setTab(1),
              isActive: tab === 1 ? true : false,
            }}
          />
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="mt-[40px] w-full h-full flex flex-col pl-[40px]
          text-left items-start pr-[var(--sm-px)] md:pr-[var(--md-px)] lg:pr-[var(--lg-px)]"
      >
        <Breadcrumbs />
        <div className={`${tab === 0 ? "" : "hidden"} flex flex-col w-full`}>
          <SectionHeading params={{ content: "Personal Info" }} />
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-6 rounded-2xl w-fit h-fit border-2 border-[var(--border-clr)] p-4 bg-[var(--dark-clr)]">
              <Button
                params={{
                  content: "Change password",
                  className: "btn-primary",
                }}
              />
              <Button
                params={{
                  content: "Edit photo",
                  className: "btn-secondary",
                }}
              />
              <Button
                params={{
                  content: "Edit info",
                  className: "btn-secondary",
                }}
              />
            </div>
            <div className="flex flex-row gap-6 rounded-2xl w-full h-fit border-2 border-[var(--border-clr)] p-4 bg-[var(--dark-clr)]">
              <div className="w-52 h-52 rounded-xl border-2 border-[var(--border-clr)] bg-[var(--primary-clr)] overflow-hidden">
                <img src={bot} alt="" />
              </div>
              {user ? (
                <div className="flex flex-col gap-4 justify-center">
                  <p className="font-bold text-xl">{user.full_name}</p>
                  <p className="font-semibold text-[var(--grey-clr)]">
                    {user.role}
                  </p>
                  <p>{user.email}</p>
                  <p>{user.phone_number}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={`${tab === 1 ? "" : "hidden"} flex flex-col w-full`}>
          <SectionHeading params={{ content: "Saved Chats" }} />
          <div className="flex flex-col gap-6"></div>
        </div>
      </motion.div>
    </div>
  );
}
