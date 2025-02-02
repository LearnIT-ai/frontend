import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionDescription from "../../components/ui/SectionDescription";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function SubmitPage() {
  const navigate = useNavigate();

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
              content: "Upload Files: Submit",
            }}
          />
          <SectionDescription
            params={{
              content:
                "Upload your hometask in PDF format and check it correctness with the AI Assistant:",
              alignment: "text-left",
              className: "mb-4",
            }}
          />
          <ul className="flex flex-col gap-2 mb-16">
            <li className="flex gap-4 items-center">
              <p className="text-xl">📄</p>
              <p className="text-[var(--input-text-clr)]">Select a file</p>
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-xl">🤖</p>
              <p className="text-[var(--input-text-clr)]">
                Preview the document and talk with AI Assistant
              </p>
            </li>
            <li className="flex gap-4 items-center font-semibold">
              <p className="text-xl">✅</p>
              <p>Submit the document</p>
            </li>
          </ul>
          <div
            className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex justify-center items-center flex-col p-10 lg:p-20 gap-6"
          >
            <p className="text-[60px] font-semibold uppercase">Great job!</p>
            <p className="text-[var(--input-text-clr)]">
              Now wait for the professor to review your work...
            </p>

            <Button
              params={{
                content: "Return to Home Page",
                onClickFunction: () => navigate("/"),
                className: "btn-primary mt-4",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
