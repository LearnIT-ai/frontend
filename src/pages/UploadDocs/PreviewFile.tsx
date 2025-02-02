// import axios from "axios";

import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import SectionDescription from "../../components/ui/SectionDescription";
import ChatButton from "../../components/ui/chat_ui/ChatButton";

import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function PreviewFile() {
  const storedDocument = JSON.parse(
    localStorage.getItem("selectedFile") ?? "{}"
  );
  const navigate = useNavigate();

  const submitDocument = () => {
    navigate("/upload-file/preview/submit");
    // await axios
    //   .post(`http://localhost:5050/`, {
    //     document: document,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/upload-file/preview/submit");
    //   })
    //   .catch((e) => {
    //     console.error(e.message);
    //   });
  };

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
              content: "Upload Files: Preview",
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
          <ul className="flex flex-col gap-2 mb-6">
            <li className="flex gap-4 items-center">
              <p className="text-xl">📄</p>
              <p className="text-[var(--input-text-clr)]">Select a file</p>
            </li>
            <li className="flex gap-4 items-center font-semibold">
              <p className="text-xl">🤖</p>
              <p>Preview the document and talk with AI Assistant</p>
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-xl">✅</p>
              <p className="text-[var(--input-text-clr)]">
                Submit the document
              </p>
            </li>
          </ul>
          <Button
            params={{
              content: "Submit the document",
              className: "btn-primary mb-16",
              onClickFunction: submitDocument,
            }}
          />
          <div className="w-full h-fit lg:h-[80vh] flex flex-col lg:flex-row overflow-x-hidden rounded-2xl gap-4">
            <div
              className="flex w-full h-fit lg:h-full lg:w-fit bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] p-4 lg:p-3 xl:p-4
          gap-4 lg:gap-3 xl:gap-4 flex-row lg:flex-col rounded-2xl z-10"
            >
              <ChatButton
                params={{
                  size: 24,
                  className: "w-6 lg:w-4 xl:w-6",
                  path: "M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z",
                }}
              />
              <ChatButton
                params={{
                  size: 24,
                  className: "w-6 lg:w-4 xl:w-6",
                  path: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2",
                }}
              />
              <ChatButton
                params={{
                  size: 32,
                  className: "rotate-45 w-8 lg:w-6 xl:w-8",
                  path: "M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708",
                }}
              />
              <ChatButton
                params={{
                  size: 24,
                  className: "w-6 lg:w-4 xl:w-6",
                  path: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0",
                }}
              />
            </div>

            <div
              className="chat relative w-full lg:w-[80%] h-[80vh] lg:h-full bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] 
          flex flex-col justify-end rounded-2xl z-0 gap-4 overflow-hidden"
            >
              <div className="messages-container p-4 pb-20 w-full h-full flex flex-col gap-4 overflow-y-auto rounded-2xl"></div>
              <div
                className="absolute px-4 pb-4 bg-[var(--dark-clr)] w-full flex flex-row justify-center items-end gap-4
            "
              >
                <textarea
                  className={`chat-textarea resize-none top- h-12 min-h-12 transition-none overflow-hidden bg-[var(--input-clr)] border-2 border-[var(--border-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] placeholder-[var(--input-text-clr)] text-sm rounded-xl block w-full duration-300 p-3`}
                  placeholder="Ask something..."
                />
                <ChatButton
                  params={{
                    size: 16,
                    onClickFunction: () => undefined,
                    className: "transition-none",
                    path: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z",
                  }}
                />
              </div>
            </div>
            <iframe
              src={storedDocument.url}
              className="w-full h-[80vh] lg:h-full border-2 border-[var(--border-clr)] rounded-2xl"
              title="PDF Viewer"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
